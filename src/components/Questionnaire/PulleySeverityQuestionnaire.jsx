import React, { useState, useEffect, useRef } from 'react';
import { injuryMapping } from '../../constants/injuryMapping';
import { Card } from "../ui/card";
import AppHeader from '../AppHeader/AppHeader';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import Layout from '../Layout/Layout';
import { evaluateCondition } from '@/lib/conditionEvaluator';
import { ResultsCard } from '@/components/ui/ResultsCard';
import { QuestionnaireLayout } from '@/components/ui/QuestionnaireLayout';
import { QuestionCard } from '@/components/ui/QuestionCard';

function PulleySeverityQuestionnaire({ questionnaire, onBack, onComplete }) {
  const getQuestionIndex = (questionId) => {
    return questionnaire.questions.findIndex(q => q.id === questionId);
  };
  const firstQuestionId = questionnaire.questions[0].id;
  const [currentQuestionId, setCurrentQuestionId] = useState(firstQuestionId);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({});
  const [skippedQuestions, setSkippedQuestions] = useState(new Set());
  const [displayedResult, setDisplayedResult] = useState('');
  const [resultsSummary, setResultsSummary] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const questionnaireContainerRef = useRef(null);

  useEffect(() => {
    if (showResults || currentQuestionId !== firstQuestionId) {
      questionnaireContainerRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [showResults, currentQuestionId, firstQuestionId]);

  const handleAnswer = (questionId, answer) => {
    const newResponses = {
      ...responses,
      [questionId]: answer,
    };
    setResponses(newResponses);

    // Calculate skipped questions after updating responses
    const newSkippedQuestions = new Set();
    questionnaire.questions.forEach(question => {
      if (shouldSkipQuestion(question.id, newResponses)) {
        newSkippedQuestions.add(question.id);
      }
    });
    setSkippedQuestions(newSkippedQuestions);
  };

  const getNextQuestionId = (currentId) => {
    const currentIndex = getQuestionIndex(currentId);
    let nextIndex = currentIndex + 1;

    while (nextIndex < questionnaire.questions.length) {
      const nextQuestion = questionnaire.questions[nextIndex];
      if (!skippedQuestions.has(nextQuestion.id)) {
        return nextQuestion.id;
      }
      nextIndex++;
    }
    return null;
  };

  const getPreviousQuestionId = (currentId) => {
    const currentIndex = getQuestionIndex(currentId);
    let prevIndex = currentIndex - 1;
    while (prevIndex >= 0) {
      const prevQuestion = questionnaire.questions[prevIndex];
      if (!skippedQuestions.has(prevQuestion.id)) {
        return prevQuestion.id;
      }
      prevIndex--;
    }
    return null;
  };

  const calculateScoresForAnswers = (currentResponses) => {
    const totalScores = {};

    // Initialize all injury scores to 0
    Object.keys(injuryMapping[questionnaire.name]).forEach(injuryCode => {
      totalScores[injuryCode] = 0;
    });

    // Calculate base scores from answers
    questionnaire.questions.forEach((q) => {
      if (skippedQuestions.has(q.id)) return;

      const answer = currentResponses[q.id];
      if (answer) {
        if (Array.isArray(answer)) {
          answer.forEach(a => {
            for (const [category, score] of Object.entries(a.scores)) {
              totalScores[category] = (totalScores[category] || 0) + score;
            }
          });
        } else {
          for (const [category, score] of Object.entries(answer.scores)) {
            totalScores[category] = (totalScores[category] || 0) + score;
          }
        }
      }

      // Apply score modifications from conditions
      if (q.conditions) {
        q.conditions.forEach(condition => {
          if (condition.action === 'modifyscore') {
            const matchesCondition = evaluateCondition(condition.if, currentResponses, q.id);
            if (matchesCondition) {
              const scores = Array.isArray(condition.parameters.scores)
                ? condition.parameters.scores
                : [condition.parameters.scores];

              scores.forEach(score => {
                totalScores[score] = (totalScores[score] || 0) + condition.parameters.points;
              });
            }
          }
        });
      }
    });

    return totalScores;
  };

  const shouldSkipQuestion = (questionId, currentResponses = responses) => {
    const currentQuestion = questionnaire.questions.find(q => q.id === questionId);
    if (!currentQuestion?.conditions) return false;

    return currentQuestion.conditions.some(condition => {
      if (condition.action !== 'skip') return false;
      return evaluateCondition(condition.if, currentResponses, questionId);
    });
  };

  useEffect(() => {
    const newSkippedQuestions = new Set();
    for (let i = 0; i < questionnaire.questions.length; i++) {
      if (shouldSkipQuestion(questionnaire.questions[i].id, responses)) {
        newSkippedQuestions.add(questionnaire.questions[i].id);
      }
    }
    setSkippedQuestions(newSkippedQuestions);
  }, [responses]);

  const handleSubmit = (finalResponses = responses) => {
    setIsCalculating(true);
    console.log("handleSubmit called");
    console.log("InjuryMapping:", injuryMapping);

    // Calculate scores
    const scores = calculateScoresForAnswers(finalResponses);

    // INSERT RESULTS LOGIC HERE

    // Wait for loading animation
    setTimeout(() => {
      Promise.all([
        setResults(scores),
        setShowResults(true),
        setDisplayedResult(displayedResult),
        setResultsSummary(resultsSummary),
        setAdditionalDetails(additionalDetails),
      ]).then(() => {
        setIsCalculating(false);
        onComplete({ results: scores, responses: finalResponses });
        console.log("All states updated");
      });
    }, 3000); // Match this with the time it takes for progress to reach 100%
  };

  // Check for early completion
  const checkForEarlyCompletion = (currentId) => {
    const currentQuestionIndex = getQuestionIndex(currentId);
    const aromPositionOneIndex = questionnaire.questions.findIndex(q => q.id === 'aromPositionOne');

    if (currentQuestionIndex === aromPositionOneIndex - 1) {
      const scores = calculateScoresForAnswers(responses);
      const sortedScores = Object.entries(scores)
        .sort(([, a], [, b]) => b - a);

      const [highestInjury, highestScore] = sortedScores[0] || ['', 0];
      const secondHighestScore = sortedScores[1]?.[1] || 0;

      // Check if "pulley injury grade III-IV" (injury code B) has 3+ points more than others
      if (highestInjury === 'B' && highestScore >= secondHighestScore + 3) {
        return true;
      }
    }
    return false;
  };

  // Skip to next non-skipped question
  const lastQuestionId = questionnaire.questions[questionnaire.questions.length - 1].id;
  while (skippedQuestions.has(currentQuestionId) && currentQuestionId !== lastQuestionId) {
    const nextId = getNextQuestionId(currentQuestionId);
    if (!nextId) break;
    setCurrentQuestionId(nextId);
  }

  if (isCalculating) {
    return <LoadingScreen />;
  }

  if (showResults) {
    return (
      <Layout>
        <Card ref={questionnaireContainerRef}>
          <AppHeader />
          <ResultsCard
            title="Pulley Injury Severity Assessment Results"
            displayedResult={displayedResult}
            resultsSummary={resultsSummary}
            additionalDetails={additionalDetails}
            questions={questionnaire.questions}
            responses={responses}
            skippedQuestions={skippedQuestions}
            getQuestionIndex={getQuestionIndex}
            scores={calculateScoresForAnswers(responses)}
            questionnaireName={questionnaire.name}
            onBack={onBack}
          />
        </Card>
      </Layout>
    );
  }

  const currentQuestion = questionnaire.questions.find(q => q.id === currentQuestionId);
  const progress = ((getQuestionIndex(currentQuestionId) + 1) / questionnaire.questions.length) * 100;

  if (!currentQuestion) {
    return <LoadingScreen />;
  }

  return (
    <QuestionnaireLayout
      title={questionnaire.name}
      currentQuestion={getQuestionIndex(currentQuestionId) + 1}
      totalQuestions={questionnaire.questions.length}
      progress={progress}
      onBack={onBack}
      containerRef={questionnaireContainerRef}
      scores={calculateScoresForAnswers(responses)}
      questionnaireName={questionnaire.name}
    >
      <QuestionCard
        question={currentQuestion}
        response={responses[currentQuestionId]}
        onAnswer={(answer) => handleAnswer(currentQuestionId, answer)}
        onPrevious={() => setCurrentQuestionId(getPreviousQuestionId(currentQuestionId))}
        onNext={() => {
          const nextId = getNextQuestionId(currentQuestionId);
          if (checkForEarlyCompletion(currentQuestionId)) {
            handleSubmit();
          } else if (nextId === null) {
            handleSubmit();
          } else {
            setCurrentQuestionId(nextId);
          }
        }}
        isFirst={getQuestionIndex(currentQuestionId) < 1}
        isLast={getQuestionIndex(currentQuestionId) >= questionnaire.questions.length - 1}
      />
    </QuestionnaireLayout>
  );
}

export default PulleySeverityQuestionnaire;

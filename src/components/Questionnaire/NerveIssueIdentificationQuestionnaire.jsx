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

function NerveIssueIdentificationQuestionnaire({ questionnaire, onBack, onComplete }) {
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
    const [locationResult, setLocationResult] = useState('');
    const [resultsSummary, setResultsSummary] = useState('');
    const [additionalDetails, setAdditionalDetails] = useState('');
    const [isCalculating, setIsCalculating] = useState(false);
    const questionnaireContainerRef = useRef(null);
    const [earlyCompletion, setEarlyCompletion] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        if (showResults || currentQuestionIndex >= 0 || currentQuestionId) {
            questionnaireContainerRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
      }, [showResults, currentQuestionIndex, currentQuestionId]);

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
        return {
            // Return empty scores for consistency with other questionnaires
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            E: 0,
            F: 0,
            G: 0,
            H: 0,
            I: 0,
            J: 0,
            K: 0,
            L: 0,
            M: 0,
            N: 0
        };
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

        // Initialize results
        let displayedResult ;
        let resultsSummary;
        let additionalDetails;

        // Get answers for each question
        const nerveTensionTestOneAnswer = finalResponses["nerveTensionTestOne"]?.id;
        const nerveTensionTestTwoAnswer = finalResponses["nerveTensionTestTwo"]?.id;
        const nerveTensionTestThreeAnswer = finalResponses["nerveTensionTestThree"]?.id;

        // Determine results based on answers
        if (nerveTensionTestOneAnswer === "nerveTensionTestOneAnswer1") {
            displayedResult = "Ulnar Nerve";
            resultsSummary = "🥳 Success! You've completed the assessment.";
        } else if (nerveTensionTestOneAnswer === "nerveTensionTestOneAnswer2") {
            displayedResult = "Median Nerve";
            resultsSummary = "🥳 Success! You've completed the assessment.";
        } else if (nerveTensionTestOneAnswer === "nerveTensionTestOneAnswer3") {
            displayedResult = "Ulnar Nerve & Median Nerve";
            resultsSummary = "🎉 Success! You've completed the assessment.";
        } else if (nerveTensionTestTwoAnswer === "nerveTensionTestTwoAnswer1") {
            displayedResult = "Ulnar Nerve";
            resultsSummary = "🥳 Success! You've completed the assessment.";
        } else if (nerveTensionTestTwoAnswer === "nerveTensionTestTwoAnswer2") {
            displayedResult = "Median Nerve";
            resultsSummary = "🥳 Success! You've completed the assessment.";
        } else if (nerveTensionTestThreeAnswer === "nerveTensionTestThreeAnswer1") {
            displayedResult = "Primary Issue: Ulnar Nerve; Possible Secondary Issue: Median Nerve";
            resultsSummary = "💪 Success! You've completed the assessment.";
        } else if (nerveTensionTestThreeAnswer === "nerveTensionTestThreeAnswer2") {
            displayedResult = "Primary Issue: Median Nerve; Possible Secondary Issue: Ulnar Nerve";
            resultsSummary = "💪 Success! You've completed the assessment.";
        } else if (nerveTensionTestThreeAnswer === "nerveTensionTestThreeAnswer3") {
            displayedResult = "Ulnar Nerve & Median Nerve";
            resultsSummary = "🎉 Success! You've completed the assessment.";
        } else {
            displayedResult = "Data Unclear";
            resultsSummary = "😓 Something's wrong here...";
        }

        // Set additional details based on resultsSummary
        if (resultsSummary.includes("🥳")) {
            additionalDetails = "Great job! You've completed the assessment. Time to start recovering! Huzzah!";
        } else if (resultsSummary.includes("🎉")) {
            additionalDetails = "Great job! You've completed the assessment. Your answers are associated with both the ulnar and median nerves. This is not uncommon as they are both quite close together in many parts of the upper extremity.";
        } else if (resultsSummary.includes("💪")) {
            additionalDetails = "Great job! You've completed the assessment. Your answers are associated with one nerve being the primary culprit. However, because you selected 'Both' on the second nerve tension test, you may want to consider treating both nerves (with emphasis on the primary one).";
        } else {
            additionalDetails = "Uh-oh! Something's not right. If you've followed the instructions, performed the tests correctly, and selected answers for all appropriate questions, you may be encountering a bug. Please refresh this page and retake the assessment. If you continue to receive the same result, your condition may simply require professional evaluation. You can start by emailing us screenshots of your answer log and scores (enter code 'hb-debug' into the debug field below) to info@hoopersbeta.com and we will be happy to assist you if you can. Alternatively, you can speed up the process by scheduling an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.";
        }

        // Wait for loading animation (consistent with other questionnaires)
        setTimeout(() => {
            Promise.all([
                setResults(calculateScoresForAnswers(finalResponses)),
                setShowResults(true),
                setDisplayedResult(displayedResult),
                setLocationResult(""),  // Empty string since no location result is needed
                setResultsSummary(resultsSummary),
                setAdditionalDetails(additionalDetails)
            ]).then(() => {
                setIsCalculating(false);
                console.log("All states updated");
            });
        }, 3000);
    };

    // Check for early completion
    const checkForEarlyCompletion = (currentId) => {
        const currentQuestionIndex = getQuestionIndex(currentId);
        // Currently no early completion logic for this questionnaire
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
        return <LoadingScreen containerRef={questionnaireContainerRef} />;
    }

    if (showResults) {
        return (
            <Layout>
                <Card ref={questionnaireContainerRef}>
                    <AppHeader />
                    <ResultsCard
                        title="Nerve Issue Identification Results"
                        displayedResult={displayedResult}
                        locationResult={locationResult}
                        resultsSummary={resultsSummary}
                        additionalDetails={additionalDetails}
                        nerveIssuePossibility={null}
                        cystIndication={null}
                        questions={questionnaire.questions}
                        responses={responses}
                        skippedQuestions={skippedQuestions}
                        getQuestionIndex={getQuestionIndex}
                        scores={calculateScoresForAnswers(responses)}
                        questionnaireName={questionnaire.name}
                        onBack={onBack}
                        containerRef={questionnaireContainerRef}
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

export default NerveIssueIdentificationQuestionnaire;

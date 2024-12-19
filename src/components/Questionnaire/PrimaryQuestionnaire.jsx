import React, { useState, useEffect, useRef } from 'react';
import { injuryMapping } from '../../constants/injuryMapping';
import { Card } from "../ui/card";
import AppHeader from '../AppHeader/AppHeader';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { INJURY_DESCRIPTIONS } from '../../constants/injuryDescriptions';
import Layout from '../Layout/Layout';
import { PRIMARY_DATA } from '../../questionnaireData/primaryData';
import { evaluateCondition } from '@/lib/conditionEvaluator';
import { ResultsCard } from '@/components/ui/ResultsCard';
import { QuestionnaireLayout } from '@/components/ui/QuestionnaireLayout';
import { QuestionCard } from '@/components/ui/QuestionCard';

function PrimaryQuestionnaire({ questionnaire, onBack, onComplete }) {
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
  const [nerveIssuePossibility, setNerveIssuePossibility] = useState('');
  const [cystIndication, setCystIndication] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [injuryDescription, setInjuryDescription] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const questionnaireContainerRef = useRef(null);
  const [earlyCompletion, setEarlyCompletion] = useState(false);

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
    const isGradeIVb = responses['visualBowstringing']?.id === 'visualBowstringingAnswer1';
    console.log("Early completion:", isGradeIVb);
    console.log("Visual bowstringing response:", responses['visualBowstringing']?.id);

    // Calculate scores
    const scores = calculateScoresForAnswers(finalResponses);

    // Sort and filter results
    const sortedResults = Object.entries(scores)
      .sort((a, b) => b[1] - a[1]);
    console.log("Sorted results:", sortedResults);

    const [B3, D3] = sortedResults[0] || [null, 0];
    const [, D4] = sortedResults[1] || [null, 0];
    const [, D5] = sortedResults[2] || [null, 0];
    const [, D16] = sortedResults[13] || [null, 0];

    console.log("Key values:", {
      B3, D3, D4, D5, D16,
      "First injury code": sortedResults[0]?.[0],
      "First injury score": sortedResults[0]?.[1],
      "Second injury code": sortedResults[1]?.[0],
      "Second injury score": sortedResults[1]?.[1]
    });

    // Get all scores equal to D4 and D4-1
    const acceptableScoresArray = sortedResults
      .slice(1)  // Start from second result
      .filter(([_, score]) => score >= D4 - 1);  // Only keep scores equal to D4 and D4-1
    const acceptableScoresString = acceptableScoresArray.map(([code]) => code).join('');

    console.log("Acceptable scores array:", acceptableScoresArray);
    console.log("Acceptable scores string:", acceptableScoresString);

    const injuryNames = injuryMapping[questionnaire.name];
    const firstInjuryName = injuryNames[B3] || B3;

    const cystScore = scores['I'] || 0;
    const nerveScore = scores['H'] || 0;

    let resultsSummary;
    let displayedResult;

    // Early completion override for Grade IVb
    if (isGradeIVb) {
      resultsSummary = "⚕️ Medical evaluation is needed.";
      displayedResult = "Grade IVb";
    } else {
      // Regular results logic

      // resultsSummary logic
      if (D3 >= D4 + 3 && /[GDFNEABKJ]/.test(B3)) {
        resultsSummary = `🎉 Success! Go back to the dashboard and complete the applicable severity assessment.`;
      } else if (D3 >= D4 + 3) {
        resultsSummary = `🥳 Success! You've completed the assessment.`;
      } else if (cystScore >= D3 - 2 && cystScore < D3 && /[ACIHLJ]/.test(B3)) {
        resultsSummary = `🙌 Good work! Go back to the dashboard and complete differential assessment 1.`;
      } else if (D3 > D4 && /[ACIHLJ]/.test(B3) && // If D3 is greater than D4 and B3 is one of ACIHLJ
        (D4 > D16 ?
          /[ACIHL]/.test(acceptableScoresString) // Contains at least one of ACIHL
          : true)
      ) {
        resultsSummary = `🙌 Good work! Go back to the dashboard and complete differential assessment 1.`;
      } else if (D3 > D4 && /[FGN]/.test(B3) && // If D3 is greater than D4 and B3 is one of FGN
        (D4 > D16 ?
          /[FGN]/.test(acceptableScoresString) // Contains at least one of FGN
          : true)
      ) {
        resultsSummary = `🙌 Good work! Go back to the dashboard and complete differential assessment 2.`;
      } else if (D3 > D4 && /[BDE]/.test(B3) && // If D3 is greater than D4 and B3 is one of BDE
        (D4 > D16 ?
          /[BDE]{2}/.test(acceptableScoresString) // Contains at least two of BDE
          : true)
      ) {
        resultsSummary = `🙌 Good work! Go back to the dashboard and complete differential assessments 3 & 4.`;
      } else if (D3 > D4 && /[BD]/.test(B3) && // If D3 is greater than D4 and B3 is one of BD
        (D4 > D16 ?
          /[BD]/.test(acceptableScoresString) // Contains at least one of BD
          : true)
      ) {
        resultsSummary = `🙌 Good work! Go back to the dashboard and complete differential assessment 3.`;
      } else if (D3 > D4 && /[DE]/.test(B3) && // If D3 is greater than D4 and B3 is one of DE
        (D4 > D16 ?
          /[DE]/.test(acceptableScoresString) // Contains at least one of DE
          : true)
      ) {
        resultsSummary = `🙌 Good work! Go back to the dashboard and complete differential assessment 4.`;
      } else if (D3 === D4 && /[ACIHLJ]/.test(B3) && // If D3 equals D4 and B3 is one of ACIHLJ
        (D4 > D16 ?
          /[ACIHLJ]/.test(acceptableScoresString) && // Contains at least one of ACIHLJ
          !/[^ACIHLJ]/.test(acceptableScoresString)  // ONLY contains ACIHLJ
          : true)
      ) {
        resultsSummary = `🙌 Good work! Go back to the dashboard and complete differential assessment 1.`;
      } else if (D3 === D4 && /[FGN]/.test(B3) && // If D3 equals D4 and B3 is one of FGN
        (D4 > D16 ?
          /[FGN]/.test(acceptableScoresString) && // Contains at least one of FGN
          !/[^FGN]/.test(acceptableScoresString)  // ONLY contains FGN
          : true)
      ) {
        resultsSummary = `🙌 Good work! Go back to the dashboard and complete differential assessment 2.`;
      } else if (D3 === D4 && /[BDE]/.test(B3) && // If D3 equals D4 and B3 is one of BDE
        (D4 > D16 ?
          /[BDE]{2}/.test(acceptableScoresString) && // Contains at least two of BDE
          !/[^BDE]/.test(acceptableScoresString)  // ONLY contains BDE
          : true)
      ) {
        resultsSummary = `🙌 Good work! Go back to the dashboard and complete differential assessments 3 & 4.`;
      } else if (D3 === D4 && /[BD]/.test(B3) && // If D3 equals D4 and B3 is one of BD
        (D4 > D16 ?
          /[BD]/.test(acceptableScoresString) && // Contains at least one of BD
          !/[^BD]/.test(acceptableScoresString)  // ONLY contains BD
          : true)
      ) {
        resultsSummary = `🙌 Good work! Go back to the dashboard and complete differential assessment 3.`;
      } else if (D3 === D4 && /[DE]/.test(B3) && // If D3 equals D4 and B3 is one of DE
        (D4 > D16 ?
          /[DE]/.test(acceptableScoresString) && // Contains at least one of DE
          !/[^DE]/.test(acceptableScoresString)  // ONLY contains DE
          : true)
      ) {
        resultsSummary = `🙌 Good work! Go back to the dashboard and complete differential assessment 4.`;
      } else if (D3 === D4 + 2 && /[GDFNEABKJ]/.test(B3)) {
        resultsSummary = `🎉 Success! Go back to the dashboard and complete the applicable severity assessment.`;
      } else if (D3 === D4 + 2) {
        resultsSummary = `🥳 Success! You've completed the assessment.`;
      } else if (nerveScore === D3 && /[^ACILJ]/.test(B3) && /[^ACILJ]/.test(sortedResults[1][0]) && D3 >= D5 + 2) {
        resultsSummary = `💪 Success! Go back to the dashboard and complete differential assessment 1, paying special attention to nerve tension tests.`;
      } else if (nerveScore < D3 && nerveScore >= D3 - 1 && D3 > D4 && /[^ACILJ]/.test(B3) && D3 >= D5 + 2) {
        resultsSummary = `💪 Success! Go back to the dashboard and complete differential assessment 1, paying special attention to nerve tension tests.`;
      } else if (D3 >= D5 + 1 && D4 > D5 && /[AB]/.test(B3) && /[AB]/.test(sortedResults[1][0])) {
        resultsSummary = `🤟 Success! Go back to the dashboard and complete the pulley injury severity assessment.`;
      } else if (D3 <= D4 + 1) {
        resultsSummary = `🤔 Something's wrong here.`;
      } else {
        resultsSummary = `🙃 Sorry, there seems to be an error.`;
      }

      // displayedResult logic
      if (/💪/.test(resultsSummary) || /🎉/.test(resultsSummary) || /🥳/.test(resultsSummary)) {
        displayedResult = firstInjuryName;
      } else if (/🤟/.test(resultsSummary)) {
        displayedResult = "Pulley injury";
      } else if (/🤙/.test(resultsSummary) || /🙌/.test(resultsSummary)) {
        displayedResult = "More information needed";
      } else if (/🤔/.test(resultsSummary)) {
        displayedResult = "Data unclear";
      } else {
        displayedResult = "Error";
      }
    }

    // Add nerve issue possibility calculation
    let nerveIssuePossibility;
    if (displayedResult === "Grade IVb") {  // Add this condition
      nerveIssuePossibility = "None";
    } else if (firstInjuryName.toLowerCase() === "nerve issue") {
      nerveIssuePossibility = "⚠️ High";
    } else if (/1/.test(resultsSummary)) {
      nerveIssuePossibility = "To be determined...";
    } else if (
      nerveScore === D3 &&
      /[^ACILJ]/.test(B3) &&
      sortedResults[1] && /[^ACILJ]/.test(sortedResults[1][0]) &&
      D3 >= D5 + 2
    ) {
      nerveIssuePossibility = "⚠️ Test Needed";
    } else if (
      nerveScore >= D3 - 2 &&
      D3 > D4 &&
      /[^ACILJ]/.test(B3) &&
      D3 >= D5 + 2
    ) {
      nerveIssuePossibility = "⚠️ Medium";
    } else if (
      nerveScore >= D3 - 2 &&
      /unclear|information/i.test(displayedResult)
    ) {
      nerveIssuePossibility = "⚠️ Yes";
    } else {
      nerveIssuePossibility = "None";
    }

    // Add cyst possibility calculation
    let cystIndication;
    if (displayedResult === "Grade IVb") {  // Add this condition
      cystIndication = "None";
    } else if (/1/.test(resultsSummary)) {
      cystIndication = "To be determined...";
    } else if (firstInjuryName.toLowerCase() === "cyst") {
      cystIndication = "⚠️ Yes";
    } else if (cystScore >= D3 - 5 && responses[PRIMARY_DATA.abnormalMass.id]?.id === "abnormalMassAnswer1") {
      cystIndication = "⚠️ Yes";
    } else if (cystScore <= 0) {
      cystIndication = "None";
    } else {
      cystIndication = "None";
    }

    // Add additional details based on result type
    let additionalDetails;

    if (/⚕️/.test(resultsSummary)) {
      additionalDetails = "A grade IVb pulley injury involves complete ruptures of multiple pulleys. Due to the complexity of this injury and the possibility of other complicating factors, your first step should be to see your primary care physician. They will likely order imaging to confirm the extent of the damage while ruling out involvement of other tissues. They will then help you decide if you will need surgical intervention or if you can begin conservative treatment.";
    } else if (/💪/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to differential assessment 1, paying special attention to the two nerve tension tests.";
    } else if (/🤙/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now complete differential assessment 3 (grade III-IV pulley injury vs. FDP injury) as well as differential assessment 4 (lumbrical injury vs. FDP injury).";
    } else if (/1/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to differential assessment 1: grade I-II pulley injury vs. flexor tenosynovitis vs. cyst vs. nerve issue vs. FDS insertional tendinopathy vs. injury-induced pulley thickening.";
    } else if (/2/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to differential assessment 2: joint synovitis vs. collateral ligament injury vs. lateral band syndrome.";
    } else if (/3/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to differential assessment 3: grade III-IV pulley injury vs. FDP injury.";
    } else if (/4/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to differential assessment 4: lumbrical injury vs. FDP injury.";
    } else if (/🎉/.test(resultsSummary)) {
      additionalDetails = "Great job! You have completed the primary assessment. (You do not need to complete a differential assessment, but may need to complete a severity assessment if indicated above.)";
    } else if (/🤟/.test(resultsSummary)) {
      additionalDetails = "Great job! You have completed the primary assessment. (You do not need to complete a differential assessment, but you should complete the pulley injury severity assessment to the assess the grade of the injury.)";
    } else if (/🥳/.test(resultsSummary)) {
      additionalDetails = "Great job! You have completed the primary assessment. (You do not need to complete a differential assessment or severity assessment.)";
    } else if (/🤔/.test(resultsSummary)) {
      additionalDetails = "Your answers indicate too many possibilities for a valid assessment. This can be due to multiple confounding factors, such as the possibility of two or more concurrent injuries. If you believe you performed all the tests properly and chose accurate answers, this may be the case for you. If so, you can email screenshots of your results (including answer log and scores) to info@hoopersbeta.com. Enter the code 'hb-debug' in the Debug Code text box below to see your scores. We will be happy to assist you if we can, but there is a chance you may simply require a consultation with a qualified medical professional. If you’d like to schedule an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS, go to this link: https://www.hoopersbeta.com/private-sessions";
    } else if (/🙃/.test(resultsSummary)) {
      additionalDetails = "This is strange. Something has gone wrong in your questionnaire or you've encountered a bug. Please refresh the page and try again. If you continue to receive this result, enter the code 'hb-debug' into the text box at the bottom of the page and then email us a screenshot of your full results report (including results summary, answer log, and scores) to pt@hoopersbeta.com so we can assist you. We apologize for the inconvenience.";
    }

    // Add nerve issue warning if applicable
    if (nerveIssuePossibility === "⚠️ Medium") {
      additionalDetails += " ➡️ Please note: Your answers are associated with some possibility of a nerve issue, which could be affecting your symptoms and therefore this assessment. Nerve issues can mask or mimic symptoms from other injuries, which can make them tricky to deal with. Be aware that a nerve issue is a possible confounding factor that may need professional evaluation.";
    } else if (nerveIssuePossibility === "⚠️ Test Needed") {
      additionalDetails += " ➡️ Please note: Your answers are associated with some possibility of a nerve issue, which could be affecting your symptoms and therefore this assessment. Differential assessment 1 contains multiple tests for nerve issues, so you should complete that assessment to obtain more accurate results.";
    } else if (nerveIssuePossibility === "⚠️ Test Needed") {
      additionalDetails += " ➡️ Please note: Your answers are associated with some possibility of a nerve issue, which could be affecting your symptoms and therefore this assessment. Nerve issues can mask or mimic symptoms from other injuries, which can make them tricky to deal with. Be aware that a nerve issue is a possible confounding factor that may need professional evaluation.";

    }

    // Add cyst warning if applicable
    if (cystIndication === "⚠️ Yes") {
      additionalDetails += " ➡️ Please note: Your answers are associated with the possibility of a cyst in your finger. Cysts can cause various symptoms that mimic other injuries, which makes accurate assessment more challenging. Be aware that a cyst is a possible confounding factor that may need professional evaluation with ultrasound.";
    } else if (cystIndication === "Mild") {
      additionalDetails += " ➡️ Please note: Your answer of 'yes' to 'do you feel an abnormal mass/lump/thickening in your finger?' is associated with the possibility of a cyst. Cysts can cause various symptoms that mimic other injuries, which makes accurate assessment more challenging. Be aware that a cyst is a possible confounding factor that may need professional evaluation with ultrasound.";
    }

    // Get injury description
    const getInjuryDescription = (displayedResult) => {
      const description = INJURY_DESCRIPTIONS[displayedResult.toLowerCase()]?.description;
      return description || "";
    };

    // Wait for loading animation
    setTimeout(() => {
      Promise.all([
        setResults(scores),
        setShowResults(true),
        setDisplayedResult(displayedResult),
        setResultsSummary(resultsSummary),
        setNerveIssuePossibility(nerveIssuePossibility),
        setCystIndication(cystIndication),
        setAdditionalDetails(additionalDetails),
        setInjuryDescription(getInjuryDescription(displayedResult)),
      ]).then(() => {
        setIsCalculating(false);
        onComplete({
          results: scores,
          responses: finalResponses,
          displayedResult,
          resultsSummary,
          nerveIssuePossibility,
          cystIndication,
          additionalDetails,
          injuryDescription
        });
        console.log("All states updated");
      });
    }, 3000); // Match this with the time it takes for progress to reach 100%
  };

  // Check for early completion
  const checkForEarlyCompletion = (currentId) => {
    const currentQuestionIndex = getQuestionIndex(currentId);

    // Check for bowstringing
    const visualBowstringingIndex = questionnaire.questions.findIndex(q => q.id === 'visualBowstringing');
    if (currentQuestionIndex === visualBowstringingIndex) {
      const visualBowstringingResponse = responses['visualBowstringing']?.id;
      console.log("Checking bowstringing response:", visualBowstringingResponse);

      if (visualBowstringingResponse === 'visualBowstringingAnswer1') {
        console.log("Setting early completion to true");
        setEarlyCompletion(true);
        return true;
      }
    }

    // Check for severe pulley injury indication
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
            title="Primary Assessment Results"
            displayedResult={displayedResult}
            resultsSummary={resultsSummary}
            nerveIssuePossibility={nerveIssuePossibility}
            cystIndication={cystIndication}
            additionalDetails={additionalDetails}
            injuryDescription={injuryDescription}
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

export default PrimaryQuestionnaire;

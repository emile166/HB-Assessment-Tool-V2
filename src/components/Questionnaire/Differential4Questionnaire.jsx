import React, { useState, useEffect, useRef } from 'react';
import { injuryMapping } from '../../constants/injuryMapping';
import { Card } from "../ui/card";
import AppHeader from '../AppHeader/AppHeader';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { INJURY_DESCRIPTIONS } from '../../constants/injuryDescriptions';
import Layout from '../Layout/Layout';
import { PRIMARY_DATA } from '../../questionnaireData/primaryData';
import { DIFFERENTIAL_1_DATA } from '../../questionnaireData/differential1Data';
import { evaluateCondition } from '@/lib/conditionEvaluator';
import { ResultsCard } from '@/components/ui/ResultsCard';
import { QuestionnaireLayout } from '@/components/ui/QuestionnaireLayout';
import { QuestionCard } from '@/components/ui/QuestionCard';

function Differential4Questionnaire({ questionnaire, onBack, primaryResults }) {
  const getQuestionIndex = (questionId) => {
    return questionnaire.questions.findIndex(q => q.id === questionId);
  };
  const firstQuestionId = questionnaire.questions[0]?.id;
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
    console.log("Primary Results:", primaryResults);
    console.log("Primary Results Scores:", primaryResults?.results);
    const totalScores = {};

    // Initialize all injury scores to 0
    Object.keys(injuryMapping[questionnaire.name]).forEach(injuryCode => {
      // Start with primary results scores if they exist
      totalScores[injuryCode] = (primaryResults?.results?.[injuryCode] || 0);
    });

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

  // Helper function to check for forearm and hand pain
  const checkForearmAndHandPain = (responses) => {
    // Track pain locations for each question
    const fourFingerPain = {
      palm: responses.fourFingerStretch?.some(a => a.id === "fourFingerStretchAnswer1") || false,
      forearm: responses.fourFingerStretch?.some(a => a.id === "fourFingerStretchAnswer2") || false
    };

    const singleFingerPain = {
      palm: responses.singleFingerStretch?.some(a => a.id === "singleFingerStretchAnswer1") || false,
      forearm: responses.singleFingerStretch?.some(a => a.id === "singleFingerStretchAnswer2") || false
    };

    const isolatedTissuePain = {
      both: responses.isolatedTissueLoading?.id === "isolatedTissueLoadingAnswer3" || false
    };

    // Count questions where both palm and forearm pain are indicated
    let questionsWithBothPains = 0;

    // Check fourFingerStretch
    if (fourFingerPain.palm && fourFingerPain.forearm) {
      questionsWithBothPains++;
    }

    // Check singleFingerStretch
    if (singleFingerPain.palm && singleFingerPain.forearm) {
      questionsWithBothPains++;
    }

    // Check isolatedTissueLoading
    if (isolatedTissuePain.both) {
      questionsWithBothPains++;
    }

    // Return true if questionsWithBothPains is greater than or equal to 2
    return questionsWithBothPains >= 2;
  };

  const handleSubmit = (finalResponses = responses) => {
    setIsCalculating(true);
    console.log("handleSubmit called");
    console.log("InjuryMapping:", injuryMapping);

    // Calculate scores
    const scores = calculateScoresForAnswers(finalResponses);

    // Sort and filter results
    const sortedResults = Object.entries(scores)
      .sort((a, b) => b[1] - a[1]);
    console.log("Sorted results:", sortedResults);

    const [B3, D3] = sortedResults[0] || [null, 0];
    const [, D4] = sortedResults[1] || [null, 0];
    const [, D5] = sortedResults[2] || [null, 0];

    console.log("Key values:", {
      B3, D3, D4, D5,
      "First injury code": sortedResults[0]?.[0],
      "First injury score": sortedResults[0]?.[1],
      "Second injury code": sortedResults[1]?.[0],
      "Second injury score": sortedResults[1]?.[1]
    });

    const injuryNames = injuryMapping[questionnaire.name];
    const firstInjuryName = injuryNames[B3] || B3;
    const secondInjuryName = sortedResults[1] ? injuryNames[sortedResults[1][0]] : '';

    // Calculate nerve issue possibility
    const nerveScore = scores['H'] || 0;
    const yesNerveTensionPart1 = responses[DIFFERENTIAL_1_DATA.nerveTensionPart1.id]?.id === "nerveTensionPart1Answer1";
    const noNerveTensionPart1 = responses[DIFFERENTIAL_1_DATA.nerveTensionPart1.id]?.id === "nerveTensionPart1Answer2";
    const yesNerveTensionPart2 = responses[DIFFERENTIAL_1_DATA.nerveTensionPart2.id]?.id === "nerveTensionPart2Answer1";
    const noNerveTensionPart2 = responses[DIFFERENTIAL_1_DATA.nerveTensionPart2.id]?.id === "nerveTensionPart2Answer2";

    // Calculate results based on the provided logic
    let resultsSummary;
    if (checkForearmAndHandPain(finalResponses)) {
      resultsSummary = "🎊 Success! Go back to the dashboard and complete the applicable severity assessments.";
    } else if (D3 >= D4 + 2 && /[GDFNEABKJ]/.test(B3)) {
      resultsSummary = "🎉 Success! Go back to the dashboard and complete the applicable severity assessment.";
    } else if (D3 >= D4 + 2) {
      resultsSummary = "🥳 Success! You've completed the assessment.";
    } else if (nerveScore === D3 && D4 > D5 &&
      ((noNerveTensionPart1 && yesNerveTensionPart2) || yesNerveTensionPart1 || (noNerveTensionPart1 && noNerveTensionPart2))) {
      resultsSummary = /[GDFNEABKJ]/.test(B3) || /[GDFNEABKJ]/.test(sortedResults[1]?.[0]) ?
        "💪 Success! Go back to the dashboard and complete the applicable severity assessments (and be aware of the potential nerve issue)." :
        "⚡ Success! You've completed the assessment";
    } else if (D3 >= D5 + 1 && D4 > D5 && /[AB]/.test(B3) && /[AB]/.test(sortedResults[1]?.[0])) {
      resultsSummary = "🎉 Success! Go back to the dashboard and complete the applicable severity assessment.";
    } else if ((D3 >= D4 && D4 >= D5 + 2 && /[DE]/.test(B3) && /[DE]/.test(sortedResults[1]?.[0])) ||
      (D3 >= D4 && D4 === D5 + 1 && /[DE]/.test(B3) && /[DE]/.test(sortedResults[1]?.[0]))) {
      resultsSummary = "🎊 Success! Go back to the dashboard and complete the applicable severity assessments.";
    } else if (D3 <= D4 + 1) {
      resultsSummary = "🤔 Something's wrong here...";
    } else {
      resultsSummary = "🙃 Sorry, there seems to be an error.";
    }

    // Calculate displayed result
    let displayedResult;
    if (/💪|⚡/.test(resultsSummary)) {
      displayedResult = `${firstInjuryName} and ${secondInjuryName}`;
    } else if (/🎉|🥳/.test(resultsSummary)) {
      displayedResult = firstInjuryName;
    } else if (/🎊/.test(resultsSummary)) {
      displayedResult = `${firstInjuryName} and ${secondInjuryName}`;
    } else if (/🤔/.test(resultsSummary)) {
      displayedResult = "Data Unclear";
    }

    // Calculate nerve issue possibility
    let nerveIssuePossibility;
    if (nerveScore === D3 - 2) {
      if (noNerveTensionPart1 && yesNerveTensionPart2) nerveIssuePossibility = "None";
      else if (yesNerveTensionPart1) nerveIssuePossibility = "⚠️ Medium";
      else if (noNerveTensionPart1 && noNerveTensionPart2) nerveIssuePossibility = "None";
      else nerveIssuePossibility = "None";
    } else if (nerveScore < D3 && nerveScore > D3 - 2) {
      if (noNerveTensionPart1 && yesNerveTensionPart2) nerveIssuePossibility = "⚠️ Medium";
      else if (yesNerveTensionPart1) nerveIssuePossibility = "⚠️ High";
      else if (noNerveTensionPart1 && noNerveTensionPart2) nerveIssuePossibility = "⚠️ Medium";
      else nerveIssuePossibility = "None";
    } else if (nerveScore === D3 && D4 > D5) {
      if (noNerveTensionPart1 && yesNerveTensionPart2) nerveIssuePossibility = "⚠️ Medium";
      else if (yesNerveTensionPart1) nerveIssuePossibility = "⚠️ High";
      else if (noNerveTensionPart1 && noNerveTensionPart2) nerveIssuePossibility = "⚠️ Data Unclear";
      else nerveIssuePossibility = "None";
    } else if (yesNerveTensionPart1) {
      nerveIssuePossibility = "⚠️ Medium";
    } else {
      nerveIssuePossibility = "None";
    }

    // Calculate cyst indication
    let cystIndication;
    if (/cyst/.test(displayedResult.toLowerCase())) {
      cystIndication = "⚠️ Yes";
    } else {
      const cystScore = scores['I'] || 0;
      const primaryCystScore = primaryResults?.results?.['I'] || 0;
      const combinedCystScore = cystScore + primaryCystScore;
      const injuryTypeTraumatic = responses[PRIMARY_DATA.injuryType.id]?.id === "injuryTypeAnswer1";
      const yesAbnormalMass = responses[PRIMARY_DATA.abnormalMass.id]?.id === "abnormalMassAnswer1";
      const yesPriorInjury = responses[DIFFERENTIAL_1_DATA.priorInjury.id]?.id === "priorInjuryAnswer1";

      if (combinedCystScore >= D3 - 1) {
        cystIndication = "⚠️ Yes";
      } else if (combinedCystScore < D3 - 1 && combinedCystScore >= D3 - 2 && injuryTypeTraumatic) {
        cystIndication = "None";
      } else if (combinedCystScore < D3 - 1 && combinedCystScore >= D3 - 2 && !yesAbnormalMass && !yesPriorInjury) {
        cystIndication = "None";
      } else if (combinedCystScore < D3 - 1 && combinedCystScore >= D3 - 2 && yesAbnormalMass) {
        cystIndication = "⚠️ Yes";
      } else if (combinedCystScore <= D3 - 3 && !yesAbnormalMass) {
        cystIndication = "None";
      } else if (combinedCystScore < D3 - 5) {
        cystIndication = "None";
      } else {
        cystIndication = "None";
      }
    }

    // Calculate additional details
    let additionalDetails = '';
    if (displayedResult.toLowerCase() === "nerve issue") {
      additionalDetails = "Great job completing the assessment thus far! Your answers are strongly associated with a nerve issue. " +
        "If the affected finger is the second digit (index finger) or third digit (middle), the culprit is most often the median nerve. " +
        "If the affected finger is the fifth digit (pinky finger), the culprit is most often the ulnar nerve. " +
        "If the affected finger is the fourth digit (ring finger), please go back to the dashboard and complete the nerve questionnaire under the severity assessment category. This will help determine which nerve is most often associated with your symptoms.";
    } else if (/🎉/.test(resultsSummary)) {
      additionalDetails = "Great job completing the differential assessment! Based on your results, you should now move on to severity assessment.";
    } else if (/💪/.test(resultsSummary)) {
      additionalDetails = "Great job completing the differential assessment! Your answers are associated with a multi-faceted condition involving a possible nerve issue. Your next step will be to complete the severity assessment for your *non-nerve-related* issue. However, please continue reading to find out more about your the nerve issue may affect things.";
    } else if (/⚡/.test(resultsSummary)) {
      additionalDetails = "Great job completing the differential assessment! Your answers are associated with a multi-faceted condition involving a possible nerve issue. You do not need to complete a severity assessment at this time. However, please continue reading to find out more about how the nerve issue may affect things.";
    } else if (/🥳/.test(resultsSummary)) {
      additionalDetails = "Great job! You have completed the assessment. (You do not need to complete a severity assessment.) Heck yes!";
    } else if (/🎊/.test(resultsSummary)) {
      additionalDetails = "Great job completing the differential assessment! Your answers are associated with both an FDP injury and a lumbrical injury. These two injuries frequently occur together. For this reason, you should complete the appropriate severity assessments for *both* injuries. If your severity assessment results indicate different grades for each injury (e.g. FDP is grade I and lumbrical is grade II), it is generally advised to choose a recovery program based on the *higher* grade (unless otherwise instructed by a qualified professional).";
    } else if (/🤔/.test(resultsSummary)) {
      additionalDetails = "Your answers indicate too many possibilities for a valid assessment. This can be due to multiple confounding factors, such as the possibility of two or more concurrent injuries. If you believe you performed all the tests properly and chose accurate answers, this may be the case for you. If so, you can email screenshots of your results (including answer log and scores) to info@hoopersbeta.com. Enter the code 'hb-debug' in the Debug Code text box below to see your scores. We will be happy to assist you if we can, but there is a chance you may simply require a consultation with a qualified medical professional. If you’d like to schedule an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS, go to this link: https://www.hoopersbeta.com/private-sessions";
    } else if (/🙃/.test(resultsSummary)) {
      additionalDetails = "This is strange. Something has gone wrong with your answers or you've encountered a bug. Please close this page and try again. If you continue to receive this result, please email screenshots of your results (including answer log and scores) to info@hoopersbeta.com and we will be happy to assist you. Enter the code 'hb-debug' in the Debug Code text box below to see your scores. We apologize for the inconvenience.";
    }

    // Add nerve issue warning if applicable
    if (nerveIssuePossibility === "⚠️ High" && !/🤔/.test(resultsSummary)) {
      additionalDetails += " Nerve Warning: During testing, you indicated a positive nerve tension test. Based on your results, it is possible your symptoms are associated with a nerve issue as well as a separate injury. The nerve issue could be affecting your symptoms and therefore this assessment. Nerve issues can mask or mimic symptoms from other injuries, which can make them tricky to deal with. Be aware that a nerve issue is a possible confounding factor that may need professional evaluation.";
    } else if (nerveIssuePossibility === "⚠️ High" && /🤔/.test(resultsSummary)) {
      additionalDetails += " Nerve Warning: Your answers are associated with a high possibility of a nerve issue, which could be affecting your symptoms and therefore this assessment. Nerve issues can mask or mimic symptoms from other injuries, which can make them tricky to deal with. Be aware that a nerve issue is a possible confounding factor that may need professional evaluation.";
    } else if (nerveIssuePossibility === "⚠️ Medium" && !/🤔/.test(resultsSummary)) {
      additionalDetails += " Nerve Warning: During testing, you indicated a positive nerve tension test. Based on your results, it is possible your symptoms are associated with a nerve issue as well as a separate injury. The nerve issue could be affecting your symptoms and therefore this assessment. Nerve issues can mask or mimic symptoms from other injuries, which can make them tricky to deal with. Be aware that a nerve issue is a possible confounding factor that may need professional evaluation.";
    } else if (nerveIssuePossibility === "⚠️ Medium" && /🤔/.test(resultsSummary)) {
      additionalDetails += " Nerve Warning: Your answers are associated with some possibility of a nerve issue, which could be affecting your symptoms and therefore this assessment. Nerve issues can mask or mimic symptoms from other injuries, which can make them tricky to deal with. Be aware that a nerve issue is a possible confounding factor that may need professional evaluation.";
    } else if (nerveIssuePossibility === "⚠️ Data Unclear") {
      additionalDetails += " Nerve Warning: Your answers are associated with a high possibility of a nerve issue, yet you did not receive a positive result on either of the nerve tests. We recommend retaking differential assessment 1 and paying special attention to ensure you perform the nerve tests correctly as they are easy to get wrong. If your results do not change and you have approval from a qualified medical professional, consider adding some nerve recovery exercises to your routine if treating your non-nerve issue does not improve your symptoms. You may also want to consider consulting with a medical professional if you continue to run into issues, as assessing and treating nerve issues can be complicated.";
    }

    // Add cyst warning if applicable
    if (cystIndication === "⚠️ Yes") {
      additionalDetails += " Cyst Warning: Your answers are associated with the possibility of a cyst in your finger. Cysts can cause various symptoms that mimic other injuries, which makes injury assessment more challenging. Be aware that a cyst is a possible confounding factor that may need professional evaluation with ultrasound.";
    } else if (cystIndication === "Mild") {
      additionalDetails += " Cyst Warning: Your answer of 'yes' to 'Do you feel an abnormal mass/lump/thickening in your finger?' is associated with the possibility of a cyst. Cysts can cause various symptoms that mimic other injuries, which makes injury assessment more challenging. Be aware that a cyst is a possible confounding factor that may need professional evaluation with ultrasound.";
    }

    // Get injury descriptions
    const getInjuryDescription = (result) => {
      if (!result) return "";
      const injuries = result.toLowerCase().split(" and ");
      return injuries.map(injury => INJURY_DESCRIPTIONS[injury]).filter(Boolean).join("\n\n");
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
        setInjuryDescription(getInjuryDescription(displayedResult))
      ]).then(() => {
        setIsCalculating(false);
        console.log("All states updated");
      });
    }, 3000); // Match this with the time it takes for progress to reach 100%
  };

  // Check for early completion
  const checkForEarlyCompletion = (currentId) => {
    // For now, always return false since we don't have early completion logic yet
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
            title="Differential Assessment 4 Results"
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

export default Differential4Questionnaire;
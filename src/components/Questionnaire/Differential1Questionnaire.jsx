import React, { useState, useEffect, useRef } from 'react';
import { injuryMapping } from '../../utils/injuryMapping';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { DISCLAIMER_TEXT } from '../../constants/disclaimer';
import VideoEmbed from '../VideoEmbed/VideoEmbed';
import ImageViewer from '../ImageViewer/ImageViewer';
import AppHeader from '../AppHeader/AppHeader';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { INJURY_DESCRIPTIONS } from '../../constants/injury-descriptions';
import Layout from '../Layout/Layout';
import { DIFFERENTIAL_1_DATA } from '../../questionnaireData/differential1Data';
import { PRIMARY_DATA } from '../../questionnaireData/primaryData';
import { DebugScores } from '@/components/Debug/DebugScores';

function Differential1Questionnaire({ questionnaire, onBack, primaryResults }) {
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
  const [debugMode, setDebugMode] = useState(false);
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

  const evaluateCondition = (condition, currentResponses, questionId) => {
    if (!condition) return true;

    if (condition.questionId) {
      const answer = currentResponses[condition.questionId];
      if (!answer) return false;

      const selectedAnswerIds = Array.isArray(answer)
        ? answer.map(a => a.id)
        : [answer.id];

      switch (condition.match) {
        case 'any':
          return condition.selectedAnswers.some(id => selectedAnswerIds.includes(id));
        case 'none':
          return !condition.selectedAnswers.some(id => selectedAnswerIds.includes(id));
        case 'only':
          return selectedAnswerIds.every(id => condition.selectedAnswers.includes(id));
        default:
          return false;
      }
    }

    // If condition is about the current question's answers
    if (condition.selectedAnswers) {
      const answer = currentResponses[questionId];
      if (!answer) return false;

      const selectedAnswerIds = Array.isArray(answer)
        ? answer.map(a => a.id)
        : [answer.id];

      switch (condition.match) {
        case 'any':
          return condition.selectedAnswers.some(id => selectedAnswerIds.includes(id));
        case 'none':
          return !condition.selectedAnswers.some(id => selectedAnswerIds.includes(id));
        case 'only':
          return selectedAnswerIds.every(id => condition.selectedAnswers.includes(id)) &&
            condition.selectedAnswers.some(id => selectedAnswerIds.includes(id));
        default:
          return false;
      }
    }

    return true;
  };

  const shouldSkipQuestion = (questionId, currentResponses = responses) => {
    const currentQuestion = questionnaire.questions.find(q => q.id === questionId);
    if (!currentQuestion.conditions) return false;

    console.log(`Checking skip conditions for question ${questionId}:`, {
      conditions: currentQuestion.conditions,
      responses: currentResponses
    });

    return currentQuestion.conditions.some(condition => {
      if (condition.action !== 'skip') return false;
      const shouldSkip = evaluateCondition(condition.if, currentResponses, questionId);

      console.log(`Condition evaluation result:`, {
        condition,
        shouldSkip
      });

      return shouldSkip;
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
    if (D3 >= D4 + 2 && /[GDFNEABKJ]/.test(B3)) {
      resultsSummary = "🎉 Success! Move on to severity assessment.";
    } else if (D3 >= D4 + 2) {
      resultsSummary = "🥳 Success! You've completed the assessment.";
    } else if (nerveScore === D3 && D4 > D5 &&
      ((noNerveTensionPart1 && yesNerveTensionPart2) || yesNerveTensionPart1 || (noNerveTensionPart1 && noNerveTensionPart2))) {
      resultsSummary = /[GDFNEABKJ]/.test(B3) || /[GDFNEABKJ]/.test(sortedResults[1]?.[0]) ?
        "💪 Success! Move on to severity assessment and be aware of the potential nerve issue." :
        "⚡ Success! You've completed the assessment";
    } else if (D3 > D4 && B3 === 'I' && primaryResults?.responses[7]?.text === 'Yes' && responses[4]?.text === 'Yes') {
      resultsSummary = "🥳 Success! You've completed the assessment.";
    } else if (D3 >= D5 + 1 && D4 > D5 && /[AB]/.test(B3) && /[AB]/.test(sortedResults[1]?.[0])) {
      resultsSummary = "🎉 Success! Move on to severity assessment.";
    } else if ((D3 >= D4 && D4 >= D5 + 2 && /[DE]/.test(B3) && /[DE]/.test(sortedResults[1]?.[0])) ||
      (D3 >= D4 && D4 === D5 + 1 && /[DE]/.test(B3) && /[DE]/.test(sortedResults[1]?.[0]))) {
      resultsSummary = "🎊 Success! Move on to severity assessment.";
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
    } else if (noNerveTensionPart1) {
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
      } else if (combinedCystScore <= D3 - 3 && !injuryTypeTraumatic && yesAbnormalMass) {
        cystIndication = "Mild";
      } else if (combinedCystScore >= D3 - 5 && yesAbnormalMass) {
        cystIndication = "⚠️ Yes";
      } else if (combinedCystScore < D3 - 5) {
        cystIndication = "None";
      } else {
        cystIndication = "None";
      }
    }

    // Calculate additional details
    let additionalDetails = '';
    if (displayedResult.toLowerCase() === "nerve issue") {
      additionalDetails = "Great job completing the assessment thus far! Your answers are strongly associated with a nerve issue.\n\n" +
        "If the affected finger is the second digit (index finger) or third digit (middle), the culprit is most often the median nerve.\n\n" +
        "If the affected finger is the fifth digit (pinky finger), the culprit is most often the ulnar nerve.\n\n" +
        "If the affected finger is the fourth digit (ring finger), please go back to the dashboard and complete the nerve questionnaire under the severity assessment category. This will help determine which nerve is most often associated with your symptoms.";
    } else if (/🎉/.test(resultsSummary)) {
      additionalDetails = "Great job completing the differential assessment! Based on your results, you should now move on to severity assessment.";
    } else if (/💪/.test(resultsSummary)) {
      additionalDetails = "Great job completing the differential assessment! Your answers are associated with a multi-faceted condition involving a possible nerve issue. Your next step will be to complete the severity assessment for your *non-nerve-related* issue. However, please continue reading below to find out more about your the nerve issue may affect things.";
    } else if (/⚡/.test(resultsSummary)) {
      additionalDetails = "Great job completing the differential assessment! Your answers are associated with a multi-faceted condition involving a possible nerve issue. You do not need to complete a severity assessment at this time. However, please continue reading below to find out more about how the nerve issue may affect things.";
    } else if (/🥳/.test(resultsSummary)) {
      additionalDetails = "Great job! You have completed the assessment. (You do not need to complete a severity assessment.) Heck yes!";
    } else if (/🎊/.test(resultsSummary)) {
      additionalDetails = "Great job completing the differential assessment! Your answers are associated with both an FDP injury and a lumbrical injury. These two injuries frequently occur together. For this reason, you should complete the appropriate severity assessments for both injuries. If your severity assessment results indicate different grades for each injury (e.g. FDP is grade I and lumbrical is grade II), choose your recovery program based on the higher grade.";
    } else if (/🤔/.test(resultsSummary)) {
      additionalDetails = "Your answers indicate too many possibilities for a valid assessment. This can be due to multiple confounding factors, such as the possibility of two or more concurrent injuries. If you believe you performed all the tests properly and chose accurate answers, this may be the case for you. If so, you can email screenshots of your results (including answer log and scores) to info@hoopersbeta.com and we will be happy to assist you. Enter the code 'hb-debug' in the Debug Code text box below to see your scores.";
    } else if (/🙃/.test(resultsSummary)) {
      additionalDetails = "This is strange. Something has gone wrong with your answers or you've encountered a bug. Please close this page and try again. If you continue to receive this result, please email screenshots of your results (including answer log and scores) to info@hoopersbeta.com and we will be happy to assist you. Enter the code 'hb-debug' in the Debug Code text box below to see your scores. We apologize for the inconvenience.";
    }

    // Add nerve issue warning if applicable
    if (nerveIssuePossibility === "⚠️ High" && !/🤔/.test(resultsSummary)) {
      additionalDetails += " ➡️ Please note: Your answers are associated with a high possibility of a nerve issue. Nerve issues can mask or mimic symptoms from other injuries, which can make them tricky to assess (and which can make assessing other injuries more challenging as well). We recommend the following course of action if you have approval from a qualified medical professional: " +
        "1. Start recovery activities for the nerve issue. " +
        "2. In one to two days, retake this entire assessment (or, if you're pressed for time, just retake differential assessment 1). " +
        "3. If your final results change, simply follow the new recommendations. " +
        "4. If your final results do not change, continue recovery activities for the nerve issue and, if applicable, begin recovery activities for your other condition as well. " +
        "5. If your symptoms do not change after a week or two or you would like a more definitive assessment that can account for the potential nerve issue, you'll need to schedule an appointment with a qualified medical professional that has experience with nerve issues and, ideally, rock climbers.";
    } else if (nerveIssuePossibility === "⚠️ High" && /🤔/.test(resultsSummary)) {
      additionalDetails += " ➡️ Please note: Your answers are associated with a high possibility of a nerve issue, which could be affecting your symptoms and therefore this assessment. Nerve issues can mask or mimic symptoms from other injuries, which can make them tricky to deal with. Be aware that a nerve issue is a possible confounding factor that may need professional evaluation.";
    } else if (nerveIssuePossibility === "⚠️ Medium" && !/🤔/.test(resultsSummary)) {
      additionalDetails += " ➡️ Please note: During testing, you indicated a positive nerve tension test. Based on your results, it is possible your symptoms are associated with a nerve issue as well as a separate injury. We recommend the following course of action if you have approval from a qualified medical professional: " +
        "1. Start recovery activities for your non-nerve-related issue. (*Be sure to complete the severity assessment for this issue if applicable.*) " +
        "2. In one to two days, retake differential assessment 1 (paying special attention to the nerve tension tests) to see if anything has changed since the first test. (You can repeat the nerve tests every couple days to see if you can detect any change or correlation to your symptoms.) " +
        "3. If your results change, continue with your primary issue recovery activieis and assess your progress after about a week. If your symptoms are improving, simply continue. If they are not improving, begin nerve issue recovery exercises as well. " +
        "4. If your symptoms do not change after a week or two, schedule an appointment with a qualified medical professional who has experience with nerve issues and, ideally, rock climbers. They will be better able to determine if you do indeed have two concurrent issues or just one that is mimicking the other. ";
    } else if (nerveIssuePossibility === "⚠️ Medium" && /🤔/.test(resultsSummary)) {
      additionalDetails += " ➡️ Please note: Your answers are associated with some possibility of a nerve issue, which could be affecting your symptoms and therefore this assessment. Nerve issues can mask or mimic symptoms from other injuries, which can make them tricky to deal with. Be aware that a nerve issue is a possible confounding factor that may need professional evaluation.";
    } else if (nerveIssuePossibility === "⚠️ Data Unclear") {
      additionalDetails += " ➡️ Please note: Your answers are associated with a high possibility of a nerve issue, yet you did not receive a positive result on either of the nerve tests. We recommend retaking differential assessment 1 and paying special attention to ensure you perform the nerve tests correctly as they are easy to get wrong. If your results do not change and you have approval from a qualified medical professional, consider adding some nerve recovery exercises to your routine if treating your non-nerve issue does not improve your symptoms. You may also want to consider consulting with a medical professional if you continue to run into issues, as assessing and treating nerve issues can be complicated.";
    }

    // Add cyst warning if applicable
    if (cystIndication === "⚠️ Yes") {
      additionalDetails += " ➡️ Please note: Your answers are associated with the possibility of a cyst in your finger. Cysts can cause various symptoms that mimic other injuries, which makes injury assessment more challenging. Be aware that a cyst is a possible confounding factor that may need professional evaluation with ultrasound.";
    } else if (cystIndication === "Mild") {
      additionalDetails += " ➡️ Please note: Your answer of 'yes' to 'Do you feel an abnormal mass/lump/thickening in your finger?' is associated with the possibility of a cyst. Cysts can cause various symptoms that mimic other injuries, which makes injury assessment more challenging. Be aware that a cyst is a possible confounding factor that may need professional evaluation with ultrasound.";
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
    return <LoadingScreen />;
  }

  if (showResults) {
    return (
      <Layout>
        <Card ref={questionnaireContainerRef}>
          <AppHeader />
          <CardContent className="bg-gray-50 rounded-lg m-8">
            <CardTitle className="text-xl mb-2 pt-6 text-center">Differential Assessment 1 Results</CardTitle>
            <p className="text-xs text-red-500 text-center uppercase mb-8">{DISCLAIMER_TEXT}</p>

            {/* Main Results Section */}
            <div className="space-y-6">
              {/* Primary Result */}
              <div className="bg-white border rounded-lg p-6">
                <h2 className="text-md mb-2 text-center">Your responses suggest:</h2>
                <p className="text-lg font-semibold bg-primary text-black mb-8 text-center rounded-sm p-2">{displayedResult}</p>
                <p className="text-lg mb-2 text-center">{resultsSummary} See additional details below.</p>
              </div>

              {/* Risk Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="border rounded-lg pr-8 pl-8 pt-4 pb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-1">Nerve Issue Possibility</h3>
                  <p className="text-md font-medium">{nerveIssuePossibility}</p>
                </div>
                <div className="border rounded-lg pr-8 pl-8 pt-4 pb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-1">Cyst Indication</h3>
                  <p className="text-md font-medium">{cystIndication}</p>
                </div>
              </div>

              {/* Injury Details Card */}
              {(additionalDetails || injuryDescription) && (
                <div className="rounded-lg pr-8 pl-8 mb-4 mt-2">
                  {additionalDetails && (
                    <div className="mb-4">
                      <h2 className="text-md font-semibold mb-2">Additional Details</h2>
                      <p className="text-md">{additionalDetails}</p>
                    </div>
                  )}

                  {injuryDescription && (
                    <div>
                      <p className="text-md">{injuryDescription}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Answer Log */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Answer Log</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    {questionnaire.questions.map((question) => {
                      const response = responses[question.id];
                      if (!response || skippedQuestions.has(question.id)) return null;

                      return (
                        <div key={question.id} className="border-b pb-2">
                          <div className="font-medium">Q{getQuestionIndex(question.id) + 1}: {question.question}</div>
                          <div className="pl-4">
                            {Array.isArray(response) ? (
                              response.map((ans, i) => (
                                <div key={i}>• {ans.text}</div>
                              ))
                            ) : (
                              <div>• {response.text}</div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <DebugScores 
                scores={calculateScoresForAnswers(responses)} 
                questionnaireName={questionnaire.name}
              />

            </div>
          </CardContent>
          <div>
            <p className="text-xs text-gray-500 text-center mb-4">We do not store any information related to this tool. If you leave this page, your answers will be lost. <a href="https://hoopersbeta.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">View our privacy policy.</a></p>
          </div>
          <div className="mt-6 text-center">
            <Button
              onClick={() => onBack()}
              variant="outline"
              className="w-full md:w-auto"
            >
              Back to Dashboard
            </Button>
          </div>
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
    <Layout>
      <Card ref={questionnaireContainerRef}>
        <AppHeader />
        <CardContent className="mt-4 p-8">
          <CardTitle className="text-2xl mb-4">{questionnaire.name}</CardTitle>
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Question {getQuestionIndex(currentQuestionId) + 1}/{questionnaire.questions.length}</span>
                <span>(some questions may be skipped automatically)</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>

            <div>
              <div className="space-y-2">
                {currentQuestion?.video && (
                  <VideoEmbed videoId={currentQuestion.video} />
                )}
              </div>
              <div className="mt-5">
                <h3 className="ont-medium text-lg">{currentQuestion.question}</h3>
                <p className="text-sm text-gray-500">
                  {currentQuestion.type} - read all before submitting
                </p>
              </div>

              {currentQuestion.type === 'select one answer' && (
                <RadioGroup
                  onValueChange={(value) => {
                    const selectedAnswer = currentQuestion.answers.find(ans => ans.id === value);
                    handleAnswer(currentQuestionId, selectedAnswer);
                  }}
                  value={responses[currentQuestionId]?.id}
                  className="space-y-2 mt-5"
                >
                  {currentQuestion.answers.map((ans) => (
                    <div key={ans.id} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={ans.id}
                        id={ans.id}
                      />
                      <label htmlFor={ans.id} className="text-sm">
                        {ans.text}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {currentQuestion.type === 'select all that apply' && (
                <div className="grid gap-4 mt-5">
                  {currentQuestion.answers.map((ans) => (
                    <div key={ans.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={ans.id}
                        checked={(responses[currentQuestionId] || []).some(a => a.id === ans.id)}
                        onCheckedChange={(checked) => {
                          const prev = responses[currentQuestionId] || [];
                          if (checked) {
                            handleAnswer(currentQuestionId, [...prev, ans]);
                          } else {
                            handleAnswer(
                              currentQuestionId,
                              prev.filter(a => a.id !== ans.id)
                            );
                          }
                        }}
                      />
                      <label
                        htmlFor={ans.id}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {ans.text}
                      </label>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8">
                {currentQuestion?.photos?.length > 0 && (
                  <ImageViewer imageUrls={currentQuestion.photos} />
                )}
              </div>

              <div className="flex justify-between gap-4 mt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentQuestionId(getPreviousQuestionId(currentQuestionId))}
                  disabled={getQuestionIndex(currentQuestionId) < 1}
                >
                  ← Previous
                </Button>
                <Button
                  onClick={() => {
                    const nextId = getNextQuestionId(currentQuestionId);
                    if (nextId === null) {
                      // If there are no more questions, submit the questionnaire
                      handleSubmit();
                    } else {
                      setCurrentQuestionId(nextId);
                    }
                  }}
                  disabled={!responses[currentQuestionId]}
                >
                  Next →
                </Button>
              </div>

              <DebugScores 
                scores={calculateScoresForAnswers(responses)} 
                questionnaireName={questionnaire.name}
              />
            </div>
          </div>

          {/* Back to Dashboard button at bottom */}
          <div className="mt-6 text-center">
            <Button
              onClick={() => onBack()}
              variant="outline"
              className="w-full md:w-auto"
            >
              Back to Dashboard
            </Button>
          </div>

        </CardContent >
      </Card >
    </Layout>
  );
}

export default Differential1Questionnaire;
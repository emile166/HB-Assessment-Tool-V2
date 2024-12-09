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
import { PRIMARY_DATA } from '../../questionnaireData/primaryData';

function PrimaryQuestionnaire({ questionnaire, onBack, onComplete }) {
  const getQuestionIndex = (questionId) => {
    return questionnaire.questions.findIndex(q => q.id === questionId);
  };
  const firstQuestionId = questionnaire.questions[0].id;
  const [currentQuestionId, setCurrentQuestionId] = useState(firstQuestionId);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
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

    // Get highest scoring categories
    const highestScores = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .filter(([, score]) => score > 0);

    // Sort and filter results
    const sortedResults = Object.entries(scores)
      .sort((a, b) => b[1] - a[1]);
    console.log("Sorted results:", sortedResults);

    if (sortedResults.length === 0) {
      setResultMessage("🤷‍♂️\nThere's nothing to show.");
      setShowResults(true);
      return;
    }

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

    const CystScore = scores['I'] || 0;
    const NerveIssueScore = scores['H'] || 0;

    let resultsSummary;
    if (D3 >= D4 + 3 && /[GDFNEABKJ]/.test(B3)) {
      resultsSummary = `🎉 Success! Move on to severity assessment.`;
    } else if (D3 >= D4 + 3) {
      resultsSummary = `🥳 Success! You've completed the assessment.`;
    } else if (CystScore >= D3 - 2 && CystScore < D3 && /[ACIHLJ]/.test(B3)) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 1.`;
    } else if (D3 > D4 && /[ACIHLJ]/.test(B3) && // If D3 is greater than D4 and B3 is one of ACIHLJ
      (D4 > D16 ?
        /[ACIHL]/.test(acceptableScoresString) // Contains at least one of ACIHL
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 1.`;
    } else if (D3 > D4 && /[FGN]/.test(B3) && // If D3 is greater than D4 and B3 is one of FGN
      (D4 > D16 ?
        /[FGN]/.test(acceptableScoresString) // Contains at least one of FGN
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 2.`;
    } else if (D3 > D4 && /[BDE]/.test(B3) && // If D3 is greater than D4 and B3 is one of BDE
      (D4 > D16 ?
        /[BDE]{2}/.test(acceptableScoresString) // Contains at least two of BDE
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 3 & 4.`;
    } else if (D3 > D4 && /[BD]/.test(B3) && // If D3 is greater than D4 and B3 is one of BD
      (D4 > D16 ?
        /[BD]/.test(acceptableScoresString) // Contains at least one of BD
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 3.`;
    } else if (D3 > D4 && /[DE]/.test(B3) && // If D3 is greater than D4 and B3 is one of DE
      (D4 > D16 ?
        /[DE]/.test(acceptableScoresString) // Contains at least one of DE
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 4.`;
    } else if (D3 === D4 && /[ACIHLJ]/.test(B3) && // If D3 equals D4 and B3 is one of ACIHLJ
      (D4 > D16 ?
        /[ACIHLJ]/.test(acceptableScoresString) && // Contains at least one of ACIHLJ
        !/[^ACIHLJ]/.test(acceptableScoresString)  // ONLY contains ACIHLJ
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 1.`;
    } else if (D3 === D4 && /[FGN]/.test(B3) && // If D3 equals D4 and B3 is one of FGN
      (D4 > D16 ?
        /[FGN]/.test(acceptableScoresString) && // Contains at least one of FGN
        !/[^FGN]/.test(acceptableScoresString)  // ONLY contains FGN
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 2.`;
    } else if (D3 === D4 && /[BDE]/.test(B3) && // If D3 equals D4 and B3 is one of BDE
      (D4 > D16 ?
        /[BDE]{2}/.test(acceptableScoresString) && // Contains at least two of BDE
        !/[^BDE]/.test(acceptableScoresString)  // ONLY contains BDE
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 3 & 4.`;
    } else if (D3 === D4 && /[BD]/.test(B3) && // If D3 equals D4 and B3 is one of BD
      (D4 > D16 ?
        /[BD]/.test(acceptableScoresString) && // Contains at least one of BD
        !/[^BD]/.test(acceptableScoresString)  // ONLY contains BD
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 3.`;
    } else if (D3 === D4 && /[DE]/.test(B3) && // If D3 equals D4 and B3 is one of DE
      (D4 > D16 ?
        /[DE]/.test(acceptableScoresString) && // Contains at least one of DE
        !/[^DE]/.test(acceptableScoresString)  // ONLY contains DE
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 4.`;
    } else if (D3 === D4 + 2 && /[GDFNEABKJ]/.test(B3)) {
      resultsSummary = `🎉 Success! Move on to severity assessment.`;
    } else if (D3 === D4 + 2) {
      resultsSummary = `🥳 Success! You've completed the assessment.`;
    } else if (NerveIssueScore === D3 && /[^ACILJ]/.test(B3) && /[^ACILJ]/.test(sortedResults[1][0]) && D3 >= D5 + 2) {
      resultsSummary = `💪 Success! Move on to nerve tests in Differential Assessment 1.`;
    } else if (NerveIssueScore < D3 && NerveIssueScore >= D3 - 1 && D3 > D4 && /[^ACILJ]/.test(B3) && D3 >= D5 + 2) {
      resultsSummary = `💪 Success! Move on to nerve tests in Differential Assessment 1.`;
    } else if (D3 >= D5 + 1 && D4 > D5 && /[AB]/.test(B3) && /[AB]/.test(sortedResults[1][0])) {
      resultsSummary = `🙌 Success! Move on to pulley severity assessment.`;
    } else if (D3 <= D4 + 1) {
      resultsSummary = `🤔 Something's wrong here.`;
    } else {
      resultsSummary = `🙃 Sorry, there seems to be an error.`;
    }

    let displayedResult;
    if (/💪/.test(resultsSummary) || /🎉/.test(resultsSummary) || /🥳/.test(resultsSummary)) {
      displayedResult = firstInjuryName;
    } else if (/🤙/.test(resultsSummary) || /🙌/.test(resultsSummary)) {
      displayedResult = "More information needed";
    } else if (/🤔/.test(resultsSummary)) {
      displayedResult = "Data unclear";
    } else {
      displayedResult = "Error";
    }

    // Add nerve issue possibility calculation
    let nerveIssuePossibility;

    if (firstInjuryName.toLowerCase() === "nerve issue") {
      nerveIssuePossibility = "⚠️ High";
    } else if (/1/.test(resultsSummary)) {
      nerveIssuePossibility = "To be determined...";
    } else if (
      NerveIssueScore === D3 &&
      /[^ACIL]/.test(B3) &&
      sortedResults[1] && /[^ACIL]/.test(sortedResults[1][0]) &&
      D3 >= D5 + 2
    ) {
      nerveIssuePossibility = "⚠️ Test Needed";
    } else if (
      NerveIssueScore >= D3 - 2 &&
      D3 > D4 &&
      /[^ACIL]/.test(B3) &&
      D3 >= D5 + 2
    ) {
      nerveIssuePossibility = "⚠️ Medium";
    } else if (
      NerveIssueScore >= D3 - 2 &&
      /unclear|information/i.test(displayedResult)
    ) {
      nerveIssuePossibility = "⚠️ Yes";
    } else {
      nerveIssuePossibility = "None";
    }

    // Add cyst possibility calculation
    let cystIndication;
    const question8Answer1Selected = responses[7]?.text === 'Yes';  // Index 7 for question 8, checking if answer 1 was selected

    if (/1/.test(resultsSummary)) {
      cystIndication = "To be determined...";
    } else if (firstInjuryName.toLowerCase() === "cyst") {
      cystIndication = "⚠️ Yes";
    } else if (CystScore >= D3 - 5 && question8Answer1Selected) {
      cystIndication = "⚠️ Yes";
    } else if (CystScore <= 0) {
      cystIndication = "None";
    } else {
      cystIndication = "None";
    }

    // Add additional details based on result type
    let additionalDetails;

    if (/💪/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to the nerve tests (questions 9A and 9B) in Differential Assessment 1.";
    } else if (/🤙/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now complete Differential Assessment 3 (Grade III-IV Pulley Injury vs. FDP Injury) as well as Differential Assessment 4 (Lumbrical Injury vs. FDP Injury).";
    } else if (/1/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to Differential Assessment 1: Grade I-II Pulley Injury vs. Flexor Tenosynovitis vs. Cyst vs. Nerve Issue vs. FDS Insertional Tendinopathy vs. Injury-Induced Pulley Thickening.";
    } else if (/2/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to Differential Assessment 2: Joint Synovitis vs. Collateral Ligament Injury vs. Lateral Band Syndrome.";
    } else if (/3/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to Differential Assessment 3: Grade III-IV Pulley Injury vs. FDP Injury.";
    } else if (/4/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to Differential Assessment 4: Lumbrical Injury vs. FDP Injury.";
    } else if (/🎉/.test(resultsSummary)) {
      additionalDetails = "Great job! You have completed the primary assessment. (You do not need to complete a differential assessment, but may need to complete a severity assessment if indicated above.)";
    } else if (/🙌/.test(resultsSummary)) {
      additionalDetails = "Great job! You have completed the primary assessment. (You do not need to complete a differential assessment, but you should complete the pulley severity assessment.)";
    } else if (/🥳/.test(resultsSummary)) {
      additionalDetails = "Great job! You have completed the primary assessment. (You do not need to complete a differential assessment or severity assessment.)";
    } else if (/🤔/.test(resultsSummary)) {
      additionalDetails = "Your answers indicate too many possibilities to calculate a result. This is typically a sign that some of the tests were not performed properly or that there may be too many confounding factors (such as multiple concurrent injuries). Please retake the primary assessment and try to be more specific with your answers. If you continue to receive this result, this assessment may not be suitable for you.\n\nIf you'd like assistance, enter the code 'hb-debug' into the text box at the bottom of the page and then email us a screenshot of your full results report (including results summary, answer log, and scores) to pt@hoopersbeta.com. Or if you prefer you can schedule an in-person or online consultation with Dr. Jason Hooper, PT, DPT, OCS, SCS at www.hoopersbeta.com/private-sessions.";
    } else if (/🙃/.test(resultsSummary)) {
      additionalDetails = "This is strange. Something has gone wrong in your questionnaire or you've encountered a bug. Please refresh the page and try again. If you continue to receive this result, enter the code 'hb-debug' into the text box at the bottom of the page and then email us a screenshot of your full results report (including results summary, answer log, and scores) to pt@hoopersbeta.com so we can assist you. We apologize for the inconvenience.";
    }

    // Get injury description
    const getInjuryDescription = (displayedResult) => {
      const description = INJURY_DESCRIPTIONS[displayedResult.toLowerCase()];
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
        setInjuryDescription(getInjuryDescription(displayedResult))
      ]).then(() => {
        setIsCalculating(false);
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
          <CardContent className="bg-gray-50 rounded-lg m-8">
            <CardTitle className="text-xl mb-2 pt-6 text-center">Primary Assessment Results</CardTitle>
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
                      <p className="text-md">{additionalDetails} </p>
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

              {/* Debug Code Input */}
              <div className="mt-6">
                <input
                  type="text"
                  placeholder="Debug code"
                  className="w-full p-2 border rounded"
                  onChange={(e) => {
                    if (e.target.value === 'hb-debug') {
                      setDebugMode(true);
                    }
                  }}
                />
              </div>

              {debugMode && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-sm">Current Scores (For Debugging)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(calculateScoresForAnswers(responses))
                        .sort((a, b) => b[1] - a[1])
                        .map(([injury, score]) => (
                          <div key={injury} className="flex justify-between">
                            <span>{injuryMapping[questionnaire.name][injury] || injury}:</span>
                            <span>{score}</span>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              )}

            </div>
          </CardContent>
          <div>
            <p className="text-xs text-gray-500 text-center mb-4">We do not store any information related to this tool. If you leave this page, your answers will be lost. <a href="https://hoopersbeta.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">View our privacy policy.</a></p>
          </div>
          <div className="mt-4 text-center">
            <Button
              onClick={() => {
                onComplete({ results, responses }, 'primary');
                onBack();
              }}
              className="m-6 w-full md:w-auto"
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
                <h3 className="font-medium text-lg">{currentQuestion.question}</h3>
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
                {getQuestionIndex(currentQuestionId) < questionnaire.questions.length - 1 ? (
                  <Button
                    onClick={() => {
                      if (checkForEarlyCompletion(currentQuestionId)) {
                        handleSubmit();
                      } else {
                        const nextId = getNextQuestionId(currentQuestionId);
                        setCurrentQuestionId(nextId);
                      }
                    }}
                    disabled={!responses[currentQuestionId]}
                  >
                    Next →
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleSubmit()}
                    disabled={!responses[currentQuestionId]}
                  >
                    Submit
                  </Button>
                )}
              </div>

              {/* Debug Code Input */}
              <div className="mt-12">
                <input
                  type="text"
                  placeholder="Debug code"
                  className="w-full p-2 border rounded"
                  onChange={(e) => {
                    if (e.target.value === 'hb-debug') {
                      setDebugMode(true);
                    }
                  }}
                />
              </div>

              {debugMode && (
                <Card className="mt-12">
                  <CardHeader>
                    <CardTitle className="text-sm">Current Scores (For Debugging)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(calculateScoresForAnswers(responses))
                        .sort((a, b) => b[1] - a[1])
                        .map(([injury, score]) => (
                          <div key={injury} className="flex justify-between">
                            <span>{injuryMapping[questionnaire.name][injury] || injury}:</span>
                            <span>{score}</span>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              )}
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
        </CardContent>
      </Card>
    </Layout>
  );
}

export default PrimaryQuestionnaire;

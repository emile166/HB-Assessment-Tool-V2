import React, { useState, useEffect } from 'react';
import { injuryMapping } from '../../utils/injuryMapping';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { DISCLAIMER_TEXT } from '../../constants/disclaimer';
import VideoEmbed from '../VideoEmbed/VideoEmbed';
import { DIFFERENTIAL_1_VIDEO_IDS } from '../../constants/differential-1-videos';
import { DIFFERENTIAL_1_PHOTOS_URLS } from '../../constants/differential-1-photos';
import ImageViewer from '../ImageViewer/ImageViewer';
import AppHeader from '../AppHeader/AppHeader';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { INJURY_DESCRIPTIONS } from '../../constants/injury-descriptions';

function DifferentialQuestionnaire1({ questionnaire, onBack, primaryResults }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentQuestionIndex, showResults]);

  const handleAnswer = (questionIndex, answer) => {
    const newResponses = {
      ...responses,
      [questionIndex]: answer,
    };
    setResponses(newResponses);
  };

  const calculateScoresForAnswers = (currentResponses) => {
    const totalScores = {};

    // Initialize all injury scores to 0
    Object.keys(injuryMapping[questionnaire.name]).forEach(injuryCode => {
      // Start with primary results scores if they exist
      totalScores[injuryCode] = (primaryResults?.results?.[injuryCode] || 0);
    });

    questionnaire.questions.forEach((q, idx) => {
      if (skippedQuestions.has(idx)) return;

      const answer = currentResponses[idx];
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
    });

    return totalScores;
  };

  const handleSubmit = (finalResponses = responses) => {
    setIsCalculating(true);

    // Calculate scores
    const scores = calculateScoresForAnswers(finalResponses);
    
    // Get sorted results
    const sortedResults = Object.entries(scores)
      .sort((a, b) => b[1] - a[1]);

    if (sortedResults.length === 0) {
      setResultMessage("🤷‍♂️\nThere's nothing to show.");
      setShowResults(true);
      return;
    }

    const [B3, D3] = sortedResults[0] || [null, 0];
    const [, D4] = sortedResults[1] || [null, 0];
    const [, D5] = sortedResults[2] || [null, 0];

    const injuryNames = injuryMapping[questionnaire.name];
    const firstInjuryName = injuryNames[B3] || B3;
    const secondInjuryName = sortedResults[1] ? injuryNames[sortedResults[1][0]] : '';

    // Calculate nerve issue possibility
    const nerveScore = scores['H'] || 0;
    const hasNerveYes = responses[8]?.text === 'Yes'; // Q9A
    const hasNerveNo = responses[8]?.text === 'No';
    const hasNerveIntensityYes = responses[9]?.text === 'Yes'; // Q9B
    const hasNerveIntensityNo = responses[9]?.text === 'No';

    // Calculate results based on the provided logic
    let resultsSummary;
    if (B3 === 'J') {
      resultsSummary = "😔\nThis isn't the tool for you.";
    } else if (D3 >= D4 + 2 && /[GDFNEABK]/.test(B3)) {
      resultsSummary = "🎉\nSuccess! Move on to severity assessment.";
    } else if (D3 >= D4 + 2) {
      resultsSummary = "🥳\nSuccess! You've completed the assessment.";
    } else if (nerveScore === D3 && D4 > D5 && 
      ((hasNerveNo && hasNerveIntensityYes) || hasNerveYes || (hasNerveNo && hasNerveIntensityNo))) {
      resultsSummary = /[GDFNEABK]/.test(B3) || /[GDFNEABK]/.test(sortedResults[1]?.[0]) ?
        "💪\nSuccess! Move on to severity assessment and be aware of the potential nerve issue." :
        "⚡\nSuccess! You've completed the assessment";
    } else if (D3 > D4 && B3 === 'I' && primaryResults?.responses[7]?.text === 'Yes' && responses[4]?.text === 'Yes') {
      resultsSummary = "🥳\nSuccess! You've completed the assessment.";
    } else if (D3 >= D5 + 1 && D4 > D5 && /[AB]/.test(B3) && /[AB]/.test(sortedResults[1]?.[0])) {
      resultsSummary = "🎉\nSuccess! Move on to severity assessment.";
    } else if ((D3 >= D4 && D4 >= D5 + 2 && /[DE]/.test(B3) && /[DE]/.test(sortedResults[1]?.[0])) ||
               (D3 >= D4 && D4 === D5 + 1 && /[DE]/.test(B3) && /[DE]/.test(sortedResults[1]?.[0]))) {
      resultsSummary = "🎊\nSuccess! Move on to severity assessment.";
    } else if (D3 <= D4 + 1) {
      resultsSummary = "🤔\nSomething's wrong here...";
    } else {
      resultsSummary = "🙃\nSorry, there seems to be an error.";
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
    } else if (/😔/.test(resultsSummary)) {
      displayedResult = "Possible Growth Plate Fracture";
    }

    // Calculate nerve issue possibility
    let nerveIssuePossibility;
    if (nerveScore === D3 - 2) {
      if (hasNerveNo && hasNerveIntensityYes) nerveIssuePossibility = "None";
      else if (hasNerveYes) nerveIssuePossibility = "⚠️ Medium";
      else if (hasNerveNo && hasNerveIntensityNo) nerveIssuePossibility = "None";
      else nerveIssuePossibility = "None";
    } else if (nerveScore < D3 && nerveScore > D3 - 2) {
      if (hasNerveNo && hasNerveIntensityYes) nerveIssuePossibility = "⚠️ Medium";
      else if (hasNerveYes) nerveIssuePossibility = "⚠️ High";
      else if (hasNerveNo && hasNerveIntensityNo) nerveIssuePossibility = "⚠️ Medium";
      else nerveIssuePossibility = "None";
    } else if (nerveScore === D3 && D4 > D5) {
      if (hasNerveNo && hasNerveIntensityYes) nerveIssuePossibility = "⚠️ Medium";
      else if (hasNerveYes) nerveIssuePossibility = "⚠️ High";
      else if (hasNerveNo && hasNerveIntensityNo) nerveIssuePossibility = "⚠️ Data Unclear";
      else nerveIssuePossibility = "None";
    } else if (hasNerveNo) {
      nerveIssuePossibility = "⚠️ Medium";
    } else {
      nerveIssuePossibility = "None";
    }

    // Calculate cyst indication
    let cystIndication;
    if (/Cyst/.test(displayedResult)) {
      cystIndication = "⚠️ Yes";
    } else {
      const cystScore = scores['I'] || 0;
      const primaryCystScore = primaryResults?.results?.['I'] || 0;
      const combinedCystScore = cystScore + primaryCystScore;
      const hadTrauma = primaryResults?.responses[0]?.text === 'Traumatic';
      const feltMass = primaryResults?.responses[7]?.text === 'Yes';
      const hadPriorInjury = responses[4]?.text === 'Yes';

      if (combinedCystScore >= D3 - 1) {
        cystIndication = "⚠️ Yes";
      } else if (combinedCystScore < D3 - 1 && combinedCystScore >= D3 - 2 && hadTrauma) {
        cystIndication = "None";
      } else if (combinedCystScore < D3 - 1 && combinedCystScore >= D3 - 2 && !feltMass && !hadPriorInjury) {
        cystIndication = "None";
      } else if (combinedCystScore < D3 - 1 && combinedCystScore >= D3 - 2 && feltMass) {
        cystIndication = "⚠️ Yes";
      } else if (combinedCystScore <= D3 - 3 && !feltMass) {
        cystIndication = "None";
      } else if (combinedCystScore <= D3 - 3 && !hadTrauma && feltMass) {
        cystIndication = "Mild";
      } else if (combinedCystScore >= D3 - 5 && feltMass) {
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
      additionalDetails = "Great job complete the assessment thus far! Your answers are strongly associated with a nerve issue.\n\n" +
        "If the affected finger is the second (index) or third (middle) digit, the culprit is most often the median nerve.\n\n" +
        "If the affected finger is the fifth (pinky) digit, the culprit is most often ulnar nerve.\n\n" +
        "If the affected finger is the fourth (ring) digit, please complete the nerve assessment (located in the 'Severity' tab) to help determine which nerve is most often associated with your symptoms.";
    } else if (/🎉/.test(resultsSummary)) {
      additionalDetails = "Great job completing the differential assessment! Based on your results, you should now move on to severity assessment.";
    } else if (/💪/.test(resultsSummary)) {
      additionalDetails = "Great job completing the differential assessment! Your answers are associated with a multi-faceted condition involving a possible nerve issue. Your next step will be to complete the severity assessment for your non-nerve issue. However, please continue reading below to find out more about your how the nerve issue may affect things.";
    } else if (/⚡/.test(resultsSummary)) {
      additionalDetails = "Great job completing the differential assessment! Your answers are associated with a multi-faceted condition involving a possible nerve issue. You do not need to complete a severity assessment at this time. However, please continue reading below to find out more about your how the nerve issue may affect things.";
    } else if (/🥳/.test(resultsSummary)) {
      additionalDetails = "Great job! You have completed the assessment. (You do not need to complete a severity assessment.) Heck yes!";
    } else if (/🎊/.test(resultsSummary)) {
      additionalDetails = "Great job completing the differential assessment! Your answers are associated with both an FDP injury and a lumbrical injury. These two injuries frequently occur together. For this reason, you should complete the appropriate severity assessments for both injuries. If your severity assessment results indicate different grades for each injury (e.g. FDP is grade I and lumbrical is grade II), choose your Recovery Blueprint based on the highest grade.";
    } else if (/🤔/.test(resultsSummary)) {
      additionalDetails = "Your answers indicate too many possibilities for a valid assessment. This can be due to multiple confounding factors, such as the possibility of two or more concurrent injuries. If you believe you performed all the tests properly and chose accurate answers, this may be the case for you. If so, you can email a link to your Answer Sheet to courses@hoopersbeta.com and we will be happy to assist you.";
    } else if (/😔/.test(resultsSummary)) {
      additionalDetails = "If you're seeing this, you may have been sent to this assessment by mistake; it not designed to handle the possibility of growth plate fractures.";
    } else if (/🙃/.test(resultsSummary)) {
      additionalDetails = "This is strange. Something has gone wrong with your Answer Sheet or you've encountered a bug. Please make a new copy of the Answer Sheet from the Master Copy and try again. If you continue to receive this result, please email your Answer Sheet to info@hoopersbeta.com and we will be happy to assist you. We apologize for the inconvenience.";
    }

    // Add nerve issue warning if applicable
    if (nerveIssuePossibility === "⚠️ High" && !/🤔/.test(resultsSummary)) {
      additionalDetails += "\n\n➡️ Please note: Your answers are associated with a high possibility of a nerve issue. Nerve issues can mask or mimic symptoms from other injuries, which can make them tricky to assess (and which can make assessing other injuries more challenging as well). We recommend the following course of action if you have approval from a qualified medical professional:\n" +
        "1. Start treatment for the nerve issue.\n" +
        "2. In one to two days, retake this assessment (or, if you're pressed for time, just retake Differential Assessment 1).\n" +
        "3. If your final results change, simply follow the new recommendations on the Answer Sheet.\n" +
        "4. If your final results do not change, continue treatment for the nerve issue and, if applicable, begin treatment for your other condition as well.\n" +
        "5. If your symptoms do not change after a week or two or you would like a more definitive assessment that can account for the potential nerve issue, you'll need to schedule an appointment with a qualified medical professional that has experience with nerve issues and, ideally, rock climbers.";
    } else if (nerveIssuePossibility === "⚠️ High" && /🤔/.test(resultsSummary)) {
      additionalDetails += "\n\n➡️ Please note: Your answers are associated with a high possibility of a nerve issue, which could be affecting your symptoms and therefore this assessment. Nerve issues can mask or mimic symptoms from other injuries, which can make them tricky to deal with. Be aware that a nerve issue is a possible confounding factor that may need professional evaluation.";
    }

    // Add cyst warning if applicable
    if (cystIndication === "⚠️ Yes") {
      additionalDetails += "\n\n➡️ Please note: Your answers are associated with the possibility of a cyst in your finger. Cysts can cause various symptoms that mimic other injuries, which makes obtaining an accurate diagnosis more challenging. Be aware that a cyst is a possible confounding factor that may need professional evaluation with ultrasound.";
    } else if (cystIndication === "Mild") {
      additionalDetails += "\n\n➡️ Please note: Your answer of 'yes' to 'do you feel an abnormal mass/lump in your finger?' is associated with the possibility of a cyst. Cysts can cause various symptoms that mimic other injuries, which makes obtaining an accurate diagnosis more challenging. Be aware that a cyst is a possible confounding factor that may need professional evaluation with ultrasound.";
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
      });
    }, 3000);
  };

  const getNextQuestionIndex = (currentIndex) => {
    let nextIndex = currentIndex + 1;
    while (nextIndex < questionnaire.questions.length && skippedQuestions.has(nextIndex)) {
      nextIndex++;
    }
    return nextIndex;
  };

  const getPreviousQuestionIndex = (currentIndex) => {
    let prevIndex = currentIndex - 1;
    while (prevIndex >= 0 && skippedQuestions.has(prevIndex)) {
      prevIndex--;
    }
    return prevIndex;
  };

  if (isCalculating) {
    return <LoadingScreen />;
  }

  if (showResults) {
    return (
      <Card className="w-full p-4 max-w-3xl mx-auto">
        <CardHeader>
          <AppHeader />
        </CardHeader>
        <CardContent className="bg-gray-50 rounded-lg ml-6 mr-6 mb-6">
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
                    <p className="text-md whitespace-pre-line">{additionalDetails}</p>
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
                  {questionnaire.questions.map((question, index) => {
                    const response = responses[index];
                    if (!response || skippedQuestions.has(index)) return null;

                    return (
                      <div key={index} className="border-b pb-2">
                        <div className="font-medium">Q{index + 1}: {question.question}</div>
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

            {/* Debug Mode */}
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
        <p className="text-xs text-gray-500 text-center mb-4">
          We do not store any information related to this tool. If you leave this page, your answers will be lost.
          <a href="https://hoopersbeta.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">
            View our privacy policy.
          </a>
        </p>
        <Button onClick={onBack} className="m-6 w-full md:w-auto">Back to Dashboard</Button>
      </Card>
    );
  }

  const currentQuestion = questionnaire.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questionnaire.questions.length) * 100;

  return (
    <Card className="w-full max-w-3xl mx-auto p-4">
      <CardHeader>
        <AppHeader />
        <CardTitle className="text-2xl pt-6">{questionnaire.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Question {currentQuestionIndex + 1}/{questionnaire.questions.length}</span>
              <span>(some questions may be skipped automatically)</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          <div>
            <div className="space-y-2">
              {DIFFERENTIAL_1_VIDEO_IDS[`Q${currentQuestionIndex + 1}`] && (
                <VideoEmbed videoId={DIFFERENTIAL_1_VIDEO_IDS[`Q${currentQuestionIndex + 1}`]} />
              )}
              {DIFFERENTIAL_1_PHOTOS_URLS[`Q${currentQuestionIndex + 1}`] && (
                <ImageViewer imageUrls={DIFFERENTIAL_1_PHOTOS_URLS[`Q${currentQuestionIndex + 1}`]} />
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
                  const answerText = value.split('_').slice(1).join('_');
                  const selectedAnswer = currentQuestion.answers.find(ans => ans.text === answerText);
                  handleAnswer(currentQuestionIndex, selectedAnswer);
                }}
                value={responses[currentQuestionIndex]?.text ? `${currentQuestionIndex}_${responses[currentQuestionIndex].text}` : undefined}
                className="space-y-2 mt-5"
              >
                {currentQuestion.answers.map((ans, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={`${currentQuestionIndex}_${ans.text}`}
                      id={`q${currentQuestionIndex}_a${idx}`}
                    />
                    <label htmlFor={`q${currentQuestionIndex}_a${idx}`} className="text-sm">
                      {ans.text}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {currentQuestion.type === 'select all that apply' && (
              <div className="grid gap-4 mt-5">
                {currentQuestion.answers.map((ans, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Checkbox
                      id={`q${currentQuestionIndex}_a${idx}`}
                      checked={(responses[currentQuestionIndex] || []).some(a => a.text === ans.text)}
                      onCheckedChange={(checked) => {
                        const prev = responses[currentQuestionIndex] || [];
                        if (checked) {
                          handleAnswer(currentQuestionIndex, [...prev, ans]);
                        } else {
                          handleAnswer(
                            currentQuestionIndex,
                            prev.filter(a => a.text !== ans.text)
                          );
                        }
                      }}
                    />
                    <label
                      htmlFor={`q${currentQuestionIndex}_a${idx}`}
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {ans.text}
                    </label>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between mt-6">
              {currentQuestionIndex > 0 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentQuestionIndex(getPreviousQuestionIndex(currentQuestionIndex))}
                >
                  Previous
                </Button>
              )}
              {currentQuestionIndex < questionnaire.questions.length - 1 ? (
                <Button
                  onClick={() => setCurrentQuestionIndex(getNextQuestionIndex(currentQuestionIndex))}
                  disabled={!responses[currentQuestionIndex]}
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={() => handleSubmit()}
                  disabled={!responses[currentQuestionIndex]}
                >
                  Submit
                </Button>
              )}
            </div>
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DifferentialQuestionnaire1; 
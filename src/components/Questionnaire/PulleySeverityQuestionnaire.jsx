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
    const [locationResult, setLocationResult] = useState('');
    const [resultsSummary, setResultsSummary] = useState('');
    const [additionalDetails, setAdditionalDetails] = useState('');
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

        // Calculate scores
        const scores = calculateScoresForAnswers(finalResponses);

        // Sort grade scores (A-E) and location scores (F-K) separately
        const gradeScores = Object.entries(scores)
            .filter(([key]) => /^[A-E]$/.test(key))
            .sort(([, a], [, b]) => b - a);

        const locationScores = Object.entries(scores)
            .filter(([key]) => /^[F-K]$/.test(key))
            .sort(([, a], [, b]) => b - a);

        let displayedResult;
        let locationResult;
        let resultsSummary;
        let additionalDetails;

        // Calculate Grade IVb score
        const gradeIVbScore = scores['E'] || 0;

        // Early completion override for Grade IVb
        if (earlyCompletion &&
            responses['injuryType']?.id === 'injuryTypeAnswer1' &&
            responses['obviousSound']?.id === 'obviousSoundAnswer1' &&
            responses['visibleBowstringing']?.id === 'visibleBowstringingAnswer1') {
            displayedResult = "Grade IVb";
            locationResult = "A2+A3+A4";
            resultsSummary = "⚕️ Medical evaluation is needed.";
        } else {
            // Regular results logic
            const [highestGrade, highestGradeScore] = gradeScores[0] || ['', 0];
            const [secondGrade, secondGradeScore] = gradeScores[1] || ['', 0];
            const [thirdGrade, thirdGradeScore] = gradeScores[2] || ['', 0];

            const [highestLocation, highestLocationScore] = locationScores[0] || ['', 0];
            const [secondLocation, secondLocationScore] = locationScores[1] || ['', 0];
            const [thirdLocation, thirdLocationScore] = locationScores[2] || ['', 0];

            // Calculate displayedResult
            if (highestGradeScore >= secondGradeScore + 3) {
                displayedResult = injuryMapping[questionnaire.name][highestGrade];
            } else if (gradeIVbScore >= 5) {
                displayedResult = "Data Unclear (Grade IVb Warning)";
            } else if (highestGradeScore < secondGradeScore + 3 &&
                highestGradeScore > secondGradeScore &&
                secondGradeScore >= thirdGradeScore + 2) {
                // Handle grade pairs logic
                if (/[AB]/.test(highestGrade) && /[AB]/.test(secondGrade)) {
                    displayedResult = "Grade II";
                } else if (/[BC]/.test(highestGrade) && /[BC]/.test(secondGrade)) {
                    displayedResult = "Grade III";
                } else if (/[CD]/.test(highestGrade) && /[CD]/.test(secondGrade)) {
                    displayedResult = "Grade IVa";
                } else if (/[DE]/.test(highestGrade) && /[DE]/.test(secondGrade)) {
                    displayedResult = "Grade IVb";
                } else {
                    displayedResult = "Data Unclear";
                }
            } else {
                displayedResult = "Data Unclear";
            }

            // Calculate locationResult
            if (displayedResult === "Data Unclear (Grade IVb Warning)") {
                locationResult = "Data Unclear";
            } else if (displayedResult === "Grade IVb") {
                locationResult = "A2+A3+A4";
            } else if (highestLocationScore >= secondLocationScore + 2) {
                if (displayedResult === "Data Unclear") {
                    locationResult = injuryMapping[questionnaire.name][highestLocation];
                } else if (/Grade (I|II|III)/.test(displayedResult) && /[FGH]/.test(highestLocation)) {
                    locationResult = injuryMapping[questionnaire.name][highestLocation];
                } else if (displayedResult === "Grade IVa" && /[IJ]/.test(highestLocation)) {
                    locationResult = injuryMapping[questionnaire.name][highestLocation];
                } else if (displayedResult === "Grade IVa" && secondLocationScore > thirdLocationScore) {
                    if (/[FGI]/.test(highestLocation) && /[FGI]/.test(secondLocation)) {
                        locationResult = "A2+A3";
                    } else if (/[GHJ]/.test(highestLocation) && /[GHJ]/.test(secondLocation)) {
                        locationResult = "A3+A4";
                    }
                } else {
                    locationResult = "Data Unclear";
                }
            } else {
                locationResult = "Data Unclear";
            }

            // Calculate resultsSummary
            resultsSummary = displayedResult === "Grade IVb" ? "⚕️ Medical evaluation is needed." :
                displayedResult === "Grade IVa" ? "🧑‍⚕️ Medical diagnosis required before treatment." :
                    displayedResult === "Data Unclear (Grade IVb Warning)" ? "😓 Something's wrong here…" :
                        displayedResult.startsWith("Grade") && locationResult !== "Data Unclear" && locationResult !== "None" ? "🥳 Success! You've completed the assessment." :
                            displayedResult === "Data Unclear" && locationResult === "Data Unclear" ? "🤔 Something's wrong here…" :
                                displayedResult === "Data Unclear" && locationResult !== "Data Unclear" && locationResult !== "None" ? "😞 Something's wrong here…" :
                                    displayedResult.startsWith("Grade") && locationResult === "Data Unclear" ? "🙏 So close! Revisit location-based questions." :
                                        "🙃 Sorry, there seems to be an error.";
        }

        // Calculate additionalDetails based on resultsSummary
        additionalDetails = calculateAdditionalDetails(resultsSummary);

        // Wait for loading animation
        setTimeout(() => {
            Promise.all([
                setResults(scores),
                setShowResults(true),
                setDisplayedResult(displayedResult),
                setLocationResult(locationResult),
                setResultsSummary(resultsSummary),
                setAdditionalDetails(additionalDetails),
            ]).then(() => {
                setIsCalculating(false);
                onComplete({
                    results: scores,
                    responses: finalResponses,
                    displayedResult,
                    locationResult,
                    resultsSummary,
                    additionalDetails
                });
                console.log("All states updated");
            });
        }, 3000);
    };

    // Helper function for additional details
    const calculateAdditionalDetails = (summary) => {
        if (summary.includes("🙃")) {
            return "This is strange; you may have encountered a bug. Please refresh this page and try again. If you continue to receive this result, please email us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to info@hoopersbeta.com and we will be happy to assist you. We apologize for the inconvenience.";
        } else if (summary.includes("⚕️")) {
            return "A grade IVb pulley injury involves complete ruptures of multiple pulleys. Due to the complexity of this injury and the possibility of other complicating factors, your first step should be to see your primary care physician. They will likely order imaging to confirm the extent of the damage while ruling out involvement of other tissues. They will then help you decide if you will need surgical intervention or if you can begin conservative treatment.";
        } else if (summary.includes("🧑‍⚕️")) {
            return "A grade IVa injury means two adjacent pulley tears. This grade of injury can be treated conservatively with a guided recovery program. However, before starting any treatment you must obtain a proper diagnosis from a qualified professional (using ultrasound or MRI) to rule out the possibility of a grade IVb injury, which is a more severe injury that may require surgery. This assessment tool is not a diagnostic tool and as such is not a replacement for proper medical advice.";
        } else if (summary.includes("🥳")) {
            return "Great job completing the pulley severity assessment! Your answers are associated with a clear grade and location of injury. Huzzah!";
        } else if (summary.includes("😓")) {
            return "Your answers did not indicate a clear result; however, they do show the possibility of a Grade IVb pulley injury, which is a rupture of multiple pulleys. If this does not sound right to you, please retake the severity questionnaire and make sure you are as accurate and specific as possible with your answers. If you continue to receive the same result, your condition may simply require professional evaluation. You can schedule an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.";
        } else if (summary.includes("🤔")) {
            return "Your answers did not indicate a clear grade or location of injury. If you are certain you have a pulley injury, please retake the severity questionnaire and make sure you are as accurate and specific as possible with your answers. If you continue to receive the same result, your condition may simply require professional evaluation. You can schedule an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.";
        } else if (summary.includes("😞")) {
            return "Your answers did not indicate a clear grade. If you are certain you have a pulley injury, please retake the severity questionnaire and make sure you are as accurate and specific as possible with your answers. If you continue to receive the same result, your condition may simply require professional evaluation. You can schedule an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.";
        } else if (summary.includes("🙏")) {
            return "Your results indicate a clear grade of injury, but the location is not clear. Please retake this assessment and pay special attention to questions related to the location of your injury, ensuring you’re being as accurate and specific as possible with your answers. If you continue to receive the same result, your condition may simply require professional evaluation. You can start by emailing us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to info@hoopersbeta.com and we will be happy to assist you if you can. Alternatively, you can speed up the process by scheduling an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.";
        } else {
            return "This is strange; you may have encountered a bug. Please refresh this page and try again. If you continue to receive this result, please email us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to info@hoopersbeta.com and we will be happy to assist you. We apologize for the inconvenience.";
        }
    };

    // Check for early completion
    const checkForEarlyCompletion = (currentId) => {
        const currentQuestionIndex = getQuestionIndex(currentId);
        const visibleBowstringingIndex = questionnaire.questions.findIndex(q => q.id === 'visibleBowstringing');

        // Check if visible bowstringing is indicated
        if (currentQuestionIndex === visibleBowstringingIndex) {
            const visibleBowstringingResponse = responses['visibleBowstringing']?.id;

            if (visibleBowstringingResponse === 'visibleBowstringingAnswer1') {
                setEarlyCompletion(true);
                return true;
            }
        }

        // Check before tissue loading questions
        const tissueLoadingIndex = questionnaire.questions.findIndex(q => q.id === 'tissueLoadingDrag');
        if (currentQuestionIndex === tissueLoadingIndex - 1) {
            const scores = calculateScoresForAnswers(responses);
            const sortedGradeScores = Object.entries(scores)
                .filter(([key]) => /^[A-E]$/.test(key))
                .sort(([, a], [, b]) => b - a);

            const [highestGrade, highestScore] = sortedGradeScores[0] || ['', 0];
            const secondHighestScore = sortedGradeScores[1]?.[1] || 0;

            if (/[CDE]/.test(highestGrade) && highestScore >= secondHighestScore + 2) {
                setEarlyCompletion(true);
                return true;
            }
        }

        // Check before injuredPulley question
        const injuredPulleyIndex = questionnaire.questions.findIndex(q => q.id === 'injuredPulley');
        if (currentQuestionIndex === injuredPulleyIndex - 1) {
            const scores = calculateScoresForAnswers(responses);
            const locationScores = Object.entries(scores)
                .filter(([key]) => /^[F-K]$/.test(key))
                .sort(([, a], [, b]) => b - a);

            const [, highestScore] = locationScores[0] || ['', 0];
            const secondHighestScore = locationScores[1]?.[1] || 0;

            if (highestScore >= secondHighestScore + 2) {
                setEarlyCompletion(true);
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

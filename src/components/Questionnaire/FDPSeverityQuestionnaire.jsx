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

function FDPSeverityQuestionnaire({ questionnaire, onBack, onComplete }) {
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
    const [earlyCompletion, setEarlyCompletion] = useState(false);
    const [versionResult, setVersionResult] = useState('');

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

    // Add handleSubmit function after the useEffect hook and before checkForEarlyCompletion
    const handleSubmit = (finalResponses = responses) => {
        setIsCalculating(true);
        
        const scores = calculateScoresForAnswers(finalResponses);
        
        // Sort scores to get top 3 grades (A, B, C)
        const sortedScores = Object.entries(scores)
            .filter(([code]) => /^[ABC]$/.test(code))
            .sort(([, a], [, b]) => b - a);
        
        const [B3, D3] = sortedScores[0] || ['', 0];
        const [B4, D4] = sortedScores[1] || ['', 0];
        const [B5, D5] = sortedScores[2] || ['', 0];

        // Calculate displayedResult
        let displayedResult;
        if (D3 >= D4 + 3) {
            displayedResult = injuryMapping[questionnaire.name][B3];
        } else if (D3 < D4 + 3 && D3 >= D4 && D4 >= D5 + 2) { // may want to reduce this to D4 >= D5 + 1 or 2 because getting it to 3 or more is pretty hard with so few questions
            if ((/[AB]/.test(B3) && /[AB]/.test(B4))) {
                displayedResult = "Grade II";
            } else if ((/[BC]/.test(B3) && /[BC]/.test(B4))) {
                displayedResult = "Grade III";
            } else {
                displayedResult = "Data Unclear";
            }
        } else {
            displayedResult = "Data Unclear";
        }

        // Calculate versionResult
        const injuryMechanismAnswer = finalResponses['injuryMechanism'];
        const fifthDigitAnswer = finalResponses['fifthDigit'];
        
        let versionResult;
        if (displayedResult === "Grade III") {
            versionResult = "N/A";
        } else if (injuryMechanismAnswer?.id === 'injuryMechanismAnswer2' && 
            fifthDigitAnswer?.id === 'fifthDigitAnswer1') {
            versionResult = "5th Digit (Pinky Finger) Version";
        } else if (injuryMechanismAnswer?.id === 'injuryMechanismAnswer1' && 
            fifthDigitAnswer?.id === 'fifthDigitAnswer2') {
            versionResult = "Two-Finger Pocket Version";
        } else if (injuryMechanismAnswer?.id === 'injuryMechanismAnswer1' && 
            fifthDigitAnswer?.id === 'fifthDigitAnswer1') {
            versionResult = "5th Digit (Pinky Finger) Version";
        } else if (injuryMechanismAnswer?.id === 'injuryMechanismAnswer2' && 
            fifthDigitAnswer?.id === 'fifthDigitAnswer2') {
            versionResult = "Standard Version";
        } else {
            versionResult = "Data Unclear";
        }

        // Calculate resultsSummary
        let resultsSummary;
        if (displayedResult === "Grade III") {
            resultsSummary = "⚕️ Medical evaluation is needed.";
        } else if (displayedResult.includes("Grade") && versionResult !== "Data Unclear") {
            resultsSummary = "🥳 Success! You've completed the assessment.";
        } else if (displayedResult.includes("Grade") && versionResult === "Data Unclear") {
            resultsSummary = "🙏 So close! Some clarification is needed.";
        } else if (displayedResult === "Data Unclear" && versionResult !== "Data Unclear") {
            resultsSummary = "😞 Something's wrong here…";
        } else if (displayedResult === "Data Unclear" && 
            versionResult === "Data Unclear") {
            resultsSummary = "🤔 Something's wrong here…";
        } else {
            resultsSummary = "🙃 Sorry, there seems to be an error.";
        }

        // Calculate additionalDetails
        let additionalDetails;
        if (resultsSummary.includes("🙃")) {
            additionalDetails = "This is strange; you may have encountered a bug. Please refresh this page and try again. If you continue to receive this result, please email us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to info@hoopersbeta.com and we will be happy to assist you. We apologize for the inconvenience.";
        } else if (resultsSummary.includes("⚕️")) {
            additionalDetails = "Your answers are associated with a Grade III injury, which is a tear or rupture of the FDP. Your first step should be to schedule an appointment with your primary care physician who will likely need to order imaging to confirm the injury. They will then guide you on what steps to take next, whether that be conservative treatment or a surgical referral.";
        } else if (resultsSummary.includes("🥳")) {
            additionalDetails = "Great job! You've completed the assessment. Huzzah! Now is the time to start your recovery.";
        } else if (resultsSummary.includes("🙏")) {
            additionalDetails = "Your answers are associated with a clear grade of injury, but the location results are unclear which makes it hard to determine the correct recovery protocol version. Please retake this assessment and make sure you have answered all questions as accurately as possible. If you continue to receive the same result, your condition may simply require professional evaluation. You can start by emailing us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to info@hoopersbeta.com and we will be happy to assist you if you can. Alternatively, you can speed up the process by scheduling an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.";
        } else if (resultsSummary.includes("😞") || resultsSummary.includes("🤔")) {
            additionalDetails = "Your answers did not indicate a clear grade of injury. If you are certain you have an FDP injury, please retake the severity questionnaire and make sure you are as accurate and specific as possible with your answers. If you continue to receive the same result, your condition may simply require professional evaluation. You can start by emailing us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to info@hoopersbeta.com and we will be happy to assist you if you can. Alternatively, you can speed up the process by scheduling an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.";
        } else {
            additionalDetails = "This is strange; you may have encountered a bug. Please refresh this page and try again. If you continue to receive this result, please email us screenshots of your answer log and scores (enter code 'hb-debug' into the debug field below) to info@hoopersbeta.com and we will be happy to assist you. We apologize for the inconvenience.";
        }

        // Wait for loading animation
        setTimeout(() => {
            Promise.all([
                setResults({ scores, responses: finalResponses }),
                setShowResults(true),
                setDisplayedResult(displayedResult),
                setVersionResult(versionResult),
                setResultsSummary(resultsSummary),
                setAdditionalDetails(additionalDetails)
            ]).then(() => {
                setIsCalculating(false);
                if (onComplete) {
                    onComplete({
                        results: scores,
                        responses: finalResponses,
                        displayedResult,
                        versionResult,
                        resultsSummary,
                        additionalDetails
                    });
                }
            });
        }, 3000); // 3 second delay to match PulleySeverityQuestionnaire
    };

    // Check for early completion
    const checkForEarlyCompletion = (currentId) => {
        const currentQuestionIndex = getQuestionIndex(currentId);

        // Check before tissue loading questions
        const tissueLoadingDragIndex = questionnaire.questions.findIndex(q => q.id === 'tissueLoadingDrag');
        const tissueLoadingIsolatedDragIndex = questionnaire.questions.findIndex(q => q.id === 'tissueLoadingIsolatedDrag');

        if (currentQuestionIndex === tissueLoadingDragIndex - 1 || 
            currentQuestionIndex === tissueLoadingIsolatedDragIndex - 1) {
            const scores = calculateScoresForAnswers(responses);
            const sortedScores = Object.entries(scores)
                .filter(([code]) => /^[ABC]$/.test(code))
                .sort(([, a], [, b]) => b - a);

            const [highestGrade, highestScore] = sortedScores[0] || ['', 0];
            const secondHighestScore = sortedScores[1]?.[1] || 0;

            // Check if Grade III (C) is highest scoring with 3+ point lead
            if (highestGrade === 'C' && highestScore >= secondHighestScore + 3) {
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
                        title="FDP Injury Severity Assessment Results"
                        displayedResult={displayedResult}
                        versionResult={versionResult}
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

export default FDPSeverityQuestionnaire;

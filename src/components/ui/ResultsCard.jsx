import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DISCLAIMER_TEXT } from "@/constants/disclaimer";
import { AnswerLog } from "@/components/ui/AnswerLog";
import { Button } from "../ui/button";
import { DebugScores } from "../Debug/DebugScores";

export function ResultsCard({
    title,
    displayedResult,
    locationResult,
    resultsSummary,
    nerveIssuePossibility,
    cystIndication,
    additionalDetails,
    injuryDescription,
    questions,
    responses,
    skippedQuestions,
    getQuestionIndex,
    scores,
    questionnaireName,
    onBack,
    children
}) {
    return (
        <div className="mb-8">

            <CardTitle className="mt-8 text-xl text-center">{title}</CardTitle>

            <Card className="p-4 m-4 bg-red-100">
                {DISCLAIMER_TEXT}
            </Card>

            <div>
                {/* Primary Result */}
                <Card className="p-4 m-4">
                    <h2 className="text-md mb-2 text-center">Your responses suggest:</h2>
                    <p className="text-lg font-semibold bg-primary text-black mb-8 text-center rounded-sm p-2">
                        {displayedResult}
                    </p>
                    {locationResult && (
                        <div className="mb-8">
                            <h3 className="text-md mb-2 text-center">At this location:</h3>
                            <p className="text-lg font-semibold bg-primary text-black mb-4 text-center rounded-sm p-2">
                                {locationResult}
                            </p>
                        </div>
                    )}
                    <p className="text-lg mb-2 text-center">
                        {resultsSummary} See additional details below.
                    </p>
                </Card>

                {/* Risk Indicators */}
                {(questionnaireName === 'Primary Assessment' || 
                  questionnaireName.startsWith('Differential Assessment')) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                        <Card className="p-4">
                            <h3 className="text-sm font-semibold text-muted-foreground">
                                Nerve Issue Indication
                            </h3>
                            <p className="text-md font-medium">{nerveIssuePossibility}</p>
                        </Card>
                        <Card className="p-4">
                            <h3 className="text-sm font-semibold text-muted-foreground">
                                Cyst Indication
                            </h3>
                            <p className="text-md font-medium">{cystIndication}</p>
                        </Card>
                    </div>
                )}

                {/* Injury Details */}
                {(additionalDetails || injuryDescription) && (
                    <div className="rounded-lg px-8 mb-4 mt-8">
                        {additionalDetails && (
                            <div className="mb-4">
                                <h2 className="text-md font-semibold mb-2">Additional Details</h2>
                                <p className="text-md">{additionalDetails}</p>
                            </div>
                        )}
                        {injuryDescription && <p className="text-md">{injuryDescription}</p>}
                    </div>
                )}

                <div>
                    <p className="text-xs text-gray-500 text-center mt-8 px-4">We do not save or store any information related to this tool. <a href="https://hoopersbeta.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">View our privacy policy.</a></p>
                </div>

                {/* Back to Dashboard button */}
                <div className="mt-4 mb-8 text-center">
                    <Button
                        onClick={onBack}
                        className="w-auto"
                    >
                        Back to Dashboard
                    </Button>
                </div>

                {/* Answer Log */}
                {questions && responses && (
                    <AnswerLog
                        questions={questions}
                        responses={responses}
                        skippedQuestions={skippedQuestions}
                        getQuestionIndex={getQuestionIndex}
                    />
                )}

                {/* Add DebugScores */}
                <DebugScores
                    scores={scores}
                    questionnaireName={questionnaireName}
                />

                {children}

            </div>
        </div>
    );
} 
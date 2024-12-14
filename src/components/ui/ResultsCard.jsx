import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DISCLAIMER_TEXT } from "@/constants/disclaimer";
import { AnswerLog } from "@/components/ui/AnswerLog";
import { Button } from "../ui/button";
import { DebugScores } from "../Debug/DebugScores";

export function ResultsCard({
    title,
    displayedResult,
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
        <CardContent className="bg-gray-50 rounded-lg m-8">
            <CardTitle className="text-xl mb-2 pt-6 text-center">{title}</CardTitle>
            <p className="text-xs text-red-500 text-center uppercase mb-8">
                {DISCLAIMER_TEXT}
            </p>

            <div className="space-y-6">
                {/* Primary Result */}
                <div className="bg-white border rounded-lg p-6">
                    <h2 className="text-md mb-2 text-center">Your responses suggest:</h2>
                    <p className="text-lg font-semibold bg-primary text-black mb-8 text-center rounded-sm p-2">
                        {displayedResult}
                    </p>
                    <p className="text-lg mb-2 text-center">
                        {resultsSummary} See additional details below.
                    </p>
                </div>

                {/* Risk Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="border rounded-lg pr-8 pl-8 pt-4 pb-4">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-1">
                            Nerve Issue Possibility
                        </h3>
                        <p className="text-md font-medium">{nerveIssuePossibility}</p>
                    </div>
                    <div className="border rounded-lg pr-8 pl-8 pt-4 pb-4">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-1">
                            Cyst Indication
                        </h3>
                        <p className="text-md font-medium">{cystIndication}</p>
                    </div>
                </div>

                {/* Injury Details */}
                {(additionalDetails || injuryDescription) && (
                    <div className="rounded-lg pr-8 pl-8 mb-4 mt-2">
                        {additionalDetails && (
                            <div className="mb-4">
                                <h2 className="text-md font-semibold mb-2">Additional Details</h2>
                                <p className="text-md">{additionalDetails}</p>
                            </div>
                        )}
                        {injuryDescription && <p className="text-md">{injuryDescription}</p>}
                    </div>
                )}

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

                <div>
                    <p className="text-xs text-red-500 text-center mb-4">We do not store any information related to this tool. If you leave this page, your answers will be lost. <a href="https://hoopersbeta.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">View our privacy policy.</a></p>
                </div>

                {/* Add Back to Dashboard button */}
                <div className="mt-6 mb-6 text-center">
                    <Button
                        onClick={onBack}
                        variant="outline"
                        className="w-full md:w-auto"
                    >
                        Back to Dashboard
                    </Button>
                </div>

                {children}
            </div>
        </CardContent>
    );
} 
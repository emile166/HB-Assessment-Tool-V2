import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import AppHeader from "../AppHeader/AppHeader";
import { Button } from "./button";
import Layout from "../Layout/Layout";
import { DebugScores } from "../Debug/DebugScores";

export function QuestionnaireLayout({
    children,
    title,
    currentQuestion,
    totalQuestions,
    progress,
    onBack,
    containerRef,
    scores,
    questionnaireName
}) {
    return (
        <Layout>
            <Card ref={containerRef}>
                <AppHeader />
                <CardContent className="mt-2 p-4 md:p-8">

                    {/* Questionnaire Title */}
                    <CardTitle className="text-xl mt-4 mb-2 md:mb-4 md:mt-0">{title}</CardTitle>

                    {/* Progress bar */}
                    <div className="space-y-10">
                        <div className="space-y-2">
                            <p className="flex justify-between text-xs text-gray-500">Question {currentQuestion}/{totalQuestions} (some questions are skipped automatically)</p>
                            <Progress value={progress} className="w-full" />
                        </div>

                        {children}

                        {/* Back to Dashboard button */}
                        <div className="pt-8 text-center">
                            <Button
                                onClick={onBack}
                                variant="outline"
                                className="w-full md:w-auto"
                            >
                                Back to Dashboard
                            </Button>
                        </div>

                        {/* Debug code entry */}
                        <DebugScores
                            scores={scores}
                            questionnaireName={questionnaireName}
                        />

                    </div>
                </CardContent>
            </Card>
        </Layout>
    );
} 
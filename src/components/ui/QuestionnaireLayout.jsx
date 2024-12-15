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
                    <CardTitle className="text-2xl mb-4">{title}</CardTitle>

                    <div className="space-y-6 md:space-y-8">
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Question {currentQuestion}/{totalQuestions}</span>
                                <span>(some questions may be skipped automatically)</span>
                            </div>
                            <Progress value={progress} className="w-full" />
                        </div>

                        {children}

                        <DebugScores 
                            scores={scores}
                            questionnaireName={questionnaireName}
                        />

                        {/* Back to Dashboard button */}
                        <div className="mt-4 md:mt-6 mb-4 md:mb-6 text-center">
                            <Button
                                onClick={onBack}
                                variant="outline"
                                className="w-full md:w-auto"
                            >
                                Back to Dashboard
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Layout>
    );
} 
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function AnswerLog({ questions, responses, skippedQuestions, getQuestionIndex }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleLog = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="p-4">
            <div className="text-center">
                <button onClick={toggleLog} className="mx-8 mb-2 underline font-sm text-primary">
                    {isOpen ? 'Hide Answer Log' : 'See Answer Log'}
                </button>
            </div>
            <div>
                {isOpen && (
                    <Card className="p-6 text-sm space-y-2">
                        {questions.map((question) => {
                            const response = responses[question.id];
                            if (!response || skippedQuestions.has(question.id)) return null;

                            return (
                                <div key={question.id} className="border-b pb-2">
                                    <div className="font-medium">
                                        Q{getQuestionIndex(question.id) + 1}: {question.question}
                                    </div>
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
                    </Card>
                )}
            </div>
        </div>
    );
} 
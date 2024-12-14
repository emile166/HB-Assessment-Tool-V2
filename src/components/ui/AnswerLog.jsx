import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function AnswerLog({ questions, responses, skippedQuestions, getQuestionIndex }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Answer Log</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
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
        </div>
      </CardContent>
    </Card>
  );
} 
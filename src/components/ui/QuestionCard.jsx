import VideoEmbed from "../VideoEmbed/VideoEmbed";
import ImageViewer from "../ImageViewer/ImageViewer";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Checkbox } from "./checkbox";
import { Button } from "./button";

export function QuestionCard({
  question,
  response,
  onAnswer,
  onPrevious,
  onNext,
  isFirst,
  isLast
}) {
  return (
    <div>
      <div className="space-y-2">
        {question?.video && <VideoEmbed videoId={question.video} />}
      </div>

      <div className="mt-5">
        <h3 className="font-medium text-lg">{question.question}</h3>
        <p className="text-sm text-gray-500">
          {question.type} - read all before submitting
        </p>
      </div>

      {question.type === 'select one answer' && (
        <RadioGroup
          onValueChange={(value) => {
            const selectedAnswer = question.answers.find(ans => ans.id === value);
            onAnswer(selectedAnswer);
          }}
          value={response?.id}
          className="space-y-2 mt-5"
        >
          {question.answers.map((ans) => (
            <div key={ans.id} className="flex items-center space-x-2">
              <RadioGroupItem value={ans.id} id={ans.id} />
              <label htmlFor={ans.id} className="text-sm">
                {ans.text}
              </label>
            </div>
          ))}
        </RadioGroup>
      )}

      {question.type === 'select all that apply' && (
        <div className="grid gap-4 mt-5">
          {question.answers.map((ans) => (
            <div key={ans.id} className="flex items-center space-x-3">
              <Checkbox
                id={ans.id}
                checked={(response || []).some(a => a.id === ans.id)}
                onCheckedChange={(checked) => {
                  const prev = response || [];
                  if (checked) {
                    onAnswer([...prev, ans]);
                  } else {
                    onAnswer(prev.filter(a => a.id !== ans.id));
                  }
                }}
              />
              <label htmlFor={ans.id} className="text-sm leading-none">
                {ans.text}
              </label>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8">
        {question?.photos?.length > 0 && (
          <ImageViewer imageUrls={question.photos} />
        )}
      </div>

      <div className="flex justify-between gap-4 mt-6">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={isFirst}
        >
          ← Previous
        </Button>
        <Button
          onClick={onNext}
          disabled={!response}
        >
          {!isLast ? "Next →" : "Submit"}
        </Button>
      </div>
    </div>
  );
} 
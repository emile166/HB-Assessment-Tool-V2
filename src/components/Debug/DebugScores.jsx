import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { injuryMapping } from '../../constants/injuryMapping';

export function DebugScores({ scores, questionnaireName }) {
  const [debugMode, setDebugMode] = useState(false);

  return (
    <>
      {/* Debug Code Input */}
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
              {Object.entries(scores)
                .sort((a, b) => b[1] - a[1])
                .map(([injury, score]) => (
                  <div key={injury} className="flex justify-between">
                    <span>{injuryMapping[questionnaireName][injury] || injury}:</span>
                    <span>{score}</span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
} 
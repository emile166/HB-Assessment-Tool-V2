import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import AppHeader from '../AppHeader/AppHeader';
import { TERMS_TEXT } from '../../constants/terms';

function Terms({ accepted, onAcceptChange, onContinue }) {
  const [localAccepted, setLocalAccepted] = useState(accepted);

  const handleCheckboxChange = (checked) => {
    setLocalAccepted(checked);
    onAcceptChange(checked);
  };

  return (
    <div>
      <CardContent>
        <h2 className="text-xl font-bold text-red-500 mb-4">READ BEFORE PROCEEDING</h2>

        <div className="space-y-4">
          {TERMS_TEXT.map((section, index) => (
            <p key={index} className="text-muted-foreground">
              {section}
            </p>
          ))}
        </div>
        <div className="flex items-center space-x-2 mt-6 mb-6">
          <Checkbox
            id="terms"
            checked={localAccepted}
            onCheckedChange={handleCheckboxChange}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I understand and accept
          </label>
        </div>

        <Button
          onClick={onContinue}
          disabled={!localAccepted}
          className="w-full"
        >
          Continue to Dashboard
        </Button>
      </CardContent>
    </div>
  );
}

export default Terms; 
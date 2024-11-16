import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { TERMS_TEXT } from '../../constants/terms';

function Terms({ accepted, onAcceptChange }) {
  return (
    <Card className="mt-6 rounded-lg p-6">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-red-500">
          READ BEFORE PROCEEDING
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {TERMS_TEXT.map((section, index) => (
            <p key={index} className="text-muted-foreground">
              {section}
            </p>
          ))}
        </div>
        <div className="flex items-center space-x-2 mt-6">
          <Checkbox
            id="terms"
            checked={accepted}
            onCheckedChange={() => onAcceptChange(!accepted)}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I understand and accept
          </label>
        </div>
      </CardContent>
    </Card>
  );
}

export default Terms; 
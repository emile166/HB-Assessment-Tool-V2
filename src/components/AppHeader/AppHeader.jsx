import React from 'react';
import { CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

function AppHeader() {
  return (
    <div className="mb-4 bg-secondary/50 rounded-lg p-4 text-center">
      <h1 className="text-2xl font-bold mb-2">Hooper's Beta Injury Assessment Tool</h1>
      <p className="mb-2 text-gray-500">Finger, Hand, and Forearm Injuries</p>
      <p className="text-gray-500 text-sm">By using this tool, you agree to our <a 
        href="https://hoopersbeta.com/terms-and-conditions"
        target="_blank" 
        rel="noopener noreferrer"
        className="underline"
        >
        terms and conditions.
      </a>
      </p>
      <Button asChild className="mt-6 bg-secondary-foreground hover:bg-secondary-foreground/80 w-fit mx-auto">
        <a 
          href="https://hoopersbeta.com/recoveryblueprint" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Get my affordable injury-specific recovery program.
        </a>
      </Button>
    </div>
  );
}

export default AppHeader; 
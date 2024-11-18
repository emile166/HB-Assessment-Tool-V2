import React from 'react';
import { CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

function AppHeader() {
  return (
    <div className="mb-4 bg-secondary rounded-lg p-4 text-center">
      <h1 className="text-2xl font-bold mb-2">Hooper's Beta Injury Assessment Tool</h1>
      <p className="mb-2 text-gray-500">Finger, Hand, and Forearm Injuries</p>
      <Button className="mt-6 mb-2 bg-secondary-foreground hover:bg-secondary-foreground/80 w-fit mx-auto">
        <a
          href="https://hoopersbeta.com/recoveryblueprint"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm"
        >
          Get My Affordable Injury Recovery Program
        </a>
      </Button>
      <p className="text-gray-500 text-xs">By using this tool, you agree to our <a
        href="https://hoopersbeta.com/terms-and-conditions"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        terms and conditions.
      </a>
      </p>
    </div>
  );
}

export default AppHeader; 
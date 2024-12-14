import React from 'react';
import { CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

function AppHeader() {
  return (
    <div className="bg-primary text-center p-8">
      <h1 className="text-2xl text-white font-bold mb-2">Hooper's Beta Injury Assessment Tool</h1>
      <p className="mb-2 text-white">Finger, Hand, and Forearm Injuries</p>
      <Button className="mt-6 mb-2 bg-secondary hover:bg-secondary/80 w-fit mx-auto">
        <a
          href="https://hoopersbeta.com/recoveryblueprint"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-black"
        >
          Get An Injury-Specific Recovery Program
        </a>
      </Button>
      <p className="text-white text-xs">By using this tool, you agree to our <a
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
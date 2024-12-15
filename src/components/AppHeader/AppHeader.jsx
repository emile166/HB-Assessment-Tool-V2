import React, { forwardRef } from 'react';
import { CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const AppHeader = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-primary/50 text-center p-8 rounded-lg">
      <h1 className="text-2xl text-black font-bold mb-2">Hooper's Beta Injury Assessment Tool</h1>
      <p className="mb-2 text-gray-500">Finger, Hand, and Forearm Injuries</p>
      <Button className="mt-6 mb-2 bg-secondary-foreground hover:bg-secondary-foreground/80 w-fit mx-auto min-h-[3rem] px-6 py-3">
        <a
          href="https://hoopersbeta.com/recoveryblueprint"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white"
        >
          Get An Injury-Specific Recovery Program
        </a>
      </Button>
      <p className="text-gray-500 text-xs">By using this tool, you agree to our <a
        href="https://hoopersbeta.com/terms-and-conditions"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-gray-500"
      >
        terms and conditions.
      </a>
      </p>
    </div>
  );
});

AppHeader.displayName = 'AppHeader';

export default AppHeader;
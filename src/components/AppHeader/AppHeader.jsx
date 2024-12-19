import React, { forwardRef } from 'react';
import { CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const AppHeader = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-primary/25 text-center p-8 rounded-lg">
      <a href="/dashboard" className="text-2xl text-black font-bold mb-2">
        Hooper's Beta Injury Assessment Tool
      </a>
      <p className="text-gray-500">Finger, Hand, and Forearm Injuries</p>

      <p className="text-gray-500 text-xs">By using this tool, you agree to our <a
        href="https://hoopersbeta.com/terms-and-conditions"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-gray-500"
      >
        terms and conditions.
      </a>
      </p>

      <p className="mt-8 text-gray-500">Completed the assessment?</p>

      <Button className="bg-secondary-foreground hover:bg-secondary-foreground/80 w-fit mx-auto min-h-[4rem] md:min-h-[3rem] px-6 py-3">
        <a
          href="https://hoopersbeta.com/recoveryblueprint"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white"
        >
          GET AN INJURY-SPECIFIC RECOVERY PROGRAM HERE
        </a>
      </Button>
    </div>
  );
});

AppHeader.displayName = 'AppHeader';

export default AppHeader;
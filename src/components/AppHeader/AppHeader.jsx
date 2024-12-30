import React, { forwardRef } from 'react';
import { CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const AppHeader = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-primary/25 text-center p-8 rounded-lg relative"
      style={{
        backgroundImage: 'url("https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/3070c347-4879-4e84-95d3-68677e1c21e4/mountain+illustration+for+assessment+tool+header+background.jpg?content-type=image%2Fjpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className="flex justify-center items-center">
        <a href="https://www.hoopersbeta.com/">
          <img src="https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/65b6f7e8-c3f1-437f-81c5-bd243e7a0a8b/Logo+with+HB+centered.png?content-type=image%2Fpng" alt="Hooper's Beta Logo" className="size-12" />
        </a>
      </div>

      <div className="relative z-10">
        <a href="https://www.hoopersbeta.com/finger-tool" className="text-2xl text-black font-bold mb-2">
          Injury Assessment Tool
        </a>
        <p className="text-gray-500 uppercase">For rock climbing related finger injuries</p>

        <Button className="bg-secondary-foreground hover:bg-secondary-foreground/80 w-fit mx-auto min-h-[2.5rem] md:min-h-[2.5rem] px-4 py-2 mt-8">
          <a
            href="https://hoopersbeta.com/recoveryblueprint"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white"
          >
            GET AN INJURY-SPECIFIC RECOVERY PROGRAM HERE
          </a>
        </Button>

        <p className="text-gray-500 text-xs mt-2">By using this tool, you agree to our <a
          href="https://hoopersbeta.com/termsandconditions"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-gray-500"
        >
          terms and conditions.
        </a>
        </p>

      </div>
    </div>
  );
});

AppHeader.displayName = 'AppHeader';

export default AppHeader;
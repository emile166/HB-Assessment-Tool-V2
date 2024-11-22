import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from "../ui/card";
import { Progress } from "../ui/progress";
import AppHeader from '../AppHeader/AppHeader';

function LoadingScreen({ title = "Calculating Results", message = "Analyzing response patterns..." }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start progress animation
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        // Speed up the last 20% to make it feel more natural
        const increment = oldProgress > 80 ? 2 : 1;
        const newProgress = Math.min(oldProgress + increment, 100);
        return newProgress;
      });
    }, 25); // Update every 25ms for smooth animation

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <AppHeader />
      </CardHeader>
      <CardContent className="bg-gray-50 rounded-lg ml-6 mr-6 mb-6">
        <div className="min-h-[400px] flex flex-col items-center justify-center space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-500">{message}</p>
          </div>
          <div className="w-64 space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-center text-gray-500">{progress}%</p>
          </div>
          <div className="text-sm text-gray-400">
            {progress < 33 && "Analyzing response patterns..."}
            {progress >= 33 && progress < 66 && "Processing injury indicators..."}
            {progress >= 66 && progress < 100 && "Generating assessment..."}
            {progress === 100 && "Completing analysis..."}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default LoadingScreen; 
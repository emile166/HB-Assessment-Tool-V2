import React from 'react';
import { Card, CardContent, CardHeader } from "../ui/card";
import { Progress } from "../ui/progress";
import AppHeader from '../AppHeader/AppHeader';

function LoadingScreen({ title = "Calculating Results", message = "Analyzing response patterns..." }) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <AppHeader />
      </CardHeader>
      <CardContent className="bg-gray-50 rounded-lg ml-6 mr-6 mb-6">
        <div className="min-h-[400px] flex flex-col items-center justify-center space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-gray-500">{message}</p>
          </div>
          <Progress value={100} className="w-64 animate-pulse" />
          <div className="text-sm text-gray-400 animate-pulse">
            Processing injury indicators...
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default LoadingScreen; 
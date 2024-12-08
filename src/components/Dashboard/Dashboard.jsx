import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import AppHeader from '../AppHeader/AppHeader';

function Dashboard({ onSelectQuestionnaire }) {
  return (
    <Card className="max-w-3xl mx-auto p-4 rounded-lg">
      <CardHeader>
        <AppHeader />
      </CardHeader>
      <CardContent>
        {/* Primary Assessment Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Primary Assessment (Start Here)</h2>
          <p className="text-sm text-gray-500 mb-4">
            Start here unless otherwise instructed. This assessment will help determine which follow-up assessments you need, if any.
          </p>
          <Button
            onClick={() => onSelectQuestionnaire('primary')}
            className="w-full"
          >
            Start Primary Assessment
          </Button>
        </div>

        {/* Differential Assessment Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Differential Assessment</h2>
          <p className="text-sm text-gray-500 mb-4">
            Complete one or more of the following assessments if instructred by your primary assessment results.
          </p>
          <div className="space-y-4">
            <Button
              onClick={() => onSelectQuestionnaire('differential1')}
              className="w-full"
            >
              Differential Assessment 1
            </Button>
            {/* Add more differential assessment buttons as needed */}
          </div>
        </div>

        {/* Severity Assessment Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Severity Assessment</h2>
          <p className="text-sm text-gray-500 mb-4">
            Complete the assessment that applies to your injury ONLY if instructed by a prior assessment or qualified professional.
          </p>
          <Button
            disabled={true} // Enable when severity assessments are implemented
            className="w-full"
          >
            Coming Soon
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Dashboard; 
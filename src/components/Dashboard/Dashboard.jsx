import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import AppHeader from '../AppHeader/AppHeader';
import Layout from '../Layout/Layout';

function Dashboard({ onSelectQuestionnaire }) {
  return (
    <Layout>
      <Card>
        <AppHeader />
        <CardContent className="mt-4 p-8">
          {/* Primary Assessment Section */}
          <Card className="p-4 mb-8">
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
          </Card>

          {/* Differential Assessment Section */}
          <Card className="p-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">Differential Assessment</h2>
            <p className="text-sm text-gray-500 mb-4">
              Complete one or more of the following assessments if instructed by your primary assessment results.
            </p>
            <div>
              <p className="text-sm font-bold text-gray-500 mb-4">Differential Assessment 1: Grade I-II Pulley Injury vs. Flexor Tenosynovitis vs. Cyst vs. Nerve Issue vs. FDS Insertional Tendinopathy vs. Injury-Induced Pulley Thickening</p>
              <Button
                onClick={() => onSelectQuestionnaire('differential1')}
                className="w-full"
              >
                Start Differential Assessment 1
              </Button>
              {/* Add more differential assessment buttons as needed */}
            </div>
          </Card>

          {/* Severity Assessment Section */}
          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-4">Severity Assessment</h2>
            <p className="text-sm text-gray-500 mb-4">
              Complete the assessment that applies to your injury if instructed by a prior assessment or qualified professional.
            </p>
            <Button
              disabled={true} // Enable when severity assessments are implemented
              className="w-full"
            >
              Coming Soon
            </Button>
            </Card>
        </CardContent>
      </Card>
    </Layout>
  );
}

export default Dashboard; 
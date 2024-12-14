import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import AppHeader from '../AppHeader/AppHeader';
import Layout from '../Layout/Layout';

function Dashboard({ onSelectQuestionnaire }) {
  const headerRef = useRef(null);

  useEffect(() => {
    headerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <Layout>
      <Card>
        <AppHeader ref={headerRef} />
        <CardContent className="p-8">

          <h1 className="text-xl text-center mb-4">Welcome! Please watch this video to learn how to use this tool.</h1>
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe
              className="w-full rounded-lg"
              style={{ aspectRatio: '16/9' }}
              src={`https://www.youtube.com/embed/placeholderID`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Primary Assessment Section */}
          <Card className="p-4 mb-4">
            <h2 className="text-lg mb-4">1. Primary Assessment</h2>
            <p className="text-sm text-gray-500 mb-4">
              Start here unless otherwise instructed. This is the broad initial assessment that will either give you a result or  determine which additional assessments you need to complete.
            </p>
            <Button
              onClick={() => onSelectQuestionnaire('primary')}
              className="w-full"
            >
              Start Primary Assessment
            </Button>
          </Card>

          {/* Differential Assessment Section */}
          <Card className="p-4 mb-4">
            <h2 className="text-lg mb-4">2. Differential Assessment</h2>
            <p className="text-sm text-gray-500 mb-4">
              These are more specific assessments that help differentiate between injuries that can present with similar symptoms. Your scores from the primary assessment will carry over to these assessments as long as you don't close this tab or refresh the page between assessments.
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
            <h2 className="text-lg mb-4">3. Severity Assessment</h2>
            <p className="text-sm text-gray-500 mb-4">
              Typically the final assessment you'll need to take if instructed by a prior assessment or qualified professional. This will helps assess the severity of a specific injury, which is often essential for determining a recovery strategy. Scores from previous assessments will not carry over.
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
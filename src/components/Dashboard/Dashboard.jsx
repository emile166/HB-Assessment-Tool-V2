import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "../ui/card";
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
        <CardContent className="p-4 md:p-8">

          <h1 className="text-xl text-center mt-4 mb-4">Welcome! Please watch this video to learn how to use this tool.</h1>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              className="w-full rounded-lg"
              style={{ aspectRatio: '16/9' }}
              src={`https://www.youtube.com/embed/placeholderID`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <Card className="p-8 mb-12 bg-gray-100">
            <h2 className="text-xl font-bold text-red-500 mb-2 text-center underline">Rules:</h2>
            <ol className="list-decimal list-inside text-md">
              <li>Assess one injury at a time.</li>
              <li>Start with the primary assessment unless otherwise instructed.</li>
              <li>Only select answers that are relevant to the injury you’re assessing.</li>
              <li>Complete all applicable assessments in the one sitting (typically 20-40 minutes in total).</li>
              <li>Do not close the tab or refresh the page between assessments.</li>
              <li>Follow instructions carefully. Improper testing will lead to inaccurate results.</li>
            </ol>
          </Card>

          {/* Primary Assessment Section */}
          <Card className="p-4 mb-4">
            <h2 className="text-lg mb-4">1. Primary Assessment</h2>
            <p className="text-sm text-gray-500 mb-4">
              This is the broad initial assessment that will either give you a final result or determine which additional assessments you need to complete.
            </p>
            <Button
              onClick={() => onSelectQuestionnaire('primary')}
              className="w-full mx-auto min-h-[4rem] md:min-h-[2rem] p-6"
            >
              Start Primary Assessment (10-20 minutes)
            </Button>
          </Card>

          {/* Differential Assessment Section */}
          <Card className="p-4 mb-4">
            <h2 className="text-lg mb-4">2. Differential Assessment</h2>
            <p className="text-sm text-gray-500 mb-6">
              These are more specific assessments that help differentiate between injuries that can present with similar symptoms. Any differential assessment should be completed in the same session as the primary assessment (without closing or refreshing this page).
            </p>
            <div>

              <Button
                onClick={() => onSelectQuestionnaire('differential1')}
                className="w-full mx-auto min-h-[4rem] md:min-h-[2rem] p-6"
                variant="outline"
              >
                Differential Assessment 1 (10-20 minutes)
              </Button>
              <p className="text-xs text-gray-500 text-center px-8 mt-1 mb-6">Grade I-II Pulley Injury vs. Flexor Tenosynovitis vs. Cyst vs. Nerve Issue vs. FDS Insertional Tendinopathy vs. Injury-Induced Pulley Thickening</p>

              <Button
                onClick={() => onSelectQuestionnaire('differential2')}
                className="w-full mx-auto min-h-[4rem] md:min-h-[2rem] p-6"
                variant="outline"
              >
                Differential Assessment 2 (10 minutes)
              </Button>
              <p className="text-xs text-gray-500 text-center px-8 mt-1 mb-6">Joint Capsulitis vs. Collateral Ligament Injury vs. Lateral Band Syndrome</p>

              <Button
                onClick={() => onSelectQuestionnaire('differential3')}
                className="w-full mx-auto min-h-[4rem] md:min-h-[2rem] p-6"
                variant="outline"
              >
                Differential Assessment 3 (5 minutes)
              </Button>
              <p className="text-xs text-gray-500 text-center px-8 mt-1 mb-6">Grade III-IV Pulley Injury vs FDP Injury</p>

              <Button
                onClick={() => onSelectQuestionnaire('differential4')}
                className="w-full mx-auto min-h-[4rem] md:min-h-[2rem] p-6"
                variant="outline"
              >
                Differential Assessment 4 (5 minutes)
              </Button>
              <p className="text-xs text-gray-500 text-center px-8 mt-1 mb-2">Lumbrical Injury vs. FDP Injury</p>

            </div>
          </Card>

          {/* Severity Assessment Section */}
          <Card className="p-4">
            <h2 className="text-lg mb-4">3. Severity Assessment</h2>
            <p className="text-sm text-gray-500 mb-4">
              Typically the final assessment you'll need to take if instructed by a prior assessment or qualified professional. This will helps assess the severity of a specific injury, which is often essential for determining a recovery strategy.
            </p>
            <div className="space-y-4">

              <Button
                onClick={() => onSelectQuestionnaire('pulleySeverity')}
                className="w-full mx-auto min-h-[4rem] md:min-h-[2rem] p-6"
                variant="outline"
              >
                Pulley Injury (10-20 minutes)
              </Button>

              <Button
                onClick={() => onSelectQuestionnaire('jointCapsulitisSeverity')}
                className="w-full mx-auto min-h-[4rem] md:min-h-[2rem] p-6"
                variant="outline"
              >
                Joint Capsulitis (5 minutes)
              </Button>

              <Button
                onClick={() => onSelectQuestionnaire('fdpSeverity')}
                className="w-full mx-auto min-h-[4rem] md:min-h-[2rem] p-6"
                variant="outline"
              >
                FDP Injury (10 minutes)
              </Button>

            </div>
          </Card>
        </CardContent>
      </Card>
    </Layout>
  );
}

export default Dashboard; 
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import Layout from './components/Layout/Layout';
import Terms from './components/Terms/Terms';
import Questionnaire from './components/Questionnaire/Questionnaire';
import { useQuestionnaire } from './hooks/useQuestionnaire';
import AppHeader from './components/AppHeader/AppHeader';

function App() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const { questionnaires, selectedQuestionnaire, setSelectedQuestionnaire, error } = useQuestionnaire();

  const handleStart = () => {
    if (!acceptedTerms) {
      alert('You must accept the terms and conditions to proceed.');
      return;
    }

    if (questionnaires.length === 0) {
      alert('No questionnaires available.');
      return;
    }

    setSelectedQuestionnaire(questionnaires[0]);
  };

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <Layout>
      {selectedQuestionnaire ? (
        <Questionnaire
          questionnaire={selectedQuestionnaire}
          onBack={() => setSelectedQuestionnaire(null)}
        />
      ) : (
        <Card className="bg-secondary/50 rounded-lg p-6">
          <AppHeader />
          <CardContent>
            <Terms 
              accepted={acceptedTerms}
              onAcceptChange={setAcceptedTerms}
            />
            <Button
              onClick={handleStart}
              disabled={!acceptedTerms}
              className="mt-6"
            >
              Start Assessment
            </Button>
          </CardContent>
        </Card>
      )}
    </Layout>
  );
}

export default App;

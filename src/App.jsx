import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import Layout from './components/Layout/Layout';
import Terms from './components/Terms/Terms';
import PrimaryQuestionnaire from './components/Questionnaire/PrimaryQuestionnaire';
import DifferentialQuestionnaire1 from './components/Questionnaire/DifferentialQuestionnaire1';
import { useQuestionnaire } from './hooks/useQuestionnaire';
import AppHeader from './components/AppHeader/AppHeader';

function App() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState(null);
  const [primaryResults, setPrimaryResults] = useState(null);
  const { questionnaires, error } = useQuestionnaire();

  const handleQuestionnaireComplete = (results, type) => {
    if (type === 'primary') {
      setPrimaryResults(results);
    }
    setSelectedQuestionnaire(null);
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (selectedQuestionnaire) {
    if (selectedQuestionnaire.name === 'Primary Assessment') {
      return (
        <PrimaryQuestionnaire
          questionnaire={selectedQuestionnaire}
          onBack={() => setSelectedQuestionnaire(null)}
          onComplete={(results) => handleQuestionnaireComplete(results, 'primary')}
        />
      );
    } else if (selectedQuestionnaire.name === 'Differential Assessment 1') {
      return (
        <DifferentialQuestionnaire1
          questionnaire={selectedQuestionnaire}
          onBack={() => setSelectedQuestionnaire(null)}
          primaryResults={primaryResults}
        />
      );
    }
  }

  return (
    <Layout>
      <Card className="max-w-3xl mx-auto p-4 rounded-lg">
        <CardHeader>
          <AppHeader />
        </CardHeader>
        <CardContent>
          <Terms 
            accepted={acceptedTerms}
            onAcceptChange={setAcceptedTerms}
          />
          <div className="space-y-4 mt-6">
            <Button
              onClick={() => setSelectedQuestionnaire(questionnaires[0])}
              disabled={!acceptedTerms}
              className="w-full"
            >
              Start Primary Assessment
            </Button>
            <Button
              onClick={() => setSelectedQuestionnaire(questionnaires[1])}
              disabled={!acceptedTerms}
              className="w-full"
            >
              Start Differential Assessment 1
            </Button>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}

export default App;

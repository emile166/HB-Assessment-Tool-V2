import React, { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Terms from './components/Terms/Terms';
import Dashboard from './components/Dashboard/Dashboard';
import PrimaryQuestionnaire from './components/Questionnaire/PrimaryQuestionnaire';
import DifferentialQuestionnaire1 from './components/Questionnaire/DifferentialQuestionnaire1';
import AppHeader from './components/AppHeader/AppHeader';
import { useQuestionnaire } from './hooks/useQuestionnaire';
import { Card, CardHeader, CardContent } from "./components/ui/card";

function App() {
  const [termsChecked, setTermsChecked] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(() => {
    return sessionStorage.getItem('acceptedTerms') === 'true';
  });
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState(null);
  const [primaryResults, setPrimaryResults] = useState(null);
  const { questionnaires, error } = useQuestionnaire();

  const handleTermsAccept = (checked) => {
    setTermsChecked(checked);
  };

  const handleTermsContinue = () => {
    sessionStorage.setItem('acceptedTerms', 'true');
    setAcceptedTerms(true);
  };

  const handleQuestionnaireComplete = (results, type) => {
    if (type === 'primary') {
      setPrimaryResults(results);
    }
    setSelectedQuestionnaire(null);
  };

  const handleSelectQuestionnaire = (type) => {
    if (type === 'primary') {
      setSelectedQuestionnaire(questionnaires[0]);
    } else if (type === 'differential1') {
      setSelectedQuestionnaire(questionnaires[1]);
    }
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!acceptedTerms) {
    return (
      <Layout>
        <Card>
          <AppHeader />
          <CardContent className="mt-4">
            <Terms
              accepted={termsChecked}
              onAcceptChange={handleTermsAccept}
              onContinue={handleTermsContinue}
            />
          </CardContent>
        </Card>
      </Layout>
    );
  }

  if (selectedQuestionnaire) {
    if (selectedQuestionnaire.name === 'Primary Assessment') {
      return (
        <Layout>
          <PrimaryQuestionnaire
            questionnaire={selectedQuestionnaire}
            onBack={() => setSelectedQuestionnaire(null)}
            onComplete={(results) => handleQuestionnaireComplete(results, 'primary')}
          />
        </Layout>
      );
    } else if (selectedQuestionnaire.name === 'Differential Assessment 1') {
      return (
        <Layout>
          <DifferentialQuestionnaire1
            questionnaire={selectedQuestionnaire}
            onBack={() => setSelectedQuestionnaire(null)}
            primaryResults={primaryResults}
          />
        </Layout>
      );
    }
  }

  return (
    <Layout>
      <Dashboard onSelectQuestionnaire={handleSelectQuestionnaire} />
    </Layout>
  );
}

export default App;

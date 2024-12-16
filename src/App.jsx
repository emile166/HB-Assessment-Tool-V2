import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import Terms from './components/Terms/Terms';
import Dashboard from './components/Dashboard/Dashboard';
import PrimaryQuestionnaire from './components/Questionnaire/PrimaryQuestionnaire';
import Differential1Questionnaire from './components/Questionnaire/Differential1Questionnaire';
import Differential2Questionnaire from './components/Questionnaire/Differential2Questionnaire';
import Differential3Questionnaire from './components/Questionnaire/Differential3Questionnaire';
import Differential4Questionnaire from './components/Questionnaire/Differential4Questionnaire';
import PulleySeverityQuestionnaire from './components/Questionnaire/PulleySeverityQuestionnaire';
import AppHeader from './components/AppHeader/AppHeader';
import { useQuestionnaire } from './hooks/useQuestionnaire';
import { Card, CardContent } from "./components/ui/card";

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
      console.log("Saving primary results:", results);
      setPrimaryResults(results);
    }
  };

  const handleSelectQuestionnaire = (type) => {
    if (type === 'primary') {
      setSelectedQuestionnaire(questionnaires[0]);
    } else if (type === 'differential1') {
      setSelectedQuestionnaire(questionnaires[1]);
    } else if (type === 'differential2') {
      setSelectedQuestionnaire(questionnaires[2]);
    } else if (type === 'differential3') {
      setSelectedQuestionnaire(questionnaires[3]);
    } else if (type === 'differential4') {
      setSelectedQuestionnaire(questionnaires[4]);
    } else if (type === 'pulleySeverity') {
      setSelectedQuestionnaire(questionnaires[5]);
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
          <Differential1Questionnaire
            questionnaire={selectedQuestionnaire}
            onBack={() => setSelectedQuestionnaire(null)}
            primaryResults={primaryResults}
          />
        </Layout>
      );
    } else if (selectedQuestionnaire.name === 'Differential Assessment 2') {
      return (
        <Layout>
          <Differential2Questionnaire
            questionnaire={selectedQuestionnaire}
            onBack={() => setSelectedQuestionnaire(null)}
            primaryResults={primaryResults}
          />
        </Layout>
      );
    } else if (selectedQuestionnaire.name === 'Differential Assessment 3') {
      return (
        <Layout>
          <Differential3Questionnaire
            questionnaire={selectedQuestionnaire}
            onBack={() => setSelectedQuestionnaire(null)}
            primaryResults={primaryResults}
          />
        </Layout>
      );
    } else if (selectedQuestionnaire.name === 'Differential Assessment 4') {
      return (
        <Layout>
          <Differential4Questionnaire
            questionnaire={selectedQuestionnaire}
            onBack={() => setSelectedQuestionnaire(null)}
            primaryResults={primaryResults}
          />
        </Layout>
      );
    } else if (selectedQuestionnaire.name === 'Pulley Injury Severity Assessment') {
      return (
        <Layout>
          <PulleySeverityQuestionnaire
            questionnaire={selectedQuestionnaire}
            onBack={() => setSelectedQuestionnaire(null)}
            onComplete={(results) => handleQuestionnaireComplete(results, 'pulleySeverity')}
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

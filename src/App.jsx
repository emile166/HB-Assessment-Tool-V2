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
import JointCapsulitisSeverityQuestionnaire from './components/Questionnaire/JointCapsulitisSeverityQuestionnaire';
import FDPSeverityQuestionnaire from './components/Questionnaire/FDPSeverityQuestionnaire';
import LumbricalSeverityQuestionnaire from './components/Questionnaire/LumbricalSeverityQuestionnaire';
import PulleyThickeningSeverityQuestionnaire from './components/Questionnaire/pulleyThickeningSeverityQuestionnaire';
import CollateralLigamentSeverityQuestionnaire from './components/Questionnaire/CollateralLigamentSeverityQuestionnaire';
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
    const questionnaireMap = {
      primary: questionnaires.find(q => q.name === 'Primary Assessment'),
      differential1: questionnaires.find(q => q.name === 'Differential Assessment 1'),
      differential2: questionnaires.find(q => q.name === 'Differential Assessment 2'),
      differential3: questionnaires.find(q => q.name === 'Differential Assessment 3'),
      differential4: questionnaires.find(q => q.name === 'Differential Assessment 4'),
      pulleySeverity: questionnaires.find(q => q.name === 'Pulley Injury Severity Assessment'),
      jointCapsulitisSeverity: questionnaires.find(q => q.name === 'Joint Capsulitis Severity Assessment'),
      fdpSeverity: questionnaires.find(q => q.name === 'FDP Injury Severity Assessment'),
      lumbricalSeverity: questionnaires.find(q => q.name === 'Lumbrical Injury Severity Assessment'),
      pulleyThickeningSeverity: questionnaires.find(q => q.name === 'Pulley Thickening Severity Assessment'),
      collateralLigamentSeverity: questionnaires.find(q => q.name === 'Collateral Ligament Injury Severity Assessment'),
    };

    setSelectedQuestionnaire(questionnaireMap[type] || null);
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
    } else if (selectedQuestionnaire.name === 'Joint Capsulitis Severity Assessment') {
      return (
        <Layout>
          <JointCapsulitisSeverityQuestionnaire
            questionnaire={selectedQuestionnaire}
            onBack={() => setSelectedQuestionnaire(null)}
            onComplete={(results) => handleQuestionnaireComplete(results, 'jointCapsulitisSeverity')}
          />
        </Layout>
      );
    } else if (selectedQuestionnaire.name === 'FDP Injury Severity Assessment') {
      return (
        <Layout>
          <FDPSeverityQuestionnaire
            questionnaire={selectedQuestionnaire}
            onBack={() => setSelectedQuestionnaire(null)}
            onComplete={(results) => handleQuestionnaireComplete(results, 'fdpSeverity')}
          />
        </Layout>
      );
    } else if (selectedQuestionnaire.name === 'Lumbrical Injury Severity Assessment') {
      return (
        <Layout>
          <LumbricalSeverityQuestionnaire
            questionnaire={selectedQuestionnaire}
            onBack={() => setSelectedQuestionnaire(null)}
            onComplete={(results) => handleQuestionnaireComplete(results, 'lumbricalSeverity')}
          />
        </Layout>
      );
    } else if (selectedQuestionnaire.name === 'Pulley Thickening Severity Assessment') {
      return (
        <Layout>
          <PulleyThickeningSeverityQuestionnaire
            questionnaire={selectedQuestionnaire}
            onBack={() => setSelectedQuestionnaire(null)}
            onComplete={(results) => handleQuestionnaireComplete(results, 'pulleyThickeningSeverity')}
          />
        </Layout>
      );
    } else if (selectedQuestionnaire.name === 'Collateral Ligament Injury Severity Assessment') {
      return (
        <Layout>
          <CollateralLigamentSeverityQuestionnaire
            questionnaire={selectedQuestionnaire}
            onBack={() => setSelectedQuestionnaire(null)}
            onComplete={(results) => handleQuestionnaireComplete(results, 'collateralLigamentSeverity')}
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

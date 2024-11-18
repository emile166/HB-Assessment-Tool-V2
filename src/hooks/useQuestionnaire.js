import { useState } from 'react';
import { parseCSV } from '../utils/csvParser';
import { PRIMARY_QUESTIONNAIRE_DATA } from '../constants/primary_questionnaire_data';
import { DIFFERENTIAL_ASSESSMENT_1_DATA } from '../constants/differential-1-data';

export function useQuestionnaire() {
  const [questionnaires, setQuestionnaires] = useState(() => {
    const primaryQuestionnaire = parseCSV(PRIMARY_QUESTIONNAIRE_DATA);
    const differentialQuestionnaire = parseCSV(DIFFERENTIAL_ASSESSMENT_1_DATA);
    const allQuestionnaires = [...primaryQuestionnaire, ...differentialQuestionnaire];
    console.log('Parsed questionnaires:', allQuestionnaires);
    return allQuestionnaires;
  });
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState(null);
  const [error, setError] = useState(null);

  return {
    questionnaires,
    selectedQuestionnaire,
    setSelectedQuestionnaire,
    error
  };
} 
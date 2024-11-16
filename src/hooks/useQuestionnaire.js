import { useState } from 'react';
import { parseCSV } from '../utils/csvParser';
import { PRIMARY_QUESTIONNAIRE_DATA } from '../constants/primary_questionnaire_data';
console.log('Raw questionnaire data:', PRIMARY_QUESTIONNAIRE_DATA);

export function useQuestionnaire() {
  const [questionnaires, setQuestionnaires] = useState(() => {
    const parsed = parseCSV(PRIMARY_QUESTIONNAIRE_DATA);
    console.log('Parsed questionnaires:', parsed);
    return parsed;
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
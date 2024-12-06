import { useState } from 'react';
import { PRIMARY_DATA } from '../questionnaireData/primaryData';
import { DIFFERENTIAL_ASSESSMENT_1_DATA } from '../constants/differential-1-data';
import { parseCSV } from '../utils/csvParser';

export function useQuestionnaire() {
  const [questionnaires, setQuestionnaires] = useState(() => {
    // Transform the primary data into the expected format
    const primaryQuestionnaire = {
      name: "Primary Assessment",
      questions: Object.values(PRIMARY_DATA).map(question => ({
        ...question,
        question: question.text,
        type: question.multiple ? 'select all that apply' : 'select one answer',
        answers: question.answers,
        conditions: question.conditions || []
      }))
    };

    // Keep the differential questionnaire as is for now
    const differentialQuestionnaire = parseCSV(DIFFERENTIAL_ASSESSMENT_1_DATA);
    
    const allQuestionnaires = [primaryQuestionnaire, ...differentialQuestionnaire];
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
import { useState } from 'react';
import { PRIMARY_DATA } from '../questionnaireData/primaryData';
import { DIFFERENTIAL_1_DATA } from '../questionnaireData/differential1Data';

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
        photos: question.photos || [],
        video: question.video || '',
        conditions: question.conditions || []
      }))
    };

    // Transform the differential data into the expected format
    const differential1Questionnaire = {
      name: "Differential Assessment 1",
      questions: Object.values(DIFFERENTIAL_1_DATA).map(question => ({
        ...question,
        question: question.text,
        type: question.multiple ? 'select all that apply' : 'select one answer',
        answers: question.answers,
        photos: question.photos || [],
        video: question.video || '',
        conditions: question.conditions || []
      }))
    };
    
    return [primaryQuestionnaire, differential1Questionnaire];
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
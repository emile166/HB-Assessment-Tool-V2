import { useState } from 'react';
import { PRIMARY_DATA } from '../questionnaireData/primaryData';
import { DIFFERENTIAL_1_DATA } from '../questionnaireData/differential1Data';
import { DIFFERENTIAL_2_DATA } from '../questionnaireData/differential2Data';
import { DIFFERENTIAL_3_DATA } from '../questionnaireData/differential3Data';
import { DIFFERENTIAL_4_DATA } from '../questionnaireData/differential4Data';
import { PULLEY_SEVERITY_DATA } from '../questionnaireData/pulleySeverityData';
import { JOINT_CAPSULITIS_SEVERITY_DATA } from '../questionnaireData/jointCapsulitisSeverityData';
import { FDP_SEVERITY_DATA } from '../questionnaireData/fdpSeverityData';
import { LUMBRICAL_SEVERITY_DATA } from '../questionnaireData/lumbricalSeverityData';
import { PULLEY_THICKENING_SEVERITY_DATA } from '../questionnaireData/pulleyThickeningSeverityData';
import { COLLATERAL_LIGAMENT_SEVERITY_DATA } from '../questionnaireData/collateralLigamentSeverityData';
import { LATERAL_BAND_SEVERITY_DATA } from '../questionnaireData/lateralBandSeverityData';


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

    const differential2Questionnaire = {
      name: "Differential Assessment 2",
      questions: Object.values(DIFFERENTIAL_2_DATA).map(question => ({
        ...question,
        question: question.text,
        type: question.multiple ? 'select all that apply' : 'select one answer',
        answers: question.answers,
        photos: question.photos || [],
        video: question.video || '',
        conditions: question.conditions || []
      }))
    };

    const differential3Questionnaire = {
      name: "Differential Assessment 3",
      questions: Object.values(DIFFERENTIAL_3_DATA).map(question => ({
        ...question,
        question: question.text,
        type: question.multiple ? 'select all that apply' : 'select one answer',
        answers: question.answers,
        photos: question.photos || [],
        video: question.video || '',
        conditions: question.conditions || []
      }))
    };

    const differential4Questionnaire = {
      name: "Differential Assessment 4",
      questions: Object.values(DIFFERENTIAL_4_DATA).map(question => ({
        ...question,
        question: question.text,
        type: question.multiple ? 'select all that apply' : 'select one answer',
        answers: question.answers,
        photos: question.photos || [],
        video: question.video || '',
        conditions: question.conditions || []
      }))
    };

    const pulleySeverityQuestionnaire = {
      name: "Pulley Injury Severity Assessment",
      questions: Object.values(PULLEY_SEVERITY_DATA).map(question => ({
        ...question,
        question: question.text,
        type: question.multiple ? 'select all that apply' : 'select one answer',
        answers: question.answers,
        photos: question.photos || [],
        video: question.video || '',
        conditions: question.conditions || []
      }))
    };

    const jointCapsulitisSeverityQuestionnaire = {
      name: "Joint Capsulitis Severity Assessment",
      questions: Object.values(JOINT_CAPSULITIS_SEVERITY_DATA).map(question => ({
        ...question,
        question: question.text,
        type: question.multiple ? 'select all that apply' : 'select one answer',
        answers: question.answers,
        photos: question.photos || [],
        video: question.video || '',
        conditions: question.conditions || []
      }))
    };

    const fdpSeverityQuestionnaire = {
      name: "FDP Injury Severity Assessment",
      questions: Object.values(FDP_SEVERITY_DATA).map(question => ({
        ...question,
        question: question.text,
        type: question.multiple ? 'select all that apply' : 'select one answer',
        answers: question.answers,
        photos: question.photos || [],
        video: question.video || '',
        conditions: question.conditions || []
      }))
    };

    const lumbricalSeverityQuestionnaire = {
      name: "Lumbrical Injury Severity Assessment",
      questions: Object.values(LUMBRICAL_SEVERITY_DATA).map(question => ({
        ...question,
        question: question.text,
        type: question.multiple ? 'select all that apply' : 'select one answer',
        answers: question.answers,
        photos: question.photos || [],
        video: question.video || '',
        conditions: question.conditions || []
      }))
    };

    const pulleyThickeningSeverityQuestionnaire = {
      name: "Pulley Thickening Severity Assessment",
      questions: Object.values(PULLEY_THICKENING_SEVERITY_DATA).map(question => ({
        ...question,
        question: question.text,
        type: question.multiple ? 'select all that apply' : 'select one answer',
        answers: question.answers,
        photos: question.photos || [],
        video: question.video || '',
        conditions: question.conditions || []
      }))
    };

    const collateralLigamentSeverityQuestionnaire = {
      name: "Collateral Ligament Injury Severity Assessment",
      questions: Object.values(COLLATERAL_LIGAMENT_SEVERITY_DATA).map(question => ({
        ...question,
        question: question.text,
        type: question.multiple ? 'select all that apply' : 'select one answer',
        answers: question.answers,
        photos: question.photos || [],
        video: question.video || '',
        conditions: question.conditions || []
      }))
    };

    const lateralBandSeverityQuestionnaire = {
      name: "Lateral Band Syndrome Severity Assessment",
      questions: Object.values(LATERAL_BAND_SEVERITY_DATA).map(question => ({
        ...question,
        question: question.text,
        type: question.multiple ? 'select all that apply' : 'select one answer',
        answers: question.answers,
        photos: question.photos || [],
        video: question.video || '',
        conditions: question.conditions || []
      }))
    };

    return [
      primaryQuestionnaire,
      differential1Questionnaire,
      differential2Questionnaire,
      differential3Questionnaire,
      differential4Questionnaire,
      pulleySeverityQuestionnaire,
      jointCapsulitisSeverityQuestionnaire,
      fdpSeverityQuestionnaire,
      lumbricalSeverityQuestionnaire,
      pulleyThickeningSeverityQuestionnaire,
      collateralLigamentSeverityQuestionnaire,
      lateralBandSeverityQuestionnaire
    ];
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
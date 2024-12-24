export const PULLEY_THICKENING_SEVERITY_DATA = {

    palpationTest: {
        id: "palpationTest",
        text: "Do you have discomfort/pain with palpation over the affected area?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "palpationTestAnswer1", text: "Discomfort/pain starts with minimal (1-2 out of 10) pressure", scores: { A: 0, B: 2, C: 3, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpationTestAnswer2", text: "Discomfort/pain starts with mild (3-4 out of 10) pressure", scores: { A: 0, B: 1, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpationTestAnswer3", text: "Discomfort/pain starts with moderate (5-7 out of 10) pressure", scores: { A: 0, B: 2, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpationTestAnswer4", text: "Discomfort/pain starts with heavy (8-10 out of 10) pressure", scores: { A: 2, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpationTestAnswer5", text: "No discomfort/pain even with heavy (8-10 out of 10) pressure", scores: { A: 3, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    tissueLoading: {
        id: "tissueLoading",
        text: "What are your tissue loading test results?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "tissueLoadingAnswer1", text: "Discomfort/pain starts with minimal (1-2 out of 10) pressure", scores: { A: 0, B: 2, C: 3, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingAnswer2", text: "Discomfort/pain starts with mild (3-4 out of 10) pressure", scores: { A: 0, B: 1, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingAnswer3", text: "Discomfort/pain starts with moderate (5-7 out of 10) pressure", scores: { A: 0, B: 2, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingAnswer4", text: "Discomfort/pain starts with heavy (8-10 out of 10) pressure", scores: { A: 2, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingAnswer5", text: "No discomfort/pain even with heavy (8-10 out of 10) pressure", scores: { A: 3, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    impactOnStrength: {
        id: "impactOnStrength",
        text: "To what extent do you feel your injury impacts your strength or climbing performance?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "impactOnStrengthAnswer1", text: "Significant impact (approximately 51-100% perceived reduction)", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "impactOnStrengthAnswer2", text: "Moderate impact (approximately 25-50% perceived reduction)", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "impactOnStrengthAnswer3", text: "Mild impact (less than 25% perceived reduction)", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    symptomProgression: {
        id: "symptomProgression",
        text: "What is your symptom progression like?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "symptomProgressionAnswer1", text: "Improving", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "symptomProgressionAnswer2", text: "Worsening", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "symptomProgressionAnswer3", text: "Plateauing", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

}
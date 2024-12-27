export const PULLEY_THICKENING_SEVERITY_DATA = {

    palpationTest: {
        id: "palpationTest",
        text: "Do you have discomfort/pain with palpation over the affected area?",
        video: "https://www.youtube.com/embed/bH2yP58aqpA?si=YY0R2wu3BMF-vb6d&rel=0",
        photos: [],
        answers: [
            { id: "palpationTestAnswer1", text: "Discomfort/pain starts with minimal (1-2 out of 10) pressure", scores: { A: -1, B: 1, C: 3, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpationTestAnswer2", text: "Discomfort/pain starts with mild (3-4 out of 10) pressure", scores: { A: 0, B: 1, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpationTestAnswer3", text: "Discomfort/pain starts with moderate (5-7 out of 10) pressure", scores: { A: 0, B: 2, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpationTestAnswer4", text: "Discomfort/pain starts with heavy (8-10 out of 10) pressure", scores: { A: 2, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpationTestAnswer5", text: "No discomfort/pain even with heavy (8-10 out of 10) pressure", scores: { A: 3, B: 1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    tissueLoading: {
        id: "tissueLoading",
        text: "What are your tissue loading test results?",
        video: "https://www.youtube.com/embed/k2bWLsZJ8ig?si=Hx3WXKiIl6oFgHn9&rel=0",
        photos: [],
        answers: [
            { id: "tissueLoadingAnswer1", text: "Discomfort/pain starts with minimal (1-2 out of 10) pressure", scores: { A: -1, B: 1, C: 3, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingAnswer2", text: "Discomfort/pain starts with mild (3-4 out of 10) pressure", scores: { A: 0, B: 1, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingAnswer3", text: "Discomfort/pain starts with moderate (5-7 out of 10) pressure", scores: { A: 0, B: 2, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingAnswer4", text: "Discomfort/pain starts with heavy (8-10 out of 10) pressure", scores: { A: 2, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingAnswer5", text: "No discomfort/pain even with heavy (8-10 out of 10) pressure", scores: { A: 3, B: 1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    impactOnStrength: {
        id: "impactOnStrength",
        text: "To what extent do you feel your injury impacts your strength or climbing performance?",
        video: "",
        photos: [],
        answers: [
            { id: "impactOnStrengthAnswer1", text: "Severe impact - I can no longer climb or train anywhere near my baseline due to pain.", scores: { A: -1, B: 0, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "impactOnStrengthAnswer2", text: "Large impact - I've had to reduce my climbing and/or training intensity a fair amount due to the pain.", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "impactOnStrengthAnswer3", text: "Moderate impact - It definitely bothers me and probably reduces peak performance a bit, but I've been grinding through it.", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "impactOnStrengthAnswer4", text: "Mild impact - It's definitely annoying but not enough to hugely impact me.", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "impactOnStrengthAnswer5", text: "Minimal - It barely affects me, if at all.", scores: { A: 2, B: 0, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    symptomProgression: {
        id: "symptomProgression",
        text: "What is your symptom progression like?",
        video: "",
        photos: [],
        answers: [
            { id: "symptomProgressionAnswer1", text: "Improving", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "symptomProgressionAnswer2", text: "Worsening", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "symptomProgressionAnswer3", text: "Plateauing", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

}
export const LUMBRICAL_SEVERITY_DATA = {

    injuryDiscoloration: {
        id: "injuryDiscoloration",
        text: "Has there been any discoloration associated with the injury?",
        video: "placeholderID",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/e419fbca-9fa8-483d-8bfd-4128edc05733/Lumbrical+severity+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg"],
        answers: [
            { id: "injuryDiscolorationAnswer1", text: "1. Yes, in my palm", scores: { A: -100, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer2", text: "2. Yes, at the base of my finger", scores: { A: -100, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer3", text: "No", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer4", text: "None of these options apply to me, or I’m unsure", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    aromPositionOne: {
        id: "aromPositionOne",
        text: "What are your active range of motion test results in position one?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "aromPositionOneAnswer1", text: "Discomfort/pain in my palm when getting into the test position", scores: { A: -1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromPositionOneAnswer2", text: "Discomfort/pain in my palm starts with minimal (1-2 out of 10) force", scores: { A: -1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromPositionOneAnswer3", text: "Discomfort/pain in my palm starts with mild (3-4 out of 10) force", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromPositionOneAnswer4", text: "Discomfort/pain in my palm starts with moderate (5-7 out of 10) force", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromPositionOneAnswer5", text: "Discomfort/pain in my palm starts with heavy (8-10 out of 10) force", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromPositionOneAnswer6", text: "No discomfort/pain", scores: { A: 1, B: 1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    promFourFingers: {
        id: "promFourFingers",
        text: "What are your passive range of motion test results with four fingers?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "promFourFingersAnswer1", text: "Normal range of motion and no discomfort/pain associated with my injury", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "promFourFingersAnswer2", text: "Normal range of motion but some discomfort/pain associated with my injury", scores: { A: 1, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "promFourFingersAnswer3", text: "Limited range of motion and significant discomfort/pain associated with my injury", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    promIsolatedFingers: {
        id: "promIsolatedFingers",
        text: "What are your passive range of motion test results with isolated fingers?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "promIsolatedFingersAnswer1", text: "Normal range of motion and no discomfort/pain associated with my injury", scores: { A: 1, B: 0, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "promIsolatedFingersAnswer2", text: "Normal range of motion but some discomfort/pain associated with my injury", scores: { A: 0, B: 1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "promIsolatedFingersAnswer3", text: "Limited range of motion and significant discomfort/pain associated with my injury", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    injuryMechanism: {
        id: "injuryMechanism",
        text: "Did your injury occur while you were in a two finger pocket or mono?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "injuryMechanismAnswer1", text: "Yes", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryMechanismAnswer2", text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    tissueLoadingIsolatedDrag: {
        id: "tissueLoadingIsolatedDrag",
        text: "What are your tissue loading test results while the affected finger(s) are in a drag position and the adjacent fingers are curled?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "tissueLoadingIsolatedDragAnswer1", text: "Discomfort/pain starts when getting into the test position", scores: { A: -1, B: 1, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingIsolatedDragAnswer2", text: "Discomfort/pain starts with minimal (1-2 out of 10) force", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingIsolatedDragAnswer3", text: "Discomfort/pain starts with mild (3-4 out of 10) force", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingIsolatedDragAnswer4", text: "Discomfort/pain starts with moderate (5-7 out of 10) force", scores: { A: 1, B: 1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingIsolatedDragAnswer5", text: "Discomfort/pain starts with heavy (8-10 out of 10) force", scores: { A: 1, B: -1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    }

}
export const VOLAR_PLATE_SEVERITY_DATA = {

    injuryType: {
        id: "injuryType",
        text: "What type of injury did you sustain?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "injuryTypeAnswer1", text: "Traumatic", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryTypeAnswer2", text: "Non-traumatic acute", scores: { A: 1, B: 1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryTypeAnswer3", text: "None of these options apply to me, or I’m unsure", scores: { A: 1, B: 0, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    obviousSound: {
        id: "obviousSound",
        text: "Was there an obvious sound associated with the onset of the injury?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "obviousSoundAnswer1", text: "Yes, there was a loud audible pop (loud enough for bystanders to hear)", scores: { A: -1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "obviousSoundAnswer2", text: "Yes, there was a faint sound (not loud enough for bystanders to hear)", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "obviousSoundAnswer3", text: "No, there was no sound associated with the injury", scores: { A: 1, B: 1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "obviousSoundAnswer4", text: "I had headphones on and no one was around so I don’t know", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    injuryDiscoloration: {
        id: "injuryDiscoloration",
        text: "Has there been any discoloration associated with the injury?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "injuryDiscolorationAnswer1", text: "Yes, on the palm side of the joint", scores: { A: -1, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer2", text: "No", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    jointHyperextension: {
        id: "jointHyperextension",
        text: "What are your joint hyperextension test results?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "jointHyperextensionAnswer1", text: "Discomfort/pain on the palm side of my joint but no increase in mobility", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "jointHyperextensionAnswer2", text: "Discomfort/pain on the palm side of my joint and more mobility than usual", scores: { A: -1, B: 0, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "jointHyperextensionAnswer3", text: "No discomfort/pain and no increase in mobilit", scores: { A: 1, B: -1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "jointHyperextensionAnswer4", text: "No discomfort/pain but more mobility than usual", scores: { A: -1, B: 0, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: true,
        conditions: []
    },

    tissueLoadingHalfCrimp: {
        id: "tissueLoadingHalfCrimp",
        text: "What are your tissue loading test results while in a half crimp position?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "tissueLoadingHalfCrimpAnswer1", text: "No discomfort/pain associated with my injury", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer2", text: "Discomfort/pain in the palm side of the affected joint and some joint instability", scores: { A: -1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer3", text: "Discomfort/pain in the palm side of the affected joint", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    tissueLoadingFullCrimp: {
        id: "tissueLoadingFullCrimp",
        text: "What are your tissue loading test results while in a full crimp position?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "tissueLoadingFullCrimpAnswer1", text: "No discomfort/pain associated with my injury", scores: { A: 1, B: -1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingFullCrimpAnswer2", text: "Discomfort/pain in the palm side of the affected joint and some joint instability", scores: { A: -1, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingFullCrimpAnswer3", text: "Discomfort/pain in the palm side of the affected joint", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: [
            {
                if: {
                    questionId: "tissueLoadingHalfCrimp",
                    selectedAnswers: ["tissueLoadingHalfCrimpAnswer2", "tissueLoadingHalfCrimpAnswer3"],
                    match: "any"
                },
                action: "skip"
            }
        ]
    }

}
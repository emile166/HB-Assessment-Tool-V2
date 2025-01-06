export const VOLAR_PLATE_SEVERITY_DATA = {

    injuryType: {
        id: "injuryType",
        text: "What type of injury did you sustain?",
        video: "",
        photos: [],
        answers: [
            { id: "injuryTypeAnswer1", text: "Traumatic (occurred as a result of obvious sudden trauma – typically an unexpected overload of the tissue in a single obvious event/moment)", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryTypeAnswer2", text: "Non-traumatic acute (no obvious traumatic event but clearly a result of OVERDOING IT on a SINGLE climb or session)", scores: { A: 1, B: 1, C: -100, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryTypeAnswer3", text: "None of these options apply to me, or I’m unsure", scores: { A: 1, B: 0, C: -100, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    obviousSound: {
        id: "obviousSound",
        text: "Was there an obvious sound associated with the onset of the injury?",
        video: "https://www.youtube.com/embed/Dtlqa1LMW7w?si=gh-S3Q68KNLT33vt&rel=0",
        photos: [],
        answers: [
            { id: "obviousSoundAnswer1", text: "Yes, there was a loud audible pop (loud enough for bystanders to hear)", scores: { A: -1, B: 0, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "obviousSoundAnswer2", text: "Yes, there was a faint sound (not loud enough for bystanders to hear)", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "obviousSoundAnswer3", text: "No, there was no sound associated with the injury", scores: { A: 1, B: 1, C: -2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "obviousSoundAnswer4", text: "I had headphones on and no one was around so I don’t know", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    injuryDiscoloration: {
        id: "injuryDiscoloration",
        text: "Has there been any discoloration associated with the injury?",
        video: "https://www.youtube.com/embed/ZeESVjF9MDk?si=-2G55ZmUuzK6qn_7&rel=0",
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
        text: "How does the joint hyperextension test affect your injury?",
        video: "https://www.youtube.com/embed/wkYO2K7qjHM?si=Tzo5S1Jt0P6FvU3r&rel=0",
        photos: [],
        answers: [
            { id: "jointHyperextensionAnswer1", text: "Discomfort/pain on the palm side of my joint but no increase in mobility", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "jointHyperextensionAnswer2", text: "Discomfort/pain on the palm side of my joint and more mobility than usual", scores: { A: -1, B: 0, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "jointHyperextensionAnswer3", text: "No discomfort/pain and no increase in mobility", scores: { A: 1, B: -1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "jointHyperextensionAnswer4", text: "No discomfort/pain but more mobility than usual", scores: { A: -1, B: 0, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    tissueLoadingHalfCrimp: {
        id: "tissueLoadingHalfCrimp",
        text: "How does the half crimp tissue loading test affect your injury?",
        video: "https://www.youtube.com/embed/c3kQq6uD-sA?si=fDWyj46MzdboqXYq&rel=0",
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
        text: "How does the full crimp tissue loading test affect your injury??",
        video: "https://www.youtube.com/embed/VgzFxUQxSPM?si=Wt0_UFu2hEBZ_Nt7&rel=0",
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
    },

    fullCrimpPain: {
        id: "fullCrimpPain",
        text: "How much force was required to elicit pain during the full crimp test?",
        video: "",
        photos: [],
        answers: [
            { id: "fullCrimpPainAnswer1", text: "Discomfort/pain starts with minimal to mild (1-4 out of 10) force", scores: { A: 0, B: 2, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "fullCrimpPainAnswer2", text: "Discomfort/pain starts with moderate (5-7 out of 10) force", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "fullCrimpPainAnswer3", text: "Discomfort/pain starts with heavy (8-10 out of 10) force", scores: { A: 2, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
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
            },
            {
                if: {
                    questionId: "tissueLoadingFullCrimp",
                    selectedAnswers: ["tissueLoadingFullCrimpAnswer1"],
                    match: "any"
                },
                action: "skip"
            }
        ]
    },

}
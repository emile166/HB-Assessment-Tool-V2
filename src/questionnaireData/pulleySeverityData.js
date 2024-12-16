export const PULLEY_SEVERITY_DATA = {
    injuryType: {
        id: "injuryType",
        text: "What type of injury did you sustain?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "injuryTypeAnswer1", text: "Traumatic", scores: { A: -1, B: 1, C: 1, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryTypeAnswer2", text: "Non-traumatic acute", scores: { A: 1, B: 1, C: -1, D: -2, E: -3, F: 0, G: 0, H: 0, I: -1, J: -1, K: -3, L: 0, M: 0, N: 0 } },
            { id: "injuryTypeAnswer3", text: "None of these options apply to me, or I’m unsure", scores: { A: 1, B: 0, C: -1, D: -1, E: -1, F: 0, G: 0, H: 0, I: -1, J: -1, K: -1, L: 0, M: 0, N: 0 } }
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
            { id: "obviousSoundAnswer1", text: "Yes, there was a loud audible pop (loud enough for bystanders to hear)", scores: { A: 0, B: 0, C: 1, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "obviousSoundAnswer2", text: "Yes, there was a faint sound (not loud enough for bystanders to hear)", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "obviousSoundAnswer3", text: "No, there was no sound associated with the injury", scores: { A: 1, B: 1, C: -100, D: -100, E: -100, F: 0, G: 0, H: 0, I: -100, J: -100, K: -100, L: 0, M: 0, N: 0 } },
            { id: "obviousSoundAnswer4", text: "I don’t know because I couldn’t hear (e.g. wearing headphones, loud gym, etc.) and no one else could tell me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    visibleBowstringing: {
        id: "visibleBowstringing",
        text: "Is there visually obvious bowstringing?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "visibleBowstringingAnswer1", text: "Yes", scores: { A: -100, B: -100, C: 0, D: 0, E: 3, F: 0, G: 0, H: 0, I: 0, J: 0, K: 3, L: 0, M: 0, N: 0 } },
            { id: "visibleBowstringingAnswer2", text: "No or unsure", scores: { A: 1, B: 1, C: 1, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    palpableBowstringing: {
        id: "palpableBowstringing",
        text: "Can you feel obvious bowstringing with palpation?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "palpableBowstringingAnswer1", text: "Yes, over the A2 and A3 region", scores: { A: 0, B: 0, C: 1, D: 1, E: 0, F: 1, G: 1, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpableBowstringingAnswer2", text: "Yes, over the A3 and A4 region", scores: { A: 0, B: 0, C: 1, D: 1, E: 0, F: 0, G: 1, H: 1, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpableBowstringingAnswer3", text: "Yes, over the A2 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpableBowstringingAnswer4", text: "Yes, over the A4 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpableBowstringinganswer5", text: "No, I’m confident there is no palpable bowstringing", scores: { A: 1, B: 1, C: 0, D: -1, E: -2, F: 0, G: 0, H: 0, I: 0, J: 0, K: -2, L: 0, M: 0, N: 0 } },
            { id: "palpableBowstringingAnswer6", text: "I’m unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: -1, F: 0, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: [
            {
                if: {
                    questionId: "visibleBowstringing",
                    selectedAnswers: ["visibleBowstringingAnswer1"],
                    match: "any"
                },
                action: "skip"
            }
        ]
    },

    injurySwelling: {
        id: "injurySwelling",
        text: "Has there been any swelling associated with the injury?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "injurySwellingAnswer1", text: "Yes, in the A2, A3, and A4 regions", scores: { A: -2, B: -1, C: 0, D: 0, E: 1, F: 1, G: 1, H: 1, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
            { id: "injurySwellingAnswer2", text: "Yes, in the A2 and A3 regions", scores: { A: -1, B: 0, C: 1, D: 1, E: 0, F: 1, G: 1, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injurySwellingAnswer3", text: "Yes, in the A3 and A4 regions", scores: { A: -1, B: 0, C: 1, D: 1, E: 0, F: 0, G: 1, H: 1, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injurySwellingAnswer4", text: "Yes, in the A2 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injurySwellinganswer5", text: "Yes, in the A3 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injurySwellingAnswer6", text: "Yes, in the A4 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injurySwellingAnswer7", text: "No", scores: { A: 1, B: 1, C: 0, D: -1, E: -1, F: 1, G: 1, H: 1, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } },
            { id: "injurySwellingAnswer8", text: "None of these options apply to me or I’m unsure", scores: { A: 1, B: 1, C: 1, D: 0, E: -1, F: 1, G: 1, H: 1, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } }
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
            { id: "injuryDiscolorationAnswer1", text: "Yes, in the A2, A3, and A4 regions", scores: { A: -2, B: -1, C: 0, D: 0, E: 1, F: 1, G: 1, H: 1, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer2", text: "Yes, in the A2 and A3 regions", scores: { A: -1, B: 0, C: 1, D: 1, E: 0, F: 1, G: 1, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer3", text: "Yes, in the A3 and A4 regions", scores: { A: -1, B: 0, C: 1, D: 1, E: 0, F: 0, G: 1, H: 1, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer4", text: "Yes, in the A2 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationanswer5", text: "Yes, in the A4 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer6", text: "Yes, in the A3 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer7", text: "No", scores: { A: 1, B: 1, C: 0, D: -1, E: -1, F: 1, G: 1, H: 1, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer8", text: "None of these options apply to me, or I’m unsure", scores: { A: 1, B: 1, C: 1, D: 0, E: -1, F: 1, G: 1, H: 1, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    painLocation: {
        id: "painLocation",
        text: "Where is the discomfort/pain?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "painLocationAnswer1", text: "Entire A2 to A4 region", scores: { A: -2, B: -1, C: 0, D: 0, E: 1, F: 1, G: 1, H: 1, I: 0, J: 0, K: 2, L: 0, M: 0, N: 0 } },
            { id: "painLocationAnswer2", text: "Entire A2 to A3 region", scores: { A: -1, B: 0, C: 0, D: 1, E: 0, F: 1, G: 1, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "painLocationAnswer3", text: "Entire A3 to A4 region", scores: { A: -1, B: 0, C: 0, D: 1, E: 0, F: 0, G: 1, H: 1, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "painLocationAnswer4", text: "Distal A2 region", scores: { A: 1, B: 1, C: 0, D: -1, E: -1, F: 1, G: 0, H: -1, I: 0, J: -1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "painLocationanswer5", text: "Entire A2 region", scores: { A: 0, B: 0, C: 1, D: -1, E: -1, F: 3, G: 0, H: -1, I: 0, J: -1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "painLocationAnswer6", text: "Entire A3 region", scores: { A: 0, B: 0, C: 1, D: 0, E: -1, F: 0, G: 3, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "painLocationAnswer7", text: "Distal A4 region", scores: { A: 1, B: 1, C: 0, D: -1, E: -1, F: -1, G: -1, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "painLocationAnswer8", text: "Proximal A4 region", scores: { A: 1, B: 1, C: 0, D: -1, E: -1, F: -1, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "painLocationAnswer9", text: "Entire A4 region", scores: { A: 0, B: 0, C: 1, D: -1, E: -1, F: -1, G: 0, H: 3, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    aromFist: {
        id: "aromFist",
        text: "What are your active range of motion test results while making a fist?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "aromFistAnswer1", text: "I’m unable to make a fist due to the discomfort/pain of my injury", scores: { A: -1, B: -1, C: 0, D: 0, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFistAnswer2", text: "I can make a loose fist, but squeezing at all makes my injury hurt", scores: { A: 0, B: 0, C: 1, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFistAnswer3", text: "I can make a normal fist and squeeze some, but squeezing hard makes my injury hurt", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFistAnswer4", text: "I can make a tight first and squeeze hard without pain from my injury", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    tissueLoadingDrag: {
        id: "tissueLoadingDrag",
        text: "What are your tissue loading test results while in a drag position?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "tissueLoadingDragAnswer1", text: "Discomfort/pain in the entire A2 to A4 region", scores: { A: -1, B: -1, C: 0, D: 0, E: 1, F: 1, G: 1, H: 1, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer2", text: "Discomfort/pain in the entire A2 to A3 region", scores: { A: -1, B: 0, C: 0, D: 1, E: 0, F: 1, G: 1, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer3", text: "Discomfort/pain in the entire A3 to A4 region", scores: { A: -1, B: 0, C: 0, D: 1, E: 0, F: 0, G: 1, H: 1, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer4", text: "Discomfort/pain in the entire A2 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: -1, H: -1, I: 0, J: -1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDraganswer5", text: "Discomfort/pain in the entire A3 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer6", text: "Discomfort/pain in the entire A4 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: -1, G: -1, H: 1, I: -1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer7", text: "No discomfort/pain associated with my injury", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 1, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    tissueLoadingHalfCrimp: {
        id: "tissueLoadingHalfCrimp",
        text: "What are your tissue loading test results while in a half crimp position?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "tissueLoadingHalfCrimpAnswer1", text: "Discomfort/pain in the entire A2 to A4 region", scores: { A: 0, B: 0, C: 0, D: 0, E: 1, F: 1, G: 1, H: 1, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer2", text: "Discomfort/pain in the entire A2 to A3 region", scores: { A: 0, B: 0, C: 1, D: 1, E: 0, F: 1, G: 1, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer3", text: "Discomfort/pain in the entire A3 to A4 region", scores: { A: 0, B: 0, C: 1, D: 1, E: 0, F: 0, G: 1, H: 1, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer4", text: "Discomfort/pain in the distal A2 region", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 1, G: 0, H: -1, I: 0, J: -1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpanswer5", text: "Discomfort/pain in the entire A2 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: 0, H: -1, I: 0, J: -1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer6", text: "Discomfort/pain in the entire A3 region", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer7", text: "Discomfort/pain in the proximal A4 region", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: -1, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer8", text: "Discomfort/pain in the entire A4 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: -1, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer9", text: "No discomfort/pain associated with my injury", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    tissueLoadingFullCrimp: {
        id: "tissueLoadingFullCrimp",
        text: "questionText",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "tissueLoadingFullCrimpAnswer1", text: "Discomfort/pain in the distal A2 region", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: -1, I: 0, J: -1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingFullCrimpAnswer2", text: "Discomfort/pain in the proximal A4 region", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: -1, G: 0, H: 1, I: -1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingFullCrimpAnswer3", text: "Discomfort/pain in the distal A4 region", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: -1, G: 0, H: 1, I: -1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingFullCrimpAnswer4", text: "No discomfort/pain associated with my injury", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: [
            {
                if: {
                    questionId: "tissueLoadingHalfCrimp",
                    selectedAnswers: ["tissueLoadingHalfCrimpAnswer9"],
                    match: "none"
                },
                action: "skip"
            }
        ]
    },

    injuredPulley: {
        id: "injuredPulley",
        text: "Are you confident that you already know which pulley(s) you injured?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "injuredPulleyAnswer1", text: "Yes, A2", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 3, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuredPulleyAnswer2", text: "Yes, A3", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 3, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuredPulleyAnswer3", text: "Yes, A4", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 3, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuredPulleyAnswer4", text: "No, I’m not sure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: true,
        conditions: []
    }
}
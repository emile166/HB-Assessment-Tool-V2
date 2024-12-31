export const PULLEY_SEVERITY_DATA = {
    injuryType: {
        id: "injuryType",
        text: "What type of injury did you sustain?",
        video: "",
        photos: [],
        answers: [
            { id: "injuryTypeAnswer1", text: "Traumatic (occurred as a result of sudden trauma – typically characterized by an unexpected overload of the tissue in a single obvious event/moment)", scores: { A: -1, B: 1, C: 1, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryTypeAnswer2", text: "Non-traumatic acute (occurred in a single session or single climb but not as a result of any obvious traumatic event or overload)", scores: { A: 1, B: 1, C: -1, D: -2, E: -3, F: 0, G: 0, H: 0, I: -1, J: -1, K: -3, L: 0, M: 0, N: 0 } },
            { id: "injuryTypeAnswer3", text: "None of these options apply to me, or I’m unsure", scores: { A: 1, B: 0, C: -1, D: -1, E: -1, F: 0, G: 0, H: 0, I: -1, J: -1, K: -1, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    obviousSound: {
        id: "obviousSound",
        text: "Was there an obvious sound associated with the onset of the injury?",
        video: "https://www.youtube.com/embed/Dtlqa1LMW7w?si=SWeOCRxYiwSge6dE&rel=0",
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
        video: "https://www.youtube.com/embed/blpfiq1k6S0?si=zBSehFnIkp47ALKC&rel=0",
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
        video: "https://www.youtube.com/embed/eS37QJToJFE?si=1MQz28mgMjwGfsXq&rel=0",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg"],
        answers: [
            { id: "palpableBowstringingAnswer1", text: "Yes, over the A2 and A3 region", scores: { A: 0, B: 0, C: 1, D: 1, E: 0, F: 1, G: 1, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpableBowstringingAnswer2", text: "Yes, over the A3 and A4 region", scores: { A: 0, B: 0, C: 1, D: 1, E: 0, F: 0, G: 1, H: 1, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpableBowstringingAnswer3", text: "Yes, over the A2 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpableBowstringingAnswer4", text: "Yes, over the A4 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "palpableBowstringingAnswer5", text: "No, I’m confident there is no palpable bowstringing", scores: { A: 1, B: 1, C: 0, D: -1, E: -2, F: 0, G: 0, H: 0, I: 0, J: 0, K: -2, L: 0, M: 0, N: 0 } },
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
        video: "",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg"],
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
        video: "https://www.youtube.com/embed/ZeESVjF9MDk?si=SPCvrlmlnJXHlkA-&rel=0",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg"],
        answers: [
            { id: "injuryDiscolorationAnswer1", text: "Yes, in the A2, A3, and A4 regions", scores: { A: -2, B: -1, C: 0, D: 0, E: 1, F: 1, G: 1, H: 1, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer2", text: "Yes, in the A2 and A3 regions", scores: { A: -1, B: 0, C: 1, D: 1, E: 0, F: 1, G: 1, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer3", text: "Yes, in the A3 and A4 regions", scores: { A: -1, B: 0, C: 1, D: 1, E: 0, F: 0, G: 1, H: 1, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer4", text: "Yes, in the A2 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer5", text: "Yes, in the A4 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
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
        video: "https://www.youtube.com/embed/wteY_PONC4o?si=sDstoDI3FqFoxOB2&rel=0",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/53278a96-42f2-4f38-b71a-d705a83ef15f/Pulley+Severity+-+Question+7+-+Hand+front.jpg?content-type=image%2Fjpeg"],
        answers: [
            { id: "painLocationAnswer1", text: "Entire A2 to A4 region", scores: { A: -2, B: -1, C: 0, D: 0, E: 1, F: 1, G: 1, H: 1, I: 0, J: 0, K: 2, L: 0, M: 0, N: 0 } },
            { id: "painLocationAnswer2", text: "Entire A2 to A3 region", scores: { A: -1, B: 0, C: 0, D: 1, E: 0, F: 1, G: 1, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "painLocationAnswer3", text: "Entire A3 to A4 region", scores: { A: -1, B: 0, C: 0, D: 1, E: 0, F: 0, G: 1, H: 1, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "painLocationAnswer4", text: "Distal A2 region", scores: { A: 1, B: 1, C: 0, D: -1, E: -1, F: 1, G: 0, H: -1, I: 0, J: -1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "painLocationAnswer5", text: "Entire A2 region", scores: { A: 0, B: 0, C: 1, D: -1, E: -1, F: 3, G: 0, H: -1, I: 0, J: -1, K: 0, L: 0, M: 0, N: 0 } },
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
        text: "How does the active range of motion fist test affect your injury?",
        video: "https://www.youtube.com/embed/zGtvBrrVJ5Y?si=lXZI6ljJlG7UydJ4&rel=0",
        photos: [],
        answers: [
            { id: "aromFistAnswer1", text: "I’m unable to make a fist due to the discomfort/pain of my injury", scores: { A: -1, B: -1, C: 0, D: 0, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFistAnswer2", text: "I can make a loose fist, but squeezing at all makes my injury hurt", scores: { A: 0, B: 0, C: 1, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFistAnswer3", text: "I can make a normal fist and squeeze some, but squeezing hard makes my injury hurt", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFistAnswer4", text: "I can make a tight first and squeeze hard without pain from my injury", scores: { A: 2, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    tissueLoadingDrag: {
        id: "tissueLoadingDrag",
        text: "How does the drag tissue loading test affect your injury?",
        video: "https://www.youtube.com/embed/5ZZ6c4tValQ?si=YrWInZhC6zj27CVy&rel=0",
        photos: [
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg",
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/fc1fc205-0903-4f84-94f8-970dc0bf0355/Grip+Position+Collage.jpg?content-type=image%2Fjpeg"
        ],
        answers: [
            { id: "tissueLoadingDragAnswer1", text: "Discomfort/pain in the entire A2 to A4 region", scores: { A: -1, B: -1, C: 0, D: 0, E: 1, F: 1, G: 1, H: 1, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer2", text: "Discomfort/pain in the entire A2 to A3 region", scores: { A: -1, B: 0, C: 0, D: 1, E: 0, F: 1, G: 1, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer3", text: "Discomfort/pain in the entire A3 to A4 region", scores: { A: -1, B: 0, C: 0, D: 1, E: 0, F: 0, G: 1, H: 1, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer4", text: "Discomfort/pain in the entire A2 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: -1, H: -1, I: 0, J: -1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer5", text: "Discomfort/pain in the entire A3 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer6", text: "Discomfort/pain in the entire A4 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: -1, G: -1, H: 1, I: -1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer7", text: "No discomfort/pain associated with my injury", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 1, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    tissueLoadingHalfCrimp: {
        id: "tissueLoadingHalfCrimp",
        text: "How does the half crimp tissue loading test affect your injury?",
        video: "",
        photos: [
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/53278a96-42f2-4f38-b71a-d705a83ef15f/Pulley+Severity+-+Question+7+-+Hand+front.jpg?content-type=image%2Fjpeg",
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/fc1fc205-0903-4f84-94f8-970dc0bf0355/Grip+Position+Collage.jpg?content-type=image%2Fjpeg"
        ],
        answers: [
            { id: "tissueLoadingHalfCrimpAnswer1", text: "Discomfort/pain in the entire A2 to A4 region", scores: { A: 0, B: 0, C: 0, D: 0, E: 1, F: 1, G: 1, H: 1, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer2", text: "Discomfort/pain in the entire A2 to A3 region", scores: { A: 0, B: 0, C: 1, D: 1, E: 0, F: 1, G: 1, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer3", text: "Discomfort/pain in the entire A3 to A4 region", scores: { A: 0, B: 0, C: 1, D: 1, E: 0, F: 0, G: 1, H: 1, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer4", text: "Discomfort/pain in the distal A2 region", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 1, G: 0, H: -1, I: 0, J: -1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer5", text: "Discomfort/pain in the entire A2 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: 0, H: -1, I: 0, J: -1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer6", text: "Discomfort/pain in the entire A3 region", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer7", text: "Discomfort/pain in the proximal A4 region", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: -1, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer8", text: "Discomfort/pain in the entire A4 region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: -1, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingHalfCrimpAnswer9", text: "No discomfort/pain associated with my injury", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    halfCrimpPain: {
        id: "halfCrimpPain",
        text: "How much force was required to elicit pain during the half crimp test?",
        video: "",
        photos: [],
        answers: [
            { id: "halfCrimpPainAnswer1", text: "Discomfort/pain starts with minimal (1-2 out of 10) force", scores: { A: -1, B: 0, C: 1, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "halfCrimpPainAnswer2", text: "Discomfort/pain starts with mild (3-4 out of 10) force", scores: { A: 0, B: 0, C: 1, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "halfCrimpPainAnswer3", text: "Discomfort/pain starts with moderate (5-7 out of 10) force", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "halfCrimpPainAnswer4", text: "Discomfort/pain starts with heavy (8-10 out of 10) force", scores: { A: 2, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: [
            {
                if: {
                    questionId: "tissueLoadingHalfCrimp",
                    selectedAnswers: ["tissueLoadingHalfCrimpAnswer9"],
                    match: "any"
                },
                action: "skip"
            }
        ]
    },

    tissueLoadingFullCrimp: {
        id: "tissueLoadingFullCrimp",
        text: "How does the full crimp tissue loading test affect your injury?",
        video: "",
        photos: [
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/53278a96-42f2-4f38-b71a-d705a83ef15f/Pulley+Severity+-+Question+7+-+Hand+front.jpg?content-type=image%2Fjpeg",
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/fc1fc205-0903-4f84-94f8-970dc0bf0355/Grip+Position+Collage.jpg?content-type=image%2Fjpeg"
        ],
        answers: [
            { id: "tissueLoadingFullCrimpAnswer1", text: "Discomfort/pain in the A2 region", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 1, G: 0, H: -1, I: 0, J: -1, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingFullCrimpAnswer2", text: "Discomfort/pain in the A4 region", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: -1, G: 0, H: 1, I: -1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingFullCrimpAnswer4", text: "No discomfort/pain associated with my injury", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: [
            {
                if: {
                    questionId: "halfCrimpPain",
                    selectedAnswers: ["halfCrimpPainAnswer1", "halfCrimpPainAnswer2", "halfCrimpPainAnswer3"],
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
            { id: "fullCrimpPainAnswer1", text: "Discomfort/pain starts with minimal (1-2 out of 10) force", scores: { A: 0, B: 2, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "fullCrimpPainAnswer2", text: "Discomfort/pain starts with mild (3-4 out of 10) force", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "fullCrimpPainAnswer3", text: "Discomfort/pain starts with moderate (5-7 out of 10) force", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "fullCrimpPainAnswer4", text: "Discomfort/pain starts with heavy (8-10 out of 10) force", scores: { A: 2, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: [
            {
                if: {
                    questionId: "halfCrimpPain",
                    selectedAnswers: ["halfCrimpPainAnswer1", "halfCrimpPainAnswer2", "halfCrimpPainAnswer3"],
                    match: "any"
                },
                action: "skip"
            },
            {
                if: {
                    questionId: "tissueLoadingFullCrimp",
                    selectedAnswers: ["tissueLoadingFullCrimpAnswer4"],
                    match: "any"
                },
                action: "skip"
            }
        ]
    },

    injuredPulley: {
        id: "injuredPulley",
        text: "Are you confident that you already know which pulley(s) you injured?",
        video: "",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg"],
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
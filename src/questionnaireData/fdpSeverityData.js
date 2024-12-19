export const FDP_SEVERITY_DATA = {

    injuryDiscoloration: {
        id: "injuryDiscoloration",
        text: "Has there been any discoloration in your finger or forearm associated with the injury",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "injuryDiscolorationAnswer1", text: "Yes", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer2", text: "No", scores: { A: 1, B: 1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer3", text: "I'm unsure", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    aromFist: {
        id: "aromFist",
        text: "What are your active range of motion test results?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "aromFistAnswer1", text: "I’m unable to make a fist due to discomfort/pain associated with my injury", scores: { A: -1, B: -1, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFistAnswer2", text: "I can make a loose fist, but squeezing at all causes discomfort/pain associated with my injury", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFistAnswer3", text: "I can make a normal fist and squeeze some, but squeezing hard causes discomfort/pain associated with my injury", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFistAnswer4", text: "I can make a tight fist and squeeze hard without any discomfort/pain associated with my injury", scores: { A: 2, B: 0, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    passiveRangeOfMotion: {
        id: "passiveRangeOfMotion",
        text: "What are your passive range of motion test results?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "passiveRangeOfMotionAnswer1", text: "Limited range of motion due to discomfort/pain associated with my injury", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "passiveRangeOfMotionAnswer2", text: "Normal range of motion but some discomfort/pain associated with my injury", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "passiveRangeOfMotionAnswer3", text: "Normal range of motion and no discomfort/pain associated with my injury", scores: { A: 1, B: 0, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    injurySwelling: {
        id: "injurySwelling",
        text: "Has there been any swelling in your finger or forearm associated with your injury?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "injurySwellingAnswer1", text: "Yes", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injurySwellingAnswer2", text: "No or unsure", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
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

    fifthDigit: {
        id: "fifthDigit",
        text: "Is your fifth digit (pinky finger) the one that is injured?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "fifthDigitAnswer1", text: "Yes", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "fifthDigitAnswer2", text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    tissueLoadingDrag: {
        id: "tissueLoadingDrag",
        text: "What are your tissue loading test results for the drag position?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "tissueLoadingDragAnswer1", text: "Discomfort/pain starts with minimal (1-2 out of 10) force", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer2", text: "Discomfort/pain starts with mild (3-4 out of 10) force", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer3", text: "Discomfort/pain starts with moderate (5-7 out of 10)", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer4", text: "Discomfort/pain starts with heavy (8-10 out of 10) force", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    tissueLoadingIsolatedDrag: {
        id: "tissueLoadingIsolatedDrag",
        text: "questionText",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "tissueLoadingIsolatedDragAnswer1", text: "Discomfort/pain starts with minimal (1-2 out of 10) force", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingIsolatedDragAnswer2", text: "Discomfort/pain starts with mild (3-4 out of 10) force", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingIsolatedDragAnswer3", text: "Discomfort/pain starts with moderate (5-7 out of 10) force", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingIsolatedDragAnswer4", text: "Discomfort/pain starts with heavy (8-10 out of 10) force", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: [
            {
                if: {
                    questionId: "tissueLoadingDrag",
                    selectedAnswers: ["tissueLoadingDragAnswer1"],
                    match: "any"
                },
                action: "skip"
            }
        ]
    }

}
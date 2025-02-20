export const FDP_SEVERITY_DATA = {

    injuryType: {
        id: "injuryType",
        text: "What type of injury did you sustain?",
        video: "",
        photos: [],
        answers: [
            { id: "injuryTypeAnswer1", text: "Traumatic (occurred as a result of obvious sudden trauma – typically an unexpected overload of the tissue in a single obvious event/moment)", scores: { A: 1, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryTypeAnswer2", text: "Non-traumatic acute (no obvious traumatic event but clearly a result of OVERDOING IT on a SINGLE climb or session)", scores: { A: 1, B: 1, C: -2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryTypeAnswer3", text: "None of these options apply to me, or I’m unsure", scores: { A: 1, B: 0, C: -2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    injuryDiscoloration: {
        id: "injuryDiscoloration",
        text: "Has there been any discoloration in your finger or forearm associated with the injury?",
        video: "https://www.youtube.com/embed/ZeESVjF9MDk?si=KpZNAiAc5VKC861-&rel=0",
        photos: [],
        answers: [
            { id: "injuryDiscolorationAnswer1", text: "Yes", scores: { A: 0, B: 0, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer2", text: "No", scores: { A: 1, B: 1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer3", text: "I'm unsure", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    aromFist: {
        id: "aromFist",
        text: "How does the active range of motion fist test affect your injury?",
        video: "https://www.youtube.com/embed/zGtvBrrVJ5Y?si=ONO0PvkCC3o6iG_u&rel=0",
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
        text: "How does the passive range of motion test affect your injury?",
        video: "https://www.youtube.com/embed/1xSnQe2VqyY?si=aGogvO9cahw1oloE&rel=0",
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
        video: "",
        photos: [],
        answers: [
            { id: "injurySwellingAnswer1", text: "Yes", scores: { A: 0, B: 1, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injurySwellingAnswer2", text: "No or unsure", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    injuryMechanism: {
        id: "injuryMechanism",
        text: "Did your injury occur while you were in a two finger pocket or mono?",
        video: "",
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
        video: "",
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
        text: "How does the drag tissue loading test affect your injury?",
        video: "https://www.youtube.com/embed/5ZZ6c4tValQ?si=fhO4sK0_uBc763Fd&rel=0",
        photos: [
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/fc1fc205-0903-4f84-94f8-970dc0bf0355/Grip+Position+Collage.jpg?content-type=image%2Fjpeg"
        ],
        answers: [
            { id: "tissueLoadingDragAnswer1", text: "Discomfort/pain starts with minimal (1-2 out of 10) force", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer2", text: "Discomfort/pain starts with mild (3-4 out of 10) force", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer3", text: "Discomfort/pain starts with moderate (5-7 out of 10)", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer4", text: "Discomfort/pain starts with heavy (8-10 out of 10) force", scores: { A: 2, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingDragAnswer5", text: "No discomfort/pain even with heavy (8-10 out of 10) force", scores: { A: 3, B: 0, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    tissueLoadingIsolatedDrag: {
        id: "tissueLoadingIsolatedDrag",
        text: "How does the isolated drag tissue loading test affect your injury?",
        video: "https://www.youtube.com/embed/zLrHn0JNw4g?si=L8bLxBRW9YGKpqwz&rel=0",
        photos: [],
        answers: [
            { id: "tissueLoadingIsolatedDragAnswer1", text: "Discomfort/pain starts with minimal (1-2 out of 10) force", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingIsolatedDragAnswer2", text: "Discomfort/pain starts with mild (3-4 out of 10) force", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingIsolatedDragAnswer3", text: "Discomfort/pain starts with moderate (5-7 out of 10) force", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingIsolatedDragAnswer4", text: "Discomfort/pain starts with heavy (8-10 out of 10) force", scores: { A: 2, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "tissueLoadingIsolatedDragAnswer5", text: "No discomfort/pain even with heavy (8-10 out of 10) force", scores: { A: 3, B: 0, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
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
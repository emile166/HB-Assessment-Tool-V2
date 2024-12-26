export const NERVE_ISSUE_IDENTIFICATION_DATA = {

    nerveTensionTestOne: {
        id: "nerveTensionTestOne",
        text: "Do any of the nerve tension tests create symptoms at or very near to your injury site?",
        video: "",
        photos: [],
        answers: [
            { id: "nerveTensionTestOneAnswer1", text: "Yes, the ulnar nerve test", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "nerveTensionTestOneAnswer2", text: "Yes, the median nerve test(s)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "nerveTensionTestOneAnswer3", text: "Yes, both the ulnar nerve test and median nerve test(s)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "nerveTensionTestOneAnswer4", text: "No or unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    nerveTensionTestTwo: {
        id: "nerveTensionTestTwo",
        text: "Do any of the nerve tension tests create more intense symptoms anywhere in your injured arm compared to your uninjured arm (not including the neck and upper traps)?",
        video: "",
        photos: [],
        answers: [
            { id: "nerveTensionTestTwoAnswer1", text: "Yes, the ulnar nerve test", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "nerveTensionTestTwoAnswer2", text: "Yes, the median nerve test(s)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "nerveTensionTestTwoAnswer3", text: "Yes, both the ulnar nerve test and median nerve test(s)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: [
            {
                if: {
                    questionId: "nerveTensionTestOne",
                    selectedAnswers: ["nerveTensionTestOneAnswer1", "nerveTensionTestOneAnswer2", "nerveTensionTestOneAnswer3"],
                    match: "any"
                },
                action: "skip"
            }
        ]
    },

    nerveTensionTestThree: {
        id: "nerveTensionTestThree",
        text: "Which test caused more significant symptoms?",
        video: "",
        photos: [],
        answers: [
            { id: "nerveTensionTestThreeAnswer1", text: "Ulnar nerve test ", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "nerveTensionTestThreeAnswer2", text: "Median nerve test(s)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "nerveTensionTestThreeAnswer3", text: "They are both equal, or nearly equal", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: [
            {
                if: {
                    questionId: "nerveTensionTestOne",
                    selectedAnswers: ["nerveTensionTestOneAnswer1", "nerveTensionTestOneAnswer2", "nerveTensionTestOneAnswer3"],
                    match: "any"
                },
                action: "skip"
            },
            {
                if: {
                    questionId: "nerveTensionTestTwo",
                    selectedAnswers: ["nerveTensionTestTwoAnswer1", "nerveTensionTestTwoAnswer2"],
                    match: "any"
                },
                action: "skip"
            }
        ]
    },

}
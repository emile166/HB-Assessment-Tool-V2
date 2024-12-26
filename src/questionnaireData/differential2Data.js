export const DIFFERENTIAL_2_DATA = {
    injuryDescription: {
        id: "injuryDescription",
        text: "How would you describe your injury?",
        video: "",
        photos: [],
        answers: [
            { id: "injuryDescriptionAnswer1", text: "Caused by lateral or torsional forces (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
            { id: "injuryDescriptionAnswer2", text: "Slow build-up of symptoms associated with high-intensity high-angle crimping", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: -1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: -1 } },
            { id: "injuryDescriptionAnswer3", text: "Sudden onset of symptoms associated with frequent high-intensity crimping, but no identifiable moment of injury or trauma", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDescriptionAnswer4", text: "No pain during climbing, but symptoms appear later that day or the next day (possibly with a feeling of stiffness or loss of range of motion)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDescriptionAnswer5", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    painLocation: {
        id: "painLocation",
        text: "Where is the discomfort/pain located?",
        video: "",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg"],
        answers: [
            { id: "painLocationAnswer1", text: "Back side of the DIP or PIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: -1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: -1 } },
            { id: "painLocationAnswer2", text: "Both sides of the DIP or PIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "painLocationAnswer3", text: "Left or right side (but not both sides) of the PIP joint only", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
            { id: "painLocationAnswer4", text: "Left or right side (but not both sides) of the DIP joint only", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "painLocationAnswer5", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    lateralStressTest: {
        id: "lateralStressTest",
        text: "Does the lateral stress test cause discomfort/pain and/or reveal joint laxity?",
        video: "",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg"],
        answers: [
            { id: "lateralStressTestAnswer1", text: "Yes, discomfort/pain in both sides of my injured joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "lateralStressTestAnswer2", text: "Yes, discomfort/pain in only the *PIP* joint on the *opposite* side I was pressing on", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
            { id: "lateralStressTestAnswer3", text: "Yes, discomfort/pain in only the *DIP* joint on the *opposite* side I was pressing on", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "lateralStressTestAnswer4", text: "Yes, some there is some joint laxity", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 2, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "lateralStressTestAnswer5", text: "No discomfort/pain", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "lateralStressTestAnswer6", text: "No joint laxity", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: true,
        conditions: [
            {
                if: {
                    questionId: "lateralStressTest",
                    selectedAnswers: [
                        "lateralStressTestAnswer5",
                        "lateralStressTestAnswer6"
                    ],
                    match: "all"
                },
                action: "modifyscore",
                parameters: { scores: "G", points: -1 }
            }
        ]
    },

    passiveJointExtension: {
        id: "passiveJointExtension",
        text: "What are your passive joint extension test results?",
        video: "",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg"],
        answers: [
            { id: "passiveJointExtensionAnswer1", text: "The test caused discomfort/pain on the back side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "passiveJointExtensionAnswer2", text: "The test did *not* cause discomfort/pain on the back side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },
    activeRangeOfMotion: {
        id: "activeRangeOfMotion",
        text: "What are your active range of motion test results?",
        video: "",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg"],
        answers: [
            { id: "activeRangeOfMotionAnswer1", text: "My injury affects my PIP joint and I feel a click/catch sensation on one side of it", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
            { id: "activeRangeOfMotionAnswer2", text: "One or more of the positions felt stiff or limited in ROM, but none of them had discomfort/pain or a click/catch", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "activeRangeOfMotionAnswer3", text: "One or more of the positions had discomfort/pain or stiffness on the back side of the DIP or PIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "activeRangeOfMotionAnswer4", text: "Within the first week of injury: *only* position 3 has limited ROM and discomfort/pain on *only* one side of the PIP or DIP joint (with no clicking or catching sensation)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "activeRangeOfMotionAnswer5", text: "No pain, clicking, catching, or limitations in my range of motion associated with my injury", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: -1, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "activeRangeOfMotionAnswer6", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },
    jointEnlargement: {
        id: "jointEnlargement",
        text: "Has there been any swelling or enlargement of the affected joint?",
        video: "",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg"],
        answers: [
            { id: "jointEnlargementAnswer1", text: "Yes, constant joint swelling or enlargement of the entire joint (DIP or PIP) for more than a week", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "jointEnlargementAnswer2", text: "Yes, joint swelling only on one side of the PIP joint due to a specific moment of injury / trauma", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: -1, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "jointEnlargementAnswer3", text: "Yes, joint swelling only on one side of the DIP joint due to a specific moment of injury / trauma", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: -1, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "jointEnlargementAnswer4", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: true,
        conditions: []
    }
};

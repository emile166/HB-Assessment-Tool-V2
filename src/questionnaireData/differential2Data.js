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
            { id: "painLocationAnswer1", text: "PIP or DIP joint: back side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 2, G: -1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: -1 } },
            { id: "painLocationAnswer2", text: "PIP or DIP joint: both sides (left and right) of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "painLocationAnswer3", text: "PIP joint: left or right side (not both) of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
            { id: "painLocationAnswer4", text: "DIP joint: left or right side (not both) of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: -100 } },
            { id: "painLocationAnswer5", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    lateralStressTest: {
        id: "lateralStressTest",
        text: "Does the lateral stress test cause discomfort/pain associated with your injury or reveal joint laxity in your injured joint?",
        video: "https://www.youtube.com/embed/Ft-9Fwtn9HM?si=JHrgL4j-MIGArrSK&rel=0",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg"],
        answers: [
            { id: "lateralStressTestAnswer1", text: "PIP or DIP joint: discomfort/pain on left AND right side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "lateralStressTestAnswer2", text: "PIP joint: discomfort/pain on the opposite side I was pressing on", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
            { id: "lateralStressTestAnswer3", text: "DIP joint: discomfort/pain on the opposite side I was pressing on", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "lateralStressTestAnswer4", text: "PIP or DIP joint: yes, some joint laxity", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 2, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "lateralStressTestAnswer5", text: "No discomfort/pain", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "lateralStressTestAnswer6", text: "No joint laxity", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: -1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
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
        text: "How does the passive joint extension test affect your injury?",
        video: "https://www.youtube.com/embed/GZ9sik4b8OM?si=lfj7_6IV6L1qi5Dt&rel=0",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg"],
        answers: [
            { id: "passiveJointExtensionAnswer1", text: "The test caused discomfort/pain on the back side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 2, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "passiveJointExtensionAnswer2", text: "The test did *not* cause discomfort/pain on the back side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    activeRangeOfMotion: {
        id: "activeRangeOfMotion",
        text: "How does the active range of motion test affect your injury?",
        video: "https://www.youtube.com/embed/CnnJEIPOS_Y?si=Yk5WXTgLhCmKjA0F&rel=0",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg"],
        answers: [
            { id: "activeRangeOfMotionAnswer1", text: "PIP joint: clicking/catching sensation on one side of (or diffusing from) the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
            { id: "activeRangeOfMotionAnswer2", text: "One or more of the positions felt stiff or limited in ROM, but none of them had discomfort/pain or a click/catch", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "activeRangeOfMotionAnswer3", text: "PIP or DIP joint: one or more of the positions had discomfort/pain or stiffness on the BACK SIDE of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 2, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "activeRangeOfMotionAnswer4", text: "PIP or DIP joint: in the first week or injury I had limited range of motion and discomfort/pain on the left or right side (not both) of the joint, but not clicking/catching sensation", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "activeRangeOfMotionAnswer5", text: "No discomfort/pain, clicking, catching, or limitations in range of motion associated with my injury", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: -1, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
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
            { id: "jointEnlargementAnswer1", text: "PIP or DIP joint: constant swelling or enlargement of the entire joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "jointEnlargementAnswer2", text: "PIP joint: swelling on the left or right side (not both) due to a specific moment of injury/trauma", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: -1, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
            { id: "jointEnlargementAnswer3", text: "DIP joint: swelling on the left or right side (not both) due to a specific moment of injury/trauma", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: -1, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "jointEnlargementAnswer4", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: true,
        conditions: []
    },

    resistedFingerExtension: {
        id: "resistedFingerExtension",
        text: "Does the resisted finger extension test cause discomfort/pain associated with your injury?",
        video: "https://www.youtube.com/embed/GKdMHktjdz4?si=RrZe_seS2KDvpndf&rel=0",
        photos: [],
        answers: [
          { id: "resistedFingerExtensionAnswer1", text: "Yes", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 2 } },
          { id: "resistedFingerExtensionAnswer2", text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
      }

};

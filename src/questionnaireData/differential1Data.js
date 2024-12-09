export const DIFFERENTIAL_1_DATA = {
    increasedFingerLoad: {
      id: "increasedFingerLoad",
      text: "Did you significantly increase your finger training load (or make a major change to your finger training method) in the four weeks leading up to the onset of your symptoms?",
      video: "placeholderID",
      photos: [],
      answers: [
        { id: "increasedFingerLoadAnswer1", text: "Yes", scores: { A: 1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 1, M: 0, N: 0 } },
        { id: "increasedFingerLoadAnswer2", text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 1, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } }
      ],
      multiple: false,
      conditions: []
    },

    campusBoarding: {
        id: "campusBoarding",
        text: "Did you add campus board training into your routine in the four weeks leading up to the onset of your symptoms?",
        video: "placeholderID",
        photos: [],
        answers: [
          { id: "campusBoardingAnswer1", text: "Yes", scores: { A: 1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 1, M: 0, N: 0 } },
          { id: "campusBoardingAnswer2", text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
      },

      passiveExtension: {
        id: "passiveExtension",
        text: "Do you have discomfort/pain with passive finger extension?",
        video: "placeholderID",
        photos: [],
        answers: [
          { id: "passiveExtensionAnswer1", text: "Yes", scores: { A: -1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: -1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
          { id: "passiveExtensionAnswer2", text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
      },

      elbowOrShoulderPain: {
        id: "elbowOrShoulderPain",
        text: "Have you had unidentified or sudden discomfort/pain in your shoulder or elbow (on the same arm as your injury) that developed within a month of your injury?",
        video: "placeholderID",
        photos: [],
        answers: [
          { id: "elbowOrShoulderPainAnswer1", text: "Yes", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
          { id: "elbowOrShoulderPainAnswer2", text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
      },

      priorInjury: {
        id: "priorInjury",
        text: "Have you recovered from another injury to the same finger within the last six months that caused discomfort/pain in the same area?",
        video: "placeholderID",
        photos: [],
        answers: [
          { id: "priorInjuryAnswer1", text: "Yes", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
          { id: "priorInjuryAnswer2", text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
      },

      symptomConsistency: {
        id: "symptomConsistency",
        text: "Has the discomfort/pain related to your injury been relatively consistent/predictable or does it seem to occur somewhat randomly/confusingly?",
        video: "placeholderID",
        photos: [],
        answers: [
          { id: "symptomConsistencyAnswer1", text: "Relatively consistent/predictable", scores: { A: 1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 1, M: 0, N: 0 } },
          { id: "symptomConsistencyAnswer2", text: "Somewhat random/confusing", scores: { A: -1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 1, I: 1, J: 0, K: 0, L: -1, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
      },

      tissueLoadingVsPalpation: {
        id: "tissueLoadingVsPalpation",
        text: "Is your injury more sensitive to tissue loading or to palpation?",
        video: "placeholderID",
        photos: [],
        answers: [
          { id: "tissueLoadingVsPalpationAnswer1", text: "Tissue loading", scores: { A: 1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 1, M: 0, N: 0 } },
          { id: "tissueLoadingVsPalpationAnswer2", text: "Palpation", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 1, I: 1, J: 1, K: 0, L: 0, M: 0, N: 0 } },
          { id: "tissueLoadingVsPalpationAnswer3", text: "Both are equally painful", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
          { id: "tissueLoadingVsPalpationAnswer4", text: "I'm not sure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
      },

      painFocalPoint: {
        id: "painFocalPoint",
        text: "Where is the focal point of your discomfort/pain?",
        video: "placeholderID",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/cf97b932-d4c9-4f59-a40c-733c254fc82f/Differental+1+-+Question+8+-+Hand+front.jpg?content-type=image%2Fjpeg"],
        answers: [
          { id: "painFocalPointAnswer1", text: "Distal region of A2 pulley", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: -200, M: 0, N: 0 } },
          { id: "painFocalPointAnswer2", text: "Just one side of the proximal region of the A4 pulley", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 1, M: 0, N: 0 } },
          { id: "painFocalPointAnswer3", text: "Entire proximal region of the A4 pulley", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 1, M: 0, N: 0 } },
          { id: "painFocalPointAnswer4", text: "Directly over the A2 pulley or A4 pulley", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 1, I: 1, J: 1, K: 0, L: 0, M: 0, N: 0 } },
          { id: "painFocalPointAnswer5", text: "Sides of the A2 or A4 pulley region", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 1, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
          { id: "painFocalPointAnswer6", text: "None of these apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
      },

      nerveTensionPart1: {
        id: "nerveTensionPart1",
        text: "Do any of the nerve tension tests create symptoms at or very near to your injury site?",
        video: "placeholderID",
        photos: [],
        answers: [
          { id: "nerveTensionPart1Answer1", text: "Yes", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 2, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
          { id: "nerveTensionPart1Answer2", text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: -.5, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
      },

      nerveTensionPart2: {
        id: "nerveTensionPart2",
        text: "Do any of the nerve tension tests create more intense symptoms anywhere in your injured arm compared to your uninjured arm (not including the neck and upper traps)?",
        video: "placeholderID",
        photos: [],
        answers: [
          { id: "nerveTensionPart2Answer1", text: "Yes", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
          { id: "nerveTensionPart2Answer2", text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: -.5, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: [
            {
                if: {
                  selectedAnswers: ["nerveTensionPart1Answer1"],
                  match: "any"
                },
                action: "skip"
            }
        ]
      },

      massAtFocalPoint: {
        id: "massAtFocalPoint",
        text: "Do you feel a mass/lump or thickening over the focal point of discomfort/pain?",
        video: "placeholderID",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg"],
        answers: [
          { id: "massAtFocalPointAnswer1", text: "Yes, in the A2 region", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 2, J: 2, K: 0, L: 0, M: 0, N: 0 } },
          { id: "massAtFocalPointAnswer2", text: "Yes, in the A4 region", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 2, J: 2, K: 0, L: 0, M: 0, N: 0 } },
          { id: "massAtFocalPointAnswer3", text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: -1, J: -1, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
      },

      massLocationA2: {
        id: "massLocationA2",
        text: "Where in the A2 region do you feel the mass/lump or thickening?",
        video: "placeholderID",
        photos: [],
        answers: [
          { id: "massLocationA2Answer1", text: "Over the middle or distal end of the A2 pulley", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
          { id: "massLocationA2Answer2", text: "Closer to the MCP joint near the base of the A2 pulley", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: [
            {
                if: {
                  selectedAnswers: ["massAtFocalPointAnswer2", "massAtFocalPointAnswer3"],
                  match: "any"
                },
                action: "skip"
            }
        ]
      },

      massLocationA4: {
        id: "massLocationA4",
        text: "Where in the A4 region do you feel the mass/lump or thickening?",
        video: "placeholderID",
        photos: [],
        answers: [
          { id: "massLocationA4Answer1", text: "Directly over the middle phalanx", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
          { id: "massLocationA4Answer2", text: "On one side of the middle phalanx", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: [
            {
                if: {
                  selectedAnswers: ["massAtFocalPointAnswer1", "massAtFocalPointAnswer3"],
                  match: "any"
                },
                action: "skip"
            }
        ]
      },

      massDescription: {
        id: "massDescription",
        text: "How does the abnormal mass/lump feel?",
        video: "placeholderID",
        photos: [],
        answers: [
          { id: "massDescriptionAnswer1", text: "Soft/compressible", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
          { id: "massDescriptionAnswer2", text: "Firm/rigid", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
          { id: "massDescriptionAnswer3", text: "Mobile (moves around when pushed)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
          { id: "massDescriptionAnswer4", text: "Immobile (stays in place when pushed)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: true,
        conditions: [
            {
                if: {
                  selectedAnswers: ["massAtFocalPointAnswer3"],
                  match: "any"
                },
                action: "skip"
            }
        ]
      }
  };
  
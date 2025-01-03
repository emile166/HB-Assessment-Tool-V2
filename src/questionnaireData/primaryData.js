export const PRIMARY_DATA = {
  injuryType: {
    id: "injuryType",
    text: "What type of injury did you sustain?",
    video: "",
    photos: [],
    answers: [
      { id: "injuryTypeAnswer1", text: "Traumatic (occurred as a result of sudden trauma – typically characterized by an unexpected overload of the tissue in a single obvious event/moment)", scores: { A: 1, B: 1, C: -2, D: 1, E: 1, F: -100, G: 1, H: -2, I: -100, J: 0, K: 1, L: -100, M: -100, N: 1 } },
      { id: "injuryTypeAnswer2", text: "Non-traumatic acute (occurred in a single session or single climb but not as a result of any obvious traumatic event or overload)", scores: { A: 1, B: 0, C: 1, D: 1, E: 1, F: 0, G: 1, H: 1, I: 1, J: 1, K: 1, L: 1, M: 0, N: 1 } },
      { id: "injuryTypeAnswer3", text: "Chronic (slow build-up of symptoms over a week or more)", scores: { A: 0, B: -100, C: 1, D: -5, E: -5, F: 1, G: -3, H: 1, I: 1, J: 1, K: -5, L: 1, M: 1, N: 1 } }
    ],
    multiple: false,
    conditions: []
  },

  pinkyFinger: {
    id: "pinkyFinger",
    text: "Does your injury primarily affect your pinky finger (fifth digit) or stem from trauma to your pinky finger? (If your pain is located in your palm or forearm but was caused by trauma to the pinky finger, select 'yes'.)",
    video: "",
    photos: [],
    answers: [
      { id: "pinkyFingerAnswer1", text: "Yes", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "pinkyFingerAnswer2", text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: []
  },

  mechanismTraumatic: {
    id: "mechanismTraumatic",
    text: "Which grip position were you in when the injury occurred?",
    video: "",
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/4504b48a-39e8-4a6e-b08e-9ff1f846b388/Q2+-+ALL+Grip+Types.png?content-type=image%2Fpng"],
    answers: [
      { id: "mechanismTraumaticAnswer1", text: "High-angle crimp", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer2", text: "Half crimp", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer4", text: "Hand involuntarily opening while crimping", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer5", text: "Three-finger drag", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer6", text: "Open hand", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer7", text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "mechanismTraumaticAnswer8", text: "Two-finger pocket (crimp)", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer9", text: "Two-finger pocket (drag or open hand)", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer10", text: "Mono (crimp)", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer11", text: "Mono (drag or open hand)", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer2", "injuryTypeAnswer3"],
          match: "any"
        },
        action: "skip"
      },
      {
        if: {
          questionId: "pinkyFinger",
          selectedAnswers: ["pinkyFingerAnswer1"],
          match: "any"
        },
        action: "skip"
      }
    ]
  },

  mechanismTraumaticPinky: {
    id: "mechanismTraumaticPinky",
    text: "Which grip position was your pinky in when the injury occurred? (Think carefully before answering; due to the shortness of the pinky finger in most people, it is often in a lower-angle grip position than the other fingers.)",
    video: "",
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/4504b48a-39e8-4a6e-b08e-9ff1f846b388/Q2+-+ALL+Grip+Types.png?content-type=image%2Fpng"],
    answers: [
      { id: "mechanismTraumaticPinkyAnswer1", text: "High-angle crimp", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticPinkyAnswer2", text: "Half crimp", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticPinkyAnswer4", text: "Finger involuntarily opening while crimping", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticPinkyAnswer5", text: "Drag or open position", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticPinkyAnswer7", text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "mechanismTraumaticPinkyAnswer8", text: "Two-finger pocket (crimp)", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticPinkyAnswer9", text: "Two-finger pocket (drag or open hand)", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticPinkyAnswer10", text: "Mono (crimp)", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticPinkyAnswer11", text: "Mono (drag or open hand)", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer2", "injuryTypeAnswer3"],
          match: "any"
        },
        action: "skip"
      },
      {
        if: {
          questionId: "pinkyFinger",
          selectedAnswers: ["pinkyFingerAnswer2"],
          match: "any"
        },
        action: "skip"
      }
    ]
  },

  mechanismAcuteNonTraumatic: {
    id: "mechanismAcuteNonTraumatic",
    text: "Which do you think contributed to your injury?",
    video: "",
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/4504b48a-39e8-4a6e-b08e-9ff1f846b388/Q2+-+ALL+Grip+Types.png?content-type=image%2Fpng"],
    answers: [
      { id: "mechanismAcuteNonTraumaticAnswer1", text: "High-angle crimp", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 1, I: 1, J: 1, K: 1, L: 1, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer2", text: "Half crimp", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 1, I: 1, J: 1, K: 0, L: 1, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer4", text: "Three-finger drag", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer5", text: "Open hand", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer6", text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "mechanismAcuteNonTraumaticAnswer7", text: "Two-finger pocket (crimp)", scores: { A: 1, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer8", text: "Two-finger pocket (drag or open hand)", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer9", text: "Mono (crimp)", scores: { A: 1, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer10", text: "Mono (drag or open hand)", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer11", text: "None of these apply to me, or unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer1", "injuryTypeAnswer3"],
          match: "any"
        },
        action: "skip"
      },
      {
        if: {
          questionId: "pinkyFinger",
          selectedAnswers: ["pinkyFingerAnswer1"],
          match: "any"
        },
        action: "skip"
      },
      {
        if: {
          questionId: "mechanismAcuteNonTraumatic",
          selectedAnswers: [
            "mechanismAcuteNonTraumaticAnswer1",
            "mechanismAcuteNonTraumaticAnswer2",
            "mechanismAcuteNonTraumaticAnswer7",
            "mechanismAcuteNonTraumaticAnswer9",
            "mechanismAcuteNonTraumaticAnswer11"
          ],
          match: "none"
        },
        action: "modifyscore",
        parameters: { scores: "I", points: -1 }
      }
    ]
  },

  mechanismAcuteNonTraumaticPinky: {
    id: "mechanismAcuteNonTraumaticPinky",
    text: "Which pinky finger position do you think contributed to your injury? (Think carefully before answering; due to the shortness of the pinky finger in most people, it is often in a lower-angle grip position than the other fingers.)",
    video: "",
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/4504b48a-39e8-4a6e-b08e-9ff1f846b388/Q2+-+ALL+Grip+Types.png?content-type=image%2Fpng"],
    answers: [
      { id: "mechanismAcuteNonTraumaticPinkyAnswer1", text: "High-angle crimp", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 1, I: 1, J: 1, K: 1, L: 1, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer2", text: "Half crimp", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 1, I: 1, J: 1, K: 0, L: 1, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer4", text: "Drag or open position", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer6", text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer7", text: "Two-finger pocket (crimp)", scores: { A: 1, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer8", text: "Two-finger pocket (drag or open hand)", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer9", text: "Mono (crimp)", scores: { A: 1, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer10", text: "Mono (drag or open hand)", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer11", text: "None of these apply to me, or unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer1", "injuryTypeAnswer3"],
          match: "any"
        },
        action: "skip"
      },
      {
        if: {
          questionId: "pinkyFinger",
          selectedAnswers: ["pinkyFingerAnswer2"],
          match: "any"
        },
        action: "skip"
      },
      {
        if: {
          questionId: "mechanismAcuteNonTraumaticPinky",
          selectedAnswers: [
            "mechanismAcuteNonTraumaticPinkyAnswer1",
            "mechanismAcuteNonTraumaticPinkyAnswer2",
            "mechanismAcuteNonTraumaticPinkyAnswer7",
            "mechanismAcuteNonTraumaticPinkyAnswer9",
            "mechanismAcuteNonTraumaticPinkyAnswer11"
          ],
          match: "none"
        },
        action: "modifyscore",
        parameters: { scores: "I", points: -1 }
      }
    ]
  },


  mechanismChronic: {
    id: "mechanismChronic",
    text: "Which do you think contributed most to your injury?",
    video: "",
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/4504b48a-39e8-4a6e-b08e-9ff1f846b388/Q2+-+ALL+Grip+Types.png?content-type=image%2Fpng"],
    answers: [
      { id: "mechanismChronicAnswer1", text: "Crimping", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: 0, H: 1, I: 1, J: 1, K: 0, L: 1, M: 1, N: 0 } },
      { id: "mechanismChronicAnswer2", text: "Three-finger drag", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 1, N: 0 } },
      { id: "mechanismChronicAnswer3", text: "Open hand", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 1, N: 0 } },
      { id: "mechanismChronicAnswer4", text: "Pockets", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 1, M: 1, N: 0 } },
      { id: "mechanismChronicAnswer5", text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "mechanismChronicAnswer6", text: "None of these apply to me, or unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer1", "injuryTypeAnswer2"],
          match: "any"
        },
        action: "skip"
      },
      {
        if: {
          questionId: "pinkyFinger",
          selectedAnswers: ["pinkyFingerAnswer1"],
          match: "any"
        },
        action: "skip"
      },
      {
        if: {
          questionId: "mechanismChronic",
          selectedAnswers: [
            "mechanismChronicAnswer1",
            "mechanismChronicAnswer6"
          ],
          match: "none"
        },
        action: "modifyscore",
        parameters: { scores: "I", points: -1 }
      }
    ]
  },

  mechanismChronicPinky: {
    id: "mechanismChronicPinky",
    text: "Regarding the grip position of your *pinky* finger, which do you think contributed most to your injury/condition? (Think carefully before answering; due to the shortness of the pinky finger in most people, it is often in a lower-angle grip position than the other fingers.)",
    video: "",
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/4504b48a-39e8-4a6e-b08e-9ff1f846b388/Q2+-+ALL+Grip+Types.png?content-type=image%2Fpng"],
    answers: [
      { id: "mechanismChronicPinkyAnswer1", text: "Half crimp or high angle grips", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: 0, H: 1, I: 1, J: 1, K: 0, L: 1, M: 1, N: 0 } },
      { id: "mechanismChronicPinkyAnswer2", text: "Drag or open hand grips", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 1, N: 0 } },
      { id: "mechanismChronicPinkyAnswer4", text: "Pockets", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 1, M: 1, N: 0 } },
      { id: "mechanismChronicPinkyAnswer5", text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "mechanismChronicPinkyAnswer6", text: "None of these apply to me, or unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer1", "injuryTypeAnswer2"],
          match: "any"
        },
        action: "skip"
      },
      {
        if: {
          questionId: "pinkyFinger",
          selectedAnswers: ["pinkyFingerAnswer2"],
          match: "any"
        },
        action: "skip"
      },
      {
        if: {
          questionId: "mechanismChronicPinky",
          selectedAnswers: [
            "mechanismChronicPinkyAnswer1",
            "mechanismChronicPinkyAnswer6"
          ],
          match: "none"
        },
        action: "modifyscore",
        parameters: { scores: "I", points: -1 }
      }
    ]
  },

  painLocation: {
    id: "painLocation",
    text: "Where is the discomfort/pain?",
    video: "",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/3c82cebc-74c6-448d-8cbf-1dc7fa4f923e/Primary+-+Question+5+-+Finger+front.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/ffff2343-1b17-47df-aa8d-bcf0070530d2/Primary+-+Question+5+-+Hand+and+forearm+front.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/c3bb623f-a8f1-4a1e-9cc0-f0c7f9278a72/Primary+-+Question+5+-+Hand+back.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/cf08cf06-d9ca-4008-9ec0-aa988cb3a762/Primary+-+Question+5+-+Finger+right.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "painLocationAnswer1", text: "1. Distal region of A2 pulley", scores: { A: 1, B: 1, C: 0, D: 0, E: -1, F: 0, G: -1, H: 0, I: 0, J: 1, K: 0, L: -2, M: -5, N: -5 } },
      { id: "painLocationAnswer2", text: "2. Distal region of A4 pulley", scores: { A: 1, B: 1, C: 0, D: 0, E: -1, F: 0, G: -1, H: 0, I: 0, J: 0, K: 0, L: -1, M: -2, N: -5 } },
      { id: "painLocationAnswer3", text: "3. Proximal region of A4 pulley", scores: { A: 1, B: 1, C: 0, D: 0, E: -1, F: 0, G: -1, H: 1, I: 1, J: 1, K: 0, L: 1, M: -1, N: -1 } },
      { id: "painLocationAnswer4", text: "4. In the DIP volar plate region", scores: { A: -2, B: -2, C: 0, D: 0, E: -1, F: 0, G: -1, H: 0, I: 0, J: -2, K: 1, L: -3, M: 0, N: -1 } },
      { id: "painLocationAnswer5", text: "5. Directly over the A2 or A4 pulley", scores: { A: 0, B: 1, C: 1, D: 0, E: -1, F: -1, G: -1, H: 1, I: 1, J: 1, K: -1, L: 0, M: -1, N: -1 } },
      { id: "painLocationAnswer6", text: "6. Directly over the A3 pulley", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 1, G: -1, H: 0, I: 0, J: 0, K: 0, L: 0, M: -2, N: -2 } },
      { id: "painLocationAnswer7", text: "7. Sides of the A2 or A4 pulley region", scores: { A: -1, B: 1, C: 1, D: -1, E: 0, F: -1, G: 0, H: 1, I: 1, J: 1, K: -2, L: 0, M: -2, N: 0 } },
      { id: "painLocationAnswer8", text: "8. Base of distal phalanx in the A5 region (palm side)", scores: { A: -2, B: -2, C: 0, D: 1, E: 0, F: 0, G: -1, H: 0, I: 0, J: -2, K: 0, L: -2, M: 1, N: -2 } },
      { id: "painLocationAnswer9", text: "9. Finger flexor muscle body or musculotendinous junction", scores: { A: 0, B: 0, C: 0, D: 2, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "painLocationAnswer10", text: "10. Palm of the hand (possibly traveling to finger and/or wrist)", scores: { A: 0, B: 0, C: 0, D: 0, E: 2, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "painLocationAnswer11", text: "11. Back side of the DIP or PIP joint", scores: { A: -2, B: -2, C: -2, D: -2, E: 0, F: 1, G: 0, H: 0, I: -2, J: -2, K: 0, L: -2, M: -2, N: 0 } },
      { id: "painLocationAnswer12", text: "12. Both sides (left and right) of the DIP or PIP joint", scores: { A: 0, B: 0, C: -2, D: -2, E: 0, F: 1, G: 0, H: 0, I: -2, J: -2, K: 0, L: 0, M: 0, N: 0 } },
      { id: "painLocationAnswer13", text: "13. Left or right side (but not both sides) of *only* the DIP joint", scores: { A: -1, B: -1, C: -1, D: 0, E: -1, F: 1, G: 1, H: 0, I: -1, J: -1, K: 0, L: 0, M: -1, N: 0 } },
      { id: "painLocationAnswer14", text: "14. Left or right side (but not both sides) of *only* the PIP joint", scores: { A: 0, B: 0, C: 0, D: -1, E: 0, F: 1, G: 1, H: 0, I: -1, J: -1, K: 0, L: 0, M: -1, N: 1 } },
      { id: "painLocationAnswer15", text: "15. Left or right side (but not both sides) of the PIP *and* DIP joints", scores: { A: -2, B: -2, C: -1, D: -1, E: 0, F: 1, G: 0, H: 0, I: -2, J: -2, K: 0, L: -2, M: -2, N: 0 } },
      { id: "painLocationAnswer16", text: "16. Hard to pinpoint, but only in my finger", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: []
  },

  visualBowstringing: {
    id: "visualBowstringing",
    text: "Is there visually obvious bowstringing?",
    video: "",
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/db22606b-d34b-4078-bab5-51886105d5c2/Bowstringing+image.jpg?content-type=image%2Fjpeg"],
    answers: [
      { id: "visualBowstringingAnswer1", text: "Yes", scores: { A: 0, B: 3, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "visualBowstringingAnswer2", text: "No or unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer2", "injuryTypeAnswer3"],
          match: "any"
        },
        action: "skip"
      },
      {
        if: {
          questionId: "painLocation",
          selectedAnswers: [
            "painLocationAnswer8",
            "painLocationAnswer9",
            "painLocationAnswer10",
            "painLocationAnswer11",
            "painLocationAnswer12"
          ],
          match: "only"
        },
        action: "skip"
      }
    ]
  },

  obviousSound: {
    id: "obviousSound",
    text: "Was there an obvious sound associated with the onset of the injury?",
    video: "",
    photos: [],
    answers: [
      { id: "obviousSoundAnswer1", text: "Yes, there was a loud audible pop (loud enough for bystanders to hear)", scores: { A: 0, B: 2, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "obviousSoundAnswer2", text: "Yes, there was a sound from my knuckle cracking", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 1, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "obviousSoundAnswer3", text: "There was a faint sound from my finger, but I’m not sure what caused it", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 1, K: 1, L: 0, M: 0, N: 1 } },
      { id: "obviousSoundAnswer4", text: "I had headphones on and no one was around so I don’t know", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "obviousSoundAnswer5", text: "No, there was no sound associated with the injury", scores: { A: 1, B: 0, C: 1, D: 1, E: 1, F: 1, G: 1, H: 1, I: 1, J: 1, K: 0, L: 1, M: 1, N: 1 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer2", "injuryTypeAnswer3"],
          match: "any"
        },
        action: "skip"
      }
    ]
  },

  abnormalMass: {
    id: "abnormalMass",
    text: "Can you feel an obvious abnormal mass/lump or thickening at (or very near to) the area of discomfort/pain?",
    video: "",
    photos: [],
    answers: [
      { id: "abnormalMassAnswer1", text: "Yes", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 2, J: 2, K: 0, L: 0, M: 0, N: 0 } },
      { id: "abnormalMassAnswer2", text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: -1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "abnormalMassAnswer3", text: "Unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer1"],
          match: "any"
        },
        action: "skip"
      },
      {
        if: {
          questionId: "painLocation",
          selectedAnswers: [
            "painLocationAnswer4",
            "painLocationAnswer8",
            "painLocationAnswer9",
            "painLocationAnswer10",
            "painLocationAnswer11"
          ],
          match: "only"
        },
        action: "skip"
      }
    ]
  },

  injurySwelling: {
    id: "injurySwelling",
    text: "Has there been any swelling associated with the injury?",
    video: "",
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg"],
    answers: [
      { id: "injurySwellingAnswer1", text: "Yes, mainly in the left or right side (but not both sides) of the DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injurySwellingAnswer2", text: "Yes, mainly in the left or right side (but not both sides) of the PIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "injurySwellingAnswer3", text: "Yes, swelling or enlargement around the entire PIP or DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injurySwellingAnswer4", text: "Yes, in my finger and not isolated to just the PIP or DIP joints", scores: { A: 0, B: 1, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injurySwellingAnswer5", text: "Yes, in the palm of my hand", scores: { A: 0, B: 0, C: 0, D: 0, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injurySwellingAnswer6", text: "Yes, isolated to my DIP joint and only in the palm side", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "injurySwellingAnswer7", text: "No", scores: { A: 1, B: 1, C: 1, D: 1, E: 1, F: 0, G: 1, H: 1, I: 1, J: 1, K: 1, L: 1, M: 1, N: 1 } },
      { id: "injurySwellingAnswer8", text: "None of these options apply to me, or I’m unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: [
      {
        if: {
          questionId: "injurySwelling",
          selectedAnswers: [
            "injurySwellingAnswer1",
            "injurySwellingAnswer2",
            "injurySwellingAnswer3",
            "injurySwellingAnswer4",
            "injurySwellingAnswer5",
            "injurySwellingAnswer6"
          ],
          match: "any"
        },
        action: "modifyscore",
        parameters: { scores: "H", points: -1 }
      }
    ]
  },

  injuryDiscoloration: {
    id: "injuryDiscoloration",
    text: "Has there been any discoloration associated with the injury?",
    video: "",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/26cfa0d9-eb43-48cf-abba-2edb5716c88f/Primary+-+Question+8+-+Hand+front.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "injuryDiscolorationAnswer1", text: "Yes, bruise-like discoloration in either the left or right side (not both sides) of the PIP or DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injuryDiscolorationAnswer2", text: "Yes, bruise-like discoloration in either the left or right side (not both sides) of the PIP joint only (not DIP joint)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "injuryDiscolorationAnswer3", text: "Yes, redness in the back side of the PIP or DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injuryDiscolorationAnswer4", text: "Yes, bruise-like discoloration on the palm side of the DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "injuryDiscolorationAnswer5", text: "Yes, bruise-like discoloration in the palm of the hand", scores: { A: 0, B: 0, C: 0, D: 0, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injuryDiscolorationAnswer6", text: "Yes, bruise-like discoloration in the forearm or distal phalanx", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injuryDiscolorationAnswer7", text: "Yes, bruise-like discoloration in the A2-A4 region, primarily on the palm side", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injuryDiscolorationAnswer8", text: "None of these options apply to me, or I’m unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer3"],
          match: "any"
        },
        action: "skip"
      },
      {
        if: {
          questionId: "injuryDiscoloration",
          selectedAnswers: [
            "injuryDiscolorationAnswer1",
            "injuryDiscolorationAnswer2",
            "injuryDiscolorationAnswer3",
            "injuryDiscolorationAnswer4",
            "injuryDiscolorationAnswer5",
            "injuryDiscolorationAnswer6",
            "injuryDiscolorationAnswer7"
          ],
          match: "any"
        },
        action: "modifyscore",
        parameters: { scores: ["H", "I", "J"], points: -1 }
      }
    ]
  },

  aromPositionOne: {
    id: "aromPositionOne",
    text: "What are your active range of motion test results in position one?",
    video: "",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/574f61b7-d74e-4802-9149-3607c6146b99/Primary+-+Question+12+-+.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "aromPositionOneAnswer1", text: "My injury affects my PIP joint and I feel a click/catch sensation on one side of it", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "aromPositionOneAnswer2", text: "Normal ROM, no discomfort/pain, and no stiffness associated with my injury", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionOneAnswer3", text: "Some discomfort/pain in my forearm", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionOneAnswer4", text: "Some discomfort/pain in the palm of my hand", scores: { A: 0, B: 0, C: 0, D: 0, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionOneAnswer5", text: "Some discomfort/pain in the A1 to A4 pulley region (palm side)", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionOneAnswer6", text: "Some discomfort/pain in the palm side of the DIP joint *only*", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "aromPositionOneAnswer7", text: "My injury affects my A2 or A4 region and I feel an obvious click/catch sensation", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 1, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: []
  },

  aromPositionTwo: {
    id: "aromPositionTwo",
    text: "What are your active range of motion test results in position two?",
    video: "",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/574f61b7-d74e-4802-9149-3607c6146b99/Primary+-+Question+12+-+.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "aromPositionTwoAnswer1", text: "My injury affects my PIP joint and I feel a click/catch sensation on one side of it", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "aromPositionTwoAnswer2", text: "Normal ROM, no discomfort/pain, and no stiffness associated with my injury", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer3", text: "Some discomfort/pain in my forearm", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer4", text: "Some discomfort/pain in the palm of my hand", scores: { A: 0, B: 0, C: 0, D: 0, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer5", text: "Some discomfort/pain in the A1 to A4 pulley region (palm side)", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer6", text: "Some discomfort/pain or stiffness in (or diffusing from) the PIP or DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer7", text: "Limited ROM but no discomfort/pain", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer8", text: "My injury affects my A2 or A4 region and I feel an obvious click/catch sensation", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 1, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: [
      {
        if: {
          questionId: "aromPositionOne",
          selectedAnswers: ["aromPositionOneAnswer1"],
          match: "any"
        },
        action: "skip"
      }
    ]
  },

  aromPositionThree: {
    id: "aromPositionThree",
    text: "What are your active range of motion test results in position three?",
    video: "",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/574f61b7-d74e-4802-9149-3607c6146b99/Primary+-+Question+12+-+.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "aromPositionThreeAnswer1", text: "My injury affects my PIP joint and I feel a click/catch sensation on one side of it", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "aromPositionThreeAnswer2", text: "Normal ROM, no discomfort/pain, and no stiffness associated with my injury", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer3", text: "Some discomfort/pain in my forearm", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer4", text: "Some discomfort/pain in the palm of my hand", scores: { A: 0, B: 0, C: 0, D: 0, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer5", text: "Some discomfort/pain in the A1 to A4 pulley region (palm side)", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer6", text: "Some discomfort/pain in either the left or right side (but not both sides) of the PIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "aromPositionThreeAnswer7", text: "Some discomfort/pain in either the left or right side (but not both sides) of the DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer8", text: "Some discomfort/pain in the palm side of the DIP joint *only*", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer9", text: "Some discomfort/pain or stiffness in (or diffusing from) the PIP or DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer10", text: "Limited ROM but no discomfort/pain", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer11", text: "My injury affects my A2 or A4 region and I feel a click/catch sensation", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 1, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: [
      {
        if: {
          questionId: "aromPositionOne",
          selectedAnswers: ["aromPositionOneAnswer1", "aromPositionTwoAnswer1"],
          match: "any"
        },
        action: "skip"
      }
    ]
  },

  tissueLoading: {
    id: "tissueLoading",
    text: "What are your tissue loading test results?",
    video: "",
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/574f61b7-d74e-4802-9149-3607c6146b99/Primary+-+Question+12+-+.jpg?content-type=image%2Fjpeg"],
    answers: [
      { id: "tissueLoadingAnswer1", text: "Discomfort/pain with the crimp and drag tests, but crimp is worse", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 1, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "tissueLoadingAnswer2", text: "Discomfort/pain with the crimp and drag tests, but drag is worse", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 1, N: 0 } },
      { id: "tissueLoadingAnswer3", text: "About equal discomfort with the crimp and drag tests", scores: { A: 0, B: 1, C: 0, D: 1, E: 0, F: 0, G: 0, H: 1, I: 0, J: 1, K: 0, L: 0, M: 1, N: 0 } },
      { id: "tissueLoadingAnswer4", text: "Discomfort/pain with the crimp test, but not the drag test", scores: { A: 1, B: 1, C: 1, D: 0, E: 0, F: 1, G: 0, H: 1, I: 1, J: 1, K: 1, L: 1, M: 0, N: 0 } },
      { id: "tissueLoadingAnswer5", text: "Discomfort/pain with the drag test, but not the crimp test", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 1, N: 0 } },
      { id: "tissueLoadingAnswer6", text: "Discomfort/pain with the isolated finger test while my adjacent fingers are curled, and less discomfort (or none) during the test while they are relaxed", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "tissueLoadingAnswer7", text: "Discomfort/pain in the PIP or DIP joint with the lateral stress test", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "tissueLoadingAnswer8", text: "No immediate discomfort/pain with the tissue loading tests, but I have noticed a pattern of delayed onset discomfort/pain after crimping", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 1, M: 0, N: 0 } },
      { id: "tissueLoadingAnswer9", text: "No injury-related symptoms with any of the tissue loading tests", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "tissueLoadingAnswer10", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: []
  },

  passiveExtension: {
    id: "passiveExtension",
    text: "What are your passive joint extension test results?",
    video: "",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "passiveExtensionAnswer1", text: "Discomfort/pain on the palm side of my DIP or PIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 2, L: 0, M: 0, N: 0 } },
      { id: "passiveExtensionAnswer2", text: "More mobility than usual", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 2, L: 0, M: 0, N: 0 } },
      { id: "passiveExtensionAnswer3", text: "Discomfort/pain on the back side of my PIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } },
      { id: "passiveExtensionAnswer4", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: [
      {
        if: {
          questionId: "painLocation",
          selectedAnswers: [
            "painLocationAnswer9",
            "painLocationAnswer10"
          ],
          match: "only"
        },
        action: "skip"
      }
    ]
  }

};

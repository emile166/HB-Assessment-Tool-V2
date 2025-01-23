export const PRIMARY_DATA = {
  injuryType: {
    id: "injuryType",
    text: "What type of injury did you sustain?",
    video: "",
    photos: [],
    answers: [
      { id: "injuryTypeAnswer1", text: "Traumatic (occurred as a result of obvious sudden trauma – typically an unexpected overload of the tissue in a single obvious event/moment)", scores: { A: 1, B: 1, C: -2, D: 1, E: 1, F: -100, G: 1, H: -2, I: -100, J: -100, K: 1, L: -100, M: -100, N: 1 } },
      { id: "injuryTypeAnswer2", text: "Non-traumatic acute (no obvious traumatic event but clearly a result of OVERDOING IT on a SINGLE climb or session)", scores: { A: 1, B: 0, C: 1, D: 1, E: 1, F: 0, G: 1, H: 0, I: 0, J: 1, K: 1, L: 1, M: 0, N: 1 } },
      { id: "injuryTypeAnswer3", text: "Chronic (a slow build-up of symptoms over a week or more that seems related to OVERTRAINING or OVERUSE)", scores: { A: 0, B: -100, C: 1, D: -100, E: -1, F: 1, G: 1, H: 1, I: 1, J: 1, K: -5, L: 1, M: 1, N: 1 } },
      { id: "injuryTypeAnswer4", text: "Other (came on with no obvious cause and no obvious overuse and has bugged me ever since)", scores: { A: 0, B: -100, C: 1, D: -100, E: 0, F: 1, G: 1, H: 1, I: 1, J: 1, K: 0, L: 1, M: 1, N: 1 } }
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
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/fc1fc205-0903-4f84-94f8-970dc0bf0355/Grip+Position+Collage.jpg?content-type=image%2Fjpeg"],
    answers: [
      { id: "mechanismTraumaticAnswer1", text: "High-angle crimp", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer2", text: "Half crimp", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer4", text: "Hand involuntarily opening while crimping", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer5", text: "Three-finger drag", scores: { A: 0, B: -1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer6", text: "Open hand", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer7", text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "mechanismTraumaticAnswer8", text: "Two-finger pocket (crimp)", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer9", text: "Two-finger pocket (drag or open hand)", scores: { A: -1, B: -1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer10", text: "Mono (crimp)", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticAnswer11", text: "Mono (drag or open hand)", scores: { A: -1, B: -1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer2", "injuryTypeAnswer3", "injuryTypeAnswer4"],
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
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/fc1fc205-0903-4f84-94f8-970dc0bf0355/Grip+Position+Collage.jpg?content-type=image%2Fjpeg"],
    answers: [
      { id: "mechanismTraumaticPinkyAnswer1", text: "High-angle crimp", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticPinkyAnswer2", text: "Half crimp", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticPinkyAnswer4", text: "Finger involuntarily opening while crimping", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticPinkyAnswer5", text: "Drag or open position", scores: { A: 0, B: -1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticPinkyAnswer7", text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "mechanismTraumaticPinkyAnswer8", text: "Two-finger pocket (crimp)", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticPinkyAnswer9", text: "Two-finger pocket (drag or open hand)", scores: { A: -1, B: -1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticPinkyAnswer10", text: "Mono (crimp)", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismTraumaticPinkyAnswer11", text: "Mono (drag or open hand)", scores: { A: -1, B: -1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer2", "injuryTypeAnswer3", "injuryTypeAnswer4"],
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
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/fc1fc205-0903-4f84-94f8-970dc0bf0355/Grip+Position+Collage.jpg?content-type=image%2Fjpeg"],
    answers: [
      { id: "mechanismAcuteNonTraumaticAnswer1", text: "High-angle crimp", scores: { A: 1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 1, K: 1, L: 1, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer2", text: "Half crimp", scores: { A: 1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 1, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer4", text: "Three-finger drag", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer5", text: "Open hand", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer6", text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "mechanismAcuteNonTraumaticAnswer7", text: "Two-finger pocket (crimp)", scores: { A: 1, B: 0, C: 1, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 1, K: 1, L: 1, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer8", text: "Two-finger pocket (drag or open hand)", scores: { A: -1, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer9", text: "Mono (crimp)", scores: { A: 1, B: 0, C: 1, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer10", text: "Mono (drag or open hand)", scores: { A: -1, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticAnswer11", text: "None of these apply to me, or unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer1", "injuryTypeAnswer3", "injuryTypeAnswer4"],
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

  mechanismAcuteNonTraumaticPinky: {
    id: "mechanismAcuteNonTraumaticPinky",
    text: "Which pinky finger position do you think contributed to your injury? (Think carefully before answering; due to the shortness of the pinky finger in most people, it is often in a lower-angle grip position than the other fingers.)",
    video: "",
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/fc1fc205-0903-4f84-94f8-970dc0bf0355/Grip+Position+Collage.jpg?content-type=image%2Fjpeg"],
    answers: [
      { id: "mechanismAcuteNonTraumaticPinkyAnswer1", text: "High-angle crimp", scores: { A: 1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 1, K: 1, L: 1, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer2", text: "Half crimp", scores: { A: 1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 1, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer4", text: "Drag or open position", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer6", text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer7", text: "Two-finger pocket (crimp)", scores: { A: 1, B: 0, C: 1, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 1, K: 1, L: 1, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer8", text: "Two-finger pocket (drag or open hand)", scores: { A: -1, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer9", text: "Mono (crimp)", scores: { A: 1, B: 0, C: 1, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer10", text: "Mono (drag or open hand)", scores: { A: -1, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } },
      { id: "mechanismAcuteNonTraumaticPinkyAnswer11", text: "None of these apply to me, or unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer1", "injuryTypeAnswer3", "injuryTypeAnswer4"],
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

  mechanismChronic: {
    id: "mechanismChronic",
    text: "Which do you think contributed most to your injury?",
    video: "",
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/fc1fc205-0903-4f84-94f8-970dc0bf0355/Grip+Position+Collage.jpg?content-type=image%2Fjpeg"],
    answers: [
      { id: "mechanismChronicAnswer1", text: "Crimping", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: 0, H: 1, I: 1, J: 1, K: 0, L: 1, M: 1, N: 0 } },
      { id: "mechanismChronicAnswer2", text: "Three-finger drag", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: -1, J: -1, K: 0, L: -1, M: 1, N: 0 } },
      { id: "mechanismChronicAnswer3", text: "Open hand", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: -1, J: 0, K: 0, L: 0, M: 1, N: 0 } },
      { id: "mechanismChronicAnswer4", text: "Pockets", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 1, M: 1, N: 0 } },
      { id: "mechanismChronicAnswer5", text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: -1, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "mechanismChronicAnswer6", text: "None of these apply to me, or unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer1", "injuryTypeAnswer2", "injuryTypeAnswer4"],
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

  mechanismChronicPinky: {
    id: "mechanismChronicPinky",
    text: "Regarding the grip position of your *pinky* finger, which do you think contributed most to your injury/condition? (Think carefully before answering; due to the shortness of the pinky finger in most people, it is often in a lower-angle grip position than the other fingers.)",
    video: "",
    photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/fc1fc205-0903-4f84-94f8-970dc0bf0355/Grip+Position+Collage.jpg?content-type=image%2Fjpeg"],
    answers: [
      { id: "mechanismChronicPinkyAnswer1", text: "Half crimp or high angle grips", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: 0, H: 1, I: 1, J: 1, K: 0, L: 1, M: 1, N: 0 } },
      { id: "mechanismChronicPinkyAnswer2", text: "Drag or open hand grips", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: -1, J: -1, K: 0, L: -1, M: 1, N: 0 } },
      { id: "mechanismChronicPinkyAnswer4", text: "Pockets", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: -1, J: 0, K: 0, L: 1, M: 1, N: 0 } },
      { id: "mechanismChronicPinkyAnswer5", text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: -1, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "mechanismChronicPinkyAnswer6", text: "None of these apply to me, or unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer1", "injuryTypeAnswer2", "injuryTypeAnswer4"],
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

  mechanismOther: {
    id: "mechanismOther",
    text: "Which do you think contributed most to your injury, if any?",
    video: "",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/fc1fc205-0903-4f84-94f8-970dc0bf0355/Grip+Position+Collage.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "mechanismOtherAnswer1", text: "Crimping", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: 0, H: 1, I: 1, J: 1, K: 0, L: 1, M: 1, N: 0 } },
      { id: "mechanismOtherAnswer2", text: "Drag or open hand grips", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: -1, J: -1, K: 0, L: -1, M: 1, N: 0 } },
      { id: "mechanismOtherAnswer3", text: "Pockets", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: -1, J: 0, K: 0, L: 1, M: 1, N: 0 } },
      { id: "mechanismOtherAnswer4", text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: -1, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "mechanismOtherAnswer5", text: "None of these apply to me, or unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer1", "injuryTypeAnswer2", "injuryTypeAnswer3"],
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

  mechanismOtherPinky: {
    id: "mechanismOtherPinky",
    text: "Regarding the grip position of your *pinky* finger, which do you think contributed most to your injury/condition, if any? (Think carefully before answering; due to the shortness of the pinky finger in most people, it is often in a lower-angle grip position than the other fingers.)",
    video: "",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/fc1fc205-0903-4f84-94f8-970dc0bf0355/Grip+Position+Collage.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "mechanismOtherPinkyAnswer1", text: "Crimping", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 1, G: 0, H: 1, I: 1, J: 1, K: 0, L: 1, M: 1, N: 0 } },
      { id: "mechanismOtherPinkyAnswer2", text: "Drag or open hand grips", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: -1, J: -1, K: 0, L: -1, M: 1, N: 0 } },
      { id: "mechanismOtherPinkyAnswer3", text: "Pockets", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: -1, J: 0, K: 0, L: 1, M: 1, N: 0 } },
      { id: "mechanismOtherPinkyAnswer4", text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: -1, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "mechanismOtherPinkyAnswer5", text: "None of these apply to me, or unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer1", "injuryTypeAnswer2", "injuryTypeAnswer3"],
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

  painLocation: {
    id: "painLocation",
    text: "Where is the discomfort/pain? (This question is very important to get right. Use the reference image below and do your best to be as specific as possible.)",
    video: "https://www.youtube.com/embed/MCm8URGtAvQ?si=Epro0Sv3N9AB9p1m&rel=0",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/3c82cebc-74c6-448d-8cbf-1dc7fa4f923e/Primary+-+Question+5+-+Finger+front.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/ffff2343-1b17-47df-aa8d-bcf0070530d2/Primary+-+Question+5+-+Hand+and+forearm+front.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/c3bb623f-a8f1-4a1e-9cc0-f0c7f9278a72/Primary+-+Question+5+-+Hand+back.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/cf08cf06-d9ca-4008-9ec0-aa988cb3a762/Primary+-+Question+5+-+Finger+right.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/ea4c76b1-14f4-4681-be30-9c52f069279e/Primary+-+Question+5+-+Finger+left.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "painLocationAnswer1", text: "1. A2 pulley: distal region", scores: { A: 1, B: 1, C: 0, D: 0, E: -1, F: 0, G: -1, H: 0, I: 0, J: 1, K: 0, L: -2, M: -5, N: -5 } },
      { id: "painLocationAnswer2", text: "2. A4 pulley: distal region", scores: { A: 1, B: 1, C: 0, D: 0, E: -1, F: 0, G: -1, H: 0, I: 0, J: 0, K: 0, L: -1, M: -2, N: -5 } },
      { id: "painLocationAnswer3", text: "3. A4 pulley: proximal region", scores: { A: 1, B: 1, C: 0, D: 0, E: -1, F: 0, G: -1, H: 1, I: 1, J: 1, K: 0, L: 1, M: -1, N: -1 } },
      { id: "painLocationAnswer4", text: "4. DIP volar plate region", scores: { A: -2, B: -2, C: 0, D: 0, E: -1, F: 0, G: -1, H: 0, I: 0, J: -2, K: 1, L: -3, M: 0, N: -1 } },
      { id: "painLocationAnswer5", text: "5. A2 or A4 pulley: directly over the pulley", scores: { A: 0, B: 1, C: 1, D: 0, E: -1, F: -1, G: -1, H: 1, I: 1, J: 1, K: -1, L: 0, M: -1, N: -1 } },
      { id: "painLocationAnswer6", text: "6. A3 pulley: directly over the pulley", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 1, G: -1, H: 0, I: 0, J: 0, K: 0, L: 0, M: -2, N: -2 } },
      { id: "painLocationAnswer7", text: "7. A2 or A4 pulley: left and/or right side of the pulley", scores: { A: -1, B: 1, C: 1, D: -1, E: 0, F: -1, G: 0, H: 1, I: 1, J: 1, K: -2, L: 0, M: -2, N: 0 } },
      { id: "painLocationAnswer8", text: "8. A5 pulley region: base of the distal phalanx", scores: { A: -2, B: -2, C: 0, D: 1, E: 0, F: 0, G: -1, H: 0, I: 0, J: -2, K: 0, L: -2, M: 1, N: -2 } },
      { id: "painLocationAnswer9", text: "9. Finger flexor muscle body or musculotendinous junction", scores: { A: 0, B: 0, C: 0, D: 2, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "painLocationAnswer10", text: "10. Palm (possibly traveling to finger and/or wrist)", scores: { A: 0, B: 0, C: 0, D: 0, E: 2, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "painLocationAnswer11", text: "11. PIP or DIP joint: back side of the joint", scores: { A: -2, B: -2, C: -2, D: -2, E: 0, F: 1, G: 0, H: 0, I: -2, J: -2, K: 0, L: -2, M: -2, N: 0 } },
      { id: "painLocationAnswer12", text: "12. PIP or DIP joint: both sides (left and right) of the joint", scores: { A: 0, B: 0, C: -2, D: -2, E: 0, F: 1, G: 0, H: 0, I: -2, J: -2, K: 0, L: 0, M: 0, N: 0 } },
      { id: "painLocationAnswer13", text: "13. DIP joint: left or right side (not both) of the joint", scores: { A: -1, B: -1, C: -1, D: 0, E: -1, F: 1, G: 1, H: 0, I: -1, J: -1, K: 0, L: 0, M: -1, N: 0 } },
      { id: "painLocationAnswer14", text: "14. PIP joint: left or right side (not both) of the joint", scores: { A: 0, B: 0, C: 0, D: -1, E: 0, F: 1, G: 1, H: 0, I: -1, J: -1, K: 0, L: 0, M: -1, N: 1 } },
      { id: "painLocationAnswer15", text: "15. *Both* the PIP and DIP joint: left or right side (not both) of the two joints", scores: { A: -2, B: -2, C: -1, D: -1, E: 0, F: 1, G: 0, H: 0, I: -2, J: -2, K: 0, L: -2, M: -2, N: 0 } },
      { id: "painLocationAnswer16", text: "16. Hard to pinpoint, but only in my finger", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: []
  },

  visualBowstringing: {
    id: "visualBowstringing",
    text: "Is there visually obvious bowstringing?",
    video: "https://www.youtube.com/embed/blpfiq1k6S0?si=0DZqEZFhFm8mF8UU&rel=0",
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
          selectedAnswers: ["injuryTypeAnswer2", "injuryTypeAnswer3", "injuryTypeAnswer4"],
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
    video: "https://www.youtube.com/embed/Dtlqa1LMW7w?si=X8_biz3MfYX6QIpc&rel=0",
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
          selectedAnswers: ["injuryTypeAnswer3", "injuryTypeAnswer4"],
          match: "any"
        },
        action: "skip"
      }
    ]
  },

  abnormalMass: {
    id: "abnormalMass",
    text: "Can you feel an obvious abnormal mass/lump or thickening at (or very near to) the area of discomfort/pain? (Make sure you compare MULTIPLE fingers to your injured finger to get a proper reference point, as there is often thickening in the same finger on both hands.)",
    video: "https://www.youtube.com/embed/u1Xsvw9RLxQ?si=o5Gf0SyMU9idb6hg&rel=0",
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
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/ea4c76b1-14f4-4681-be30-9c52f069279e/Primary+-+Question+5+-+Finger+left.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/cf08cf06-d9ca-4008-9ec0-aa988cb3a762/Primary+-+Question+5+-+Finger+right.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "injurySwellingAnswer2", text: "PIP joint: swelling in the left or right side (not both)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: .5, G: 1, H: -1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "injurySwellingAnswer3", text: "PIP joint: swelling or enlargement around the entire joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: -1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injurySwellingAnswer1", text: "DIP joint: swelling in the left or right side (not both)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: .5, G: 1, H: -1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injurySwellingAnswer9", text: "DIP joint: swelling or enlargement around the entire joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: -1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injurySwellingAnswer6", text: "DIP joint: swelling in the palm side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: -1, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "injurySwellingAnswer4", text: "Finger: swelling that is not isolated to the PIP or DIP joints", scores: { A: 0, B: 1, C: 0, D: 1, E: 0, F: 0, G: 0, H: -1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injurySwellingAnswer5", text: "Palm: some swelling", scores: { A: 0, B: 0, C: 0, D: 0, E: 1, F: 0, G: 0, H: -1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injurySwellingAnswer7", text: "No", scores: { A: 1, B: 1, C: 1, D: 1, E: 1, F: 0, G: 1, H: 1, I: 1, J: 1, K: 1, L: 1, M: 1, N: 1 } },
      { id: "injurySwellingAnswer8", text: "None of these options apply to me, or I’m unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: []
  },

  injuryDiscoloration: {
    id: "injuryDiscoloration",
    text: "Has there been any discoloration associated with the injury?",
    video: "https://www.youtube.com/embed/ZeESVjF9MDk?si=SPCvrlmlnJXHlkA-&rel=0",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/26cfa0d9-eb43-48cf-abba-2edb5716c88f/Primary+-+Question+8+-+Hand+front.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/ea4c76b1-14f4-4681-be30-9c52f069279e/Primary+-+Question+5+-+Finger+left.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/cf08cf06-d9ca-4008-9ec0-aa988cb3a762/Primary+-+Question+5+-+Finger+right.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "injuryDiscolorationAnswer2", text: "PIP joint: discoloration in the left or right side (not both) of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: -1, I: -1, J: -1, K: 0, L: 0, M: 0, N: 1 } },
      { id: "injuryDiscolorationAnswer3", text: "PIP joint: redness in the back side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: -1, I: -1, J: -1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injuryDiscolorationAnswer1", text: "DIP joint: discoloration in the left or right side (not both) of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: -1, I: -1, J: -1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injuryDiscolorationAnswer9", text: "DIP joint: redness in the back side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: -1, I: -1, J: -1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injuryDiscolorationAnswer4", text: "DIP joint: bruise-like discoloration in the palm side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: -1, I: -1, J: -1, K: 1, L: 0, M: 0, N: 0 } },
      { id: "injuryDiscolorationAnswer5", text: "Palm: some bruise-like discoloration", scores: { A: 0, B: 0, C: 0, D: 0, E: 1, F: 0, G: 0, H: -1, I: -1, J: -1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injuryDiscolorationAnswer6", text: "Forearm or distal phalanx: some bruise-like discoloration", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: -1, I: -1, J: -1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injuryDiscolorationAnswer7", text: "A2-A4 region: some bruise-like discoloration in this area", scores: { A: 0, B: 1, C: 0, D: 1, E: 0, F: 0, G: 0, H: -1, I: -1, J: -1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "injuryDiscolorationAnswer8", text: "None of these options apply to me, or I’m unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer3", "injuryTypeAnswer4"],
          match: "any"
        },
        action: "skip"
      }
    ]
  },

  aromPositionOne: {
    id: "aromPositionOne",
    text: "How does the active range of motion test in position ONE affect your injury?",
    video: "https://www.youtube.com/embed/eA_kX6UgSGM?si=YjE9D3WaXRpfBzPq&rel=0",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/574f61b7-d74e-4802-9149-3607c6146b99/Primary+-+Question+12+-+.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/abcae28f-fda8-49c0-bccc-281887fc2684/AROM+All+Positions+In+Grid.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "aromPositionOneAnswer1", text: "PIP joint: clicking/catching sensation on one side of (or diffusing from) the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "aromPositionOneAnswer7", text: "A2 region: clicking/catching sensation", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionOneAnswer8", text: "A4 region: clicking/catching sensation", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionOneAnswer3", text: "Forearm: some discomfort/pain", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionOneAnswer4", text: "Palm: some discomfort/pain", scores: { A: 0, B: 0, C: 0, D: 0, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionOneAnswer5", text: "Entire A1-A4 region: some discomfort/pain", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionOneAnswer6", text: "DIP joint: discomfort/pain isolated to the palm side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "aromPositionOneAnswer2", text: "Normal range of motion, no discomfort/pain, and no stiffness associated with my injury", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionOneAnswer9", text: "None of these apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: []
  },

  aromPositionTwo: {
    id: "aromPositionTwo",
    text: "How does the active range of motion test in position TWO affect your injury?",
    video: "",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/574f61b7-d74e-4802-9149-3607c6146b99/Primary+-+Question+12+-+.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/abcae28f-fda8-49c0-bccc-281887fc2684/AROM+All+Positions+In+Grid.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "aromPositionTwoAnswer1", text: "PIP joint: clicking/catching sensation on one side of (or diffusing from) the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "aromPositionTwoAnswer8", text: "A2 region: clicking/catching sensation", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer9", text: "A4 region: clicking/catching sensation", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer3", text: "Forearm: some discomfort/pain", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer4", text: "Palm: some discomfort/pain", scores: { A: 0, B: 0, C: 0, D: 0, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer5", text: "Entire A1-A4 region: some discomfort/pain", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer6", text: "PIP joint: stiffness or discomfort/pain in (or diffusing from) the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer10", text: "DIP joint: stiffness or discomfort/pain in (or diffusing from) the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer7", text: "Limited range of motion but no discomfort/pain", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer2", text: "Normal range of motion, no discomfort/pain, and no stiffness associated with my injury", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionTwoAnswer11", text: "None of these apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: []
  },

  aromPositionThree: {
    id: "aromPositionThree",
    text: "How does the active range of motion test in position THREE affect your injury?",
    video: "",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/574f61b7-d74e-4802-9149-3607c6146b99/Primary+-+Question+12+-+.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/ea4c76b1-14f4-4681-be30-9c52f069279e/Primary+-+Question+5+-+Finger+left.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/cf08cf06-d9ca-4008-9ec0-aa988cb3a762/Primary+-+Question+5+-+Finger+right.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/abcae28f-fda8-49c0-bccc-281887fc2684/AROM+All+Positions+In+Grid.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "aromPositionThreeAnswer1", text: "PIP joint: clicking/catching sensation on one side of (or diffusing from) the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "aromPositionThreeAnswer11", text: "A2 region: clicking/catching sensation", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer12", text: "A4 region: clicking/catching sensation", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer3", text: "Forearm: some discomfort/pain", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer4", text: "Palm: some discomfort/pain", scores: { A: 0, B: 0, C: 0, D: 0, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer5", text: "Entire A1-A4 region: some discomfort/pain", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer6", text: "PIP joint: discomfort/pain in the left or right side (not both) of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "aromPositionThreeAnswer9", text: "PIP joint: some stiffness or discomfort/pain in (or diffusing from) the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer7", text: "DIP joint: discomfort/pain in the left or right side (not both) of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer8", text: "DIP joint: discomfort/pain in the palm side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer13", text: "DIP joint: some stiffness or discomfort/pain in (or diffusing from) the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer10", text: "Limited range of motion but no discomfort/pain", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer2", text: "Normal range of motion, no discomfort/pain, and no stiffness associated with my injury", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "aromPositionThreeAnswer14", text: "None of these apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: []
  },

  tissueLoading: {
    id: "tissueLoading",
    text: "How do the tissue loading tests affect your injury?",
    video: "https://www.youtube.com/embed/rp4dtyvE66s?si=36FLvMGt7nwDMv2J&rel=0",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/574f61b7-d74e-4802-9149-3607c6146b99/Primary+-+Question+12+-+.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/fc1fc205-0903-4f84-94f8-970dc0bf0355/Grip+Position+Collage.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "tissueLoadingAnswer1", text: "Discomfort/pain with the crimp and drag tests, but crimp is worse", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 1, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
      { id: "tissueLoadingAnswer2", text: "Discomfort/pain with the crimp and drag tests, but drag is worse", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 1, N: 0 } },
      { id: "tissueLoadingAnswer3", text: "About equal discomfort with the crimp and drag tests", scores: { A: 0, B: 1, C: 0, D: 1, E: 0, F: 0, G: 0, H: 1, I: 0, J: 1, K: 0, L: 0, M: 1, N: 0 } },
      { id: "tissueLoadingAnswer4", text: "Discomfort/pain with the crimp test, but not the drag test", scores: { A: 1, B: 1, C: 1, D: 0, E: 0, F: 1, G: 0, H: 1, I: 1, J: 1, K: 1, L: 1, M: 0, N: 0 } },
      { id: "tissueLoadingAnswer5", text: "Discomfort/pain with the drag test, but not the crimp test", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 1, N: 0 } },
      { id: "tissueLoadingAnswer6", text: "Discomfort/pain with the isolated finger test while my adjacent fingers are curled, and less discomfort (or none) during the test while they are relaxed", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "tissueLoadingAnswer7", text: "Discomfort/pain in the PIP or DIP joint with the lateral stress test", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
      { id: "tissueLoadingAnswer8", text: "Delayed discomfort/pain from my injury that comes on hours (or even a full day) after a climbing session", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 1, M: 0, N: 0 } },
      { id: "tissueLoadingAnswer9", text: "No injury-related symptoms with any of the tissue loading tests", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
      { id: "tissueLoadingAnswer10", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: true,
    conditions: []
  },

  passiveExtension: {
    id: "passiveExtension",
    text: "How does the passive joint extension test affect your injury?",
    video: "https://www.youtube.com/embed/3Rl9B-5DlQ8?si=iNlhu5Hpg4oDyOdN&rel=0",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/c3bb623f-a8f1-4a1e-9cc0-f0c7f9278a72/Primary+-+Question+5+-+Hand+back.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "passiveExtensionAnswer1", text: "PIP joint: discomfort/pain on the palm side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
      { id: "passiveExtensionAnswer2", text: "PIP joint: more mobility than usual", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 2, L: 0, M: 0, N: 0 } },
      { id: "passiveExtensionAnswer3", text: "PIP joint: discomfort/pain on the back side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } },
      { id: "passiveExtensionAnswer5", text: "DIP joint: discomfort/pain on the palm side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 2, L: 0, M: 0, N: 0 } },
      { id: "passiveExtensionAnswer6", text: "DIP joint: more mobility than usual", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 2, L: 0, M: 0, N: 0 } },
      { id: "passiveExtensionAnswer7", text: "DIP joint: discomfort/pain on the back side of the joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } },
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
  },

  hyperextensionInjury: {
    id: "hyperextensionInjury",
    text: "Was your injury caused by hyperextension of the PIP or DIP joint?",
    video: "",
    photos: [
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/d3894a14-38ad-46e9-a939-92ab9c5b7264/PIP+and+DIP+Joints.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/c3bb623f-a8f1-4a1e-9cc0-f0c7f9278a72/Primary+-+Question+5+-+Hand+back.jpg?content-type=image%2Fjpeg"
    ],
    answers: [
      { id: "hyperextensionInjuryAnswer1", text: "Yes, PIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 2, L: 0, M: 0, N: 0 } },
      { id: "hyperextensionInjuryAnswer2", text: "Yes, DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 2, L: 0, M: 0, N: 0 } },
      { id: "hyperextensionInjuryAnswer3", text: "No or I’m unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
    ],
    multiple: false,
    conditions: [
      {
        if: {
          questionId: "injuryType",
          selectedAnswers: ["injuryTypeAnswer3", "injuryTypeAnswer4"],
          match: "any"
        },
        action: "skip"
      },
      {
        if: {
          questionId: "passiveExtension",
          selectedAnswers: ["passiveExtensionAnswer3", "passiveExtensionAnswer7", "passiveExtensionAnswer4"],
          match: "only"
        },
        action: "skip"
      }
    ]
  }

};

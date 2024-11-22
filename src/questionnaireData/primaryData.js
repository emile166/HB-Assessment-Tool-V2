const PRIMARY_DATA = {
    injuryType: {
      id: "injuryType",
      text: "What type of injury did you sustain?",
      answers: [
        { text: "Traumatic", scores: { A: 1, B: 1, C: -2, D: 1, E: 1, F: -100, G: 1, H: -2, I: -100, J: 0, K: 1, L: -100, M: -100, N: 1 } },
        { text: "Non-traumatic acute", scores: { A: 1, B: 0, C: 1, D: 1, E: 1, F: 0, G: 1, H: 1, I: 1, J: 1, K: 1, L: 1, M: 1, N: 1 } },
        { text: "Chronic", scores: { A: 0, B: -100, C: 1, D: -5, E: -5, F: 1, G: -3, H: 1, I: 1, J: 1, K: -5, L: 1, M: 1, N: 1 } }
      ],
      multiple: false,
      conditions: []
    },
    mechanismAcuteTraumatic: {
      id: "mechanismAcuteTraumatic",
      text: "Which grip position were you in when the injury occurred?",
      answers: [
        { text: "High-angle crimp", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
        { text: "Half crimp", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Chisel", scores: { A: 1, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Hand involuntarily opening while crimping", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
        { text: "Three-finger drag", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Open hand", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
        { text: "Two-finger pocket (crimp)", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
        { text: "Two-finger pocket (drag or open hand)", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Mono (crimp)", scores: { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Mono (drag or open hand)", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
      ],
      multiple: false,
      conditions: [
        {
          if: {
            questionId: "injuryType",
            selectedAnswers: ["Non-traumatic acute", "Chronic"]
          },
          action: "skip"
        }
      ]
    },
    mechanismAcuteNonTraumatic: {
      id: "mechanismAcuteNonTraumatic",
      text: "Which do you think contributed to your injury?",
      answers: [
        { text: "High-angle crimp", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 1, I: 1, J: 1, K: 1, L: 1, M: 0, N: 0 } },
        { text: "Half crimp", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 1, I: 1, J: 1, K: 0, L: 1, M: 0, N: 0 } },
        { text: "Chisel", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 1, M: 0, N: 0 } },
        { text: "Three-finger drag", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 1, N: 0 } },
        { text: "Open hand", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
        { text: "Two-finger pocket (crimp)", scores: { A: 1, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
        { text: "Two-finger pocket (drag or open hand)", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Mono (crimp)", scores: { A: 1, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Mono (drag or open hand)", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "None of these apply to me, or unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
      ],
      multiple: false,
      conditions: [
        {
          if: {
            questionId: "injuryType",
            selectedAnswers: ["Traumatic", "Chronic"]
          },
          action: "skip"
        }
      ]
    },
    mechanismChronic: {
      id: "mechanismChronic",
      text: "Which do you think contributed most to your injury?",
      answers: [
        { text: "High-angle crimp", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Half crimp", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Chisel", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Hand involuntarily opening while crimping", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Three-finger drag", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Open hand", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Twisting or side-loading grip (e.g. finger lock, ring lock, side pull, gaston, etc.)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Two-finger pocket (crimp)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Two-finger pocket (crimp)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Mono (crimp)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Mono (drag or open hand)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
      ],
      multiple: false,
      conditions: [
        {
          if: {
            questionId: "injuryType",
            selectedAnswers: ["Traumatic", "Non-traumatic acute"]
          },
          action: "skip"
        }
      ]
    },
    painLocation: {
      id: "painLocation",
      text: "Where is the discomfort/pain?",
      answers: [
        { text: "Distal region of A2 pulley", scores: { A: 1, B: 1, C: 0, D: 0, E: -1, F: 0, G: -1, H: 0, I: 0, J: 1, K: 0, L: -2, M: -5, N: -5 } },
        { text: "Distal region of A4 pulley", scores: { A: 1, B: 1, C: 0, D: 0, E: -1, F: 0, G: -1, H: 0, I: 0, J: 0, K: 0, L: -1, M: -2, N: -5 } },
        { text: "Proximal region of A4 pulley", scores: { A: 1, B: 1, C: 0, D: 0, E: -1, F: 0, G: -1, H: 1, I: 1, J: 1, K: 0, L: 1, M: -1, N: -1 } },
        { text: "In the DIP volar plate region", scores: { A: -2, B: -2, C: 0, D: 0, E: -1, F: 0, G: -1, H: 0, I: 0, J: -2, K: 1, L: -3, M: 0, N: -1 } },
        { text: "Directly over the A2 or A4 pulley", scores: { A: 0, B: 1, C: 1, D: 0, E: -1, F: -1, G: -1, H: 1, I: 1, J: 1, K: -1, L: 0, M: -1, N: -1 } },
        { text: "Directly over the A3 pulley", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 1, G: -1, H: 0, I: 0, J: 0, K: 0, L: 0, M: -2, N: -2 } },
        { text: "Sides of the A2 or A4 pulley region", scores: { A: -1, B: 1, C: 1, D: -1, E: 0, F: -1, G: 0, H: 1, I: 1, J: 1, K: -2, L: 0, M: -2, N: 0 } },
        { text: "In the DIP volar plate region", scores: { A: -2, B: -2, C: 0, D: 1, E: 0, F: 0, G: -1, H: 0, I: 0, J: -2, K: 0, L: -2, M: 1, N: -2 } },
        { text: "Finger flexor muscle body or musculotendinous junction", scores: { A: 0, B: 0, C: 0, D: 2, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Palm of the hand (possibly traveling to finger and/or wrist)", scores: { A: 0, B: 0, C: 0, D: 0, E: 2, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Back side of the DIP or PIP joint", scores: { A: -2, B: -2, C: -2, D: -2, E: 0, F: 1, G: 0, H: 0, I: -2, J: -2, K: 0, L: -2, M: -2, N: 0 } },
        { text: "Both sides (left and right) of the DIP or PIP joint", scores: { A: 0, B: 0, C: -2, D: -2, E: 0, F: 1, G: 0, H: 0, I: -2, J: -2, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Left or right side (but not both sides) of *only* the DIP joint", scores: { A: -1, B: -1, C: -1, D: 0, E: -1, F: 1, G: 1, H: 0, I: -1, J: -1, K: 0, L: 0, M: -1, N: 0 } },
        { text: "Left or right side (but not both sides) of *only* the PIP joint", scores: { A: 0, B: 0, C: 0, D: -1, E: 0, F: 1, G: 1, H: 0, I: -1, J: -1, K: 0, L: 0, M: -1, N: 1 } },
        { text: "Left or right side (but not both sides) of the PIP *and* DIP joints", scores: { A: -2, B: -2, C: -1, D: -1, E: 0, F: 1, G: 0, H: 0, I: -2, J: -2, K: 0, L: -2, M: -2, N: 0 } },
        { text: "Hard to pinpoint, but only in my finger", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
      ],
      multiple: true,
      conditions: []
    },
    visualBowstringing: {
      id: "visualBowstringing",
      text: "Is there visually obvious bowstringing?",
      answers: [
        { text: "Yes", scores: { A: 0, B: 3, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "No or unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
      ],
      multiple: false,
      conditions: [
        {
          if: {
            questionId: "injuryType",
            selectedAnswers: ["Non-traumatic acute", "Chronic"]
          },
          if: {
            questionId: "INPROGRESS",
            selectedAnswers: [""]
          },
          action: ""
        }
      ]
    },
    obviousSound: {
      id: "obviousSound",
      text: "Was there an obvious sound associated with the onset of the injury?",
      answers: [
        { text: "Yes, there was a loud audible pop (loud enough for bystanders to hear)", scores: { A: 0, B: 2, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
        { text: "Yes, there was a sound from my knuckle cracking", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 1, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
        { text: "There was a faint sound from my finger, but I’m not sure what caused it", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 1, K: 1, L: 0, M: 0, N: 1 } },
        { text: "I had headphones on and no one was around so I don’t know", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "No, there was no sound associated with the injury", scores: { A: 1, B: 0, C: 1, D: 1, E: 1, F: 1, G: 1, H: 1, I: 1, J: 1, K: 0, L: 1, M: 1, N: 1 } }
      ],
      multiple: false,
      conditions: []
    },
    abnormalMass: {
      id: "abnormalMass",
      text: "Can you feel an obvious abnormal mass/lump or thickening at (or very near to) the area of discomfort/pain?",
      answers: [
        { text: "Yes", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 2, J: 2, K: 0, L: 0, M: 0, N: 0 } },
        { text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: -1, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
      ],
      multiple: false,
      conditions: []
    },
    injurySwelling: {
      id: "injurySwelling",
      text: "Has there been any swelling associated with the injury?",
      answers: [
        { text: "Yes, mainly in the left or right side (but not both sides) of the DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Yes, mainly in the left or right side (but not both sides) of the PIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
        { text: "Yes, swelling or enlargement around the entire PIP or DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Yes, in my finger and not isolated to just the PIP or DIP joints", scores: { A: 0, B: 1, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Yes, in the palm of my hand", scores: { A: 0, B: 0, C: 0, D: 0, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Yes, isolated to my DIP joint and only in the palm side", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
        { text: "No", scores: { A: 1, B: 1, C: 1, D: 1, E: 1, F: 0, G: 1, H: 1, I: 1, J: 1, K: 1, L: 1, M: 1, N: 1 } },
        { text: "None of these options apply to me, or I’m unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
      ],
      multiple: true,
      conditions: []
    },
    injuryDiscoloration: {
      id: "injuryDiscoloration",
      text: "Has there been any discoloration associated with the injury?",
      answers: [
        { text: "Yes, bruise-like discoloration in either the left or right side (not both sides) of the PIP or DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Yes, bruise-like discoloration in either the left or right side (not both sides) of the PIP joint only (not DIP joint)", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
        { text: "Yes, redness in the back side of the PIP or DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Yes, bruise-like discoloration on the palm side of the DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
        { text: "Yes, bruise-like discoloration in the palm of the hand", scores: { A: 0, B: 0, C: 0, D: 0, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Yes, bruise-like discoloration in the forearm or distal phalanx", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Yes, bruise-like discoloration in the A2-A4 region, primarily on the palm side", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "None of these options apply to me, or I’m unsure", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
      ],
      multiple: true,
      conditions: []
    },
    aromPositionOne: {
      id: "aromPositionOne",
      text: "What are your active range of motion test results in position one?",
      answers: [
        { text: "My injury affects my PIP joint and I feel a click/catch sensation on one side of it", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
        { text: "Some discomfort/pain or mildly limited range of motion associated with my injury", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "No discomfort/pain associated with my injury", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
      ],
      multiple: false,
      conditions: []
    },
    aromPositionTwo: {
      id: "aromPositionTwo",
      text: "What are your active range of motion test results in position two?",
      answers: [
        { text: "My injury affects my PIP joint and I feel a click/catch sensation on one side of it", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
        { text: "Normal ROM, no discomfort/pain, and no stiffness associated with my injury", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Some discomfort/pain in my forearm or in the A1 to A4 pulley region (palm side)", scores: { A: 0, B: 1, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Some discomfort/pain or stiffness in (or diffusing from) the PIP or DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Limited ROM but no discomfort/pain", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "My injury affects my A2 or A4 region and I feel an obvious click/catch sensation", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 1, K: 0, L: 0, M: 0, N: 0 } }
      ],
      multiple: false,
      conditions: []
    },
    aromPositionThree: {
      id: "aromPositionThree",
      text: "What are your active range of motion test results in position three?",
      answers: [
        { text: "My injury affects my PIP joint and I feel a click/catch sensation on one side of it", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
        { text: "Normal ROM, no discomfort/pain, and no stiffness associated with my injury", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Some discomfort/pain in my forearm or in the A1 to A4 pulley region (palm side)", scores: { A: 0, B: 1, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Some discomfort/pain in either the left or right side (but not both sides) of the PIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
        { text: "Some discomfort/pain in either the left or right side (but not both sides) of the DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Some discomfort/pain in the palm side of the DIP joint *only*", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 1, L: 0, M: 0, N: 0 } },
        { text: "Some discomfort/pain or stiffness in (or diffusing from) the PIP or DIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Limited ROM but no discomfort/pain", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "My injury affects my A2 or A4 region and I feel a click/catch sensation", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 1, J: 1, K: 0, L: 0, M: 0, N: 0 } }
      ],
      multiple: false,
      conditions: []
    },
    tissueLoading: {
      id: "tissueLoading",
      text: "What are your tissue loading test results?",
      answers: [
        { text: "Discomfort/pain with the crimp and drag tests, but crimp is worse", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 1, I: 0, J: 1, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Discomfort/pain with the crimp and drag tests, but drag is worse", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 1, N: 0 } },
        { text: "About equal discomfort with the crimp and drag tests", scores: { A: 0, B: 1, C: 0, D: 1, E: 0, F: 0, G: 0, H: 1, I: 0, J: 1, K: 0, L: 0, M: 1, N: 0 } },
        { text: "Discomfort/pain with the crimp test, but not the drag test", scores: { A: 1, B: 1, C: 1, D: 0, E: 0, F: 1, G: 0, H: 1, I: 1, J: 1, K: 1, L: 1, M: 0, N: 0 } },
        { text: "Discomfort/pain with the drag test, but not the crimp test", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 1, N: 0 } },
        { text: "Discomfort/pain with the isolated finger test while my adjacent fingers are curled, and less discomfort (or none) during the test while they are relaxed", scores: { A: 0, B: 0, C: 0, D: 1, E: 1, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "Discomfort/pain in the PIP or DIP joint with the lateral stress test", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "No immediate discomfort/pain with the tissue loading tests, but I have noticed a pattern of delayed onset discomfort/pain after crimping", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: 0, L: 1, M: 0, N: 0 } },
        { text: "No injury-related symptoms with any of the tissue loading tests", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 1, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1 } },
        { text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
      ],
      multiple: false,
      conditions: []
    },
    passiveExtension: {
      id: "passiveExtension",
      text: "What are your passive joint extension test results?",
      answers: [
        { text: "Discomfort/pain on the palm side of my DIP or PIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 2, L: 0, M: 0, N: 0 } },
        { text: "More mobility than usual", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 2, L: 0, M: 0, N: 0 } },
        { text: "Discomfort/pain on the back side of my PIP joint", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 1, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } },
        { text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: -1, L: 0, M: 0, N: 0 } },
        { text: "answer2", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "answer3", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "answer1", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "answer2", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "answer3", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "answer1", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "answer2", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
        { text: "answer3", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
      ],
      multiple: true,
      conditions: []
    }
  };
  
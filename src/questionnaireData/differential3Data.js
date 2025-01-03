export const DIFFERENTIAL_3_DATA = {
    gripPosition: {
        id: "gripPosition",
        text: "In which grip position did your injury occur and where are your symptoms?",
        video: "",
        photos: [
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg",
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/fc1fc205-0903-4f84-94f8-970dc0bf0355/Grip+Position+Collage.jpg?content-type=image%2Fjpeg"
        ],
        answers: [
            { id: "gripPositionAnswer1", text: "My injury occurred in a crimp position and I feel discomfort/pain *only* in the A2, A3, or A4 region", scores: { A: 0, B: 1, C: 0, D: -1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "gripPositionAnswer2", text: "My injury occurred in a crimp position and I feel discomfort/pain *only* in the A5 region or forearm", scores: { A: 0, B: -1, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "gripPositionAnswer3", text: "My injury occurred in a drag position and I do *not* feel symptoms in my A2, A3, and A4 region", scores: { A: 0, B: -1, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "gripPositionAnswer4", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },
    audiblePop: {
        id: "audiblePop",
        text: "Was there an obvious “pop” sound associated with the injury while using a specific grip type?",
        video: "",
        photos: [],
        answers: [
            { id: "audiblePopAnswer1", text: "Yes, while I was in a crimp grip", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "audiblePopAnswer2", text: "Yes, while I was in a drag / open hand", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "audiblePopAnswer3", text: "Yes, but I’m uncertain of the grip type it was associated with", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "audiblePopAnswer4", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },
    rangeOfMotion: {
        id: "rangeOfMotion",
        text: "How does the three-position active range of motion test affect your injury?",
        video: "https://www.youtube.com/embed/Yt2Se3OJYaw?si=BhWcYjR5G3V-jVZz&rel=0",
        photos: [
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg",
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/abcae28f-fda8-49c0-bccc-281887fc2684/AROM+All+Positions+In+Grid.jpg?content-type=image%2Fjpeg"
        ],
        answers: [
            { id: "rangeOfMotionAnswer1", text: "Discomfort/pain in the A2, A3, or A4 region", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "rangeOfMotionAnswer2", text: "Discomfort/pain in my forearm", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "rangeOfMotionAnswer3", text: "Discomfort/pain in my distal phalanx (last segment of the finger)", scores: { A: 0, B: 0, C: 0, D: 1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "rangeOfMotionAnswer4", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    }
}
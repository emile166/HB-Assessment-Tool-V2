export const DIFFERENTIAL_3_DATA = {
    gripPosition: {
        id: "gripPosition",
        text: "In which grip position did your injury occur and where are your symptoms?",
        video: "placeholderID",
        photos: [
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg",
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/4504b48a-39e8-4a6e-b08e-9ff1f846b388/Q2+-+ALL+Grip+Types.png?content-type=image%2Fpng"
        ],
        answers: [
            { id: "gripPositionAnswer1", text: "My injury occurred in a crimp position and I feel discomfort/pain *only* in the A2, A3, or A4 region", scores: { A: 1, B: -1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "gripPositionAnswer2", text: "My injury occurred in a crimp position and I feel discomfort/pain *only* in the A5 region or forearm", scores: { A: -1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "gripPositionAnswer3", text: "My injury occurred in a drag position and I do *not* feel symptoms in my A2, A3, and A4 region", scores: { A: -1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "gripPositionAnswer4", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },
    audiblePop: {
        id: "audiblePop",
        text: "Was there an obvious “pop” sound associated with the injury while using a specific grip type?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "audiblePopAnswer1", text: "Yes, while I was in a crimp grip", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "audiblePopAnswer2", text: "Yes, while I was in a drag / open hand", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "audiblePopAnswer3", text: "Yes, but I’m uncertain of the grip type it was associated with", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "audiblePopAnswer4", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },
    rangeOfMotion: {
        id: "rangeOfMotion",
        text: "What are your active range of motion results?",
        video: "placeholderID",
        photos: ["https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/84930909-0843-4db5-829b-a2d82a766c07/Differential+3+-+Question+1+-+Hand+front.jpg?content-type=image%2Fjpeg"],
        answers: [
            { id: "rangeOfMotionAnswer1", text: "Discomfort/pain in the A2, A3, or A4 region", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "rangeOfMotionAnswer2", text: "Discomfort/pain in my forearm", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "rangeOfMotionAnswer3", text: "Discomfort/pain in the tip of my finger", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "rangeOfMotionAnswer4", text: "None of these options apply to me", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    }
}
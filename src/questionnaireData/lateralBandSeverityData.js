export const LATERAL_BAND_SEVERITY_DATA = {

    fingerDeformity: {
        id: "fingerDeformity",
        text: "Is your finger stuck in a flexed, crimp-like position (also known as the boutonniere deformity)?",
        video: "",
        photos: [],
        answers: [
            { id: "fingerDeformityAnswer1", text: "Yes", scores: { A: 0, B: 0, C: 100, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "fingerDeformityAnswer2", text: "No", scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    injuryType: {
        id: "injuryType",
        text: "What type of injury did you sustain?",
        video: "",
        photos: [],
        answers: [
            { id: "injuryTypeAnswer1", text: "Traumatic (occurred as a result of obvious sudden trauma – typically an unexpected overload of the tissue in a single obvious event/moment)", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryTypeAnswer2", text: "Non-traumatic acute (no obvious traumatic event but clearly a result of OVERDOING IT on a SINGLE climb or session)", scores: { A: 1, B: 1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryTypeAnswer3", text: "None of these options apply to me, or I’m unsure", scores: { A: 1, B: 0, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    aromFist: {
        id: "aromFist",
        text: "How does the active range of motion fist test affect your injury?",
        video: "https://www.youtube.com/embed/Z9BT8RdYkZE?si=xL8ZdepxVNG-vcjl&rel=0",
        photos: [],
        answers: [
            { id: "aromFistAnswer1", text: "Unable to make a tight fist due to pain or a clicking/catching feeling on the side of the injured joint", scores: { A: -1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFistAnswer2", text: "Able to make a tight fist but have a clicking/catching feeling on the side of the injured joint", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFistAnswer3", text: "Able to make a tight fist without a clicking/catching feeling, but the test causes discomfort/pain in the side of the injured joint", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFistAnswer4", text: "No issues with active range of motion", scores: { A: 1, B: -1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    injuryDiscoloration: {
        id: "injuryDiscoloration",
        text: "Has there been any discoloration associated with the injury?",
        video: "https://www.youtube.com/embed/ZeESVjF9MDk?si=SPCvrlmlnJXHlkA-&rel=0",
        photos: [
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/cf08cf06-d9ca-4008-9ec0-aa988cb3a762/Primary+-+Question+5+-+Finger+right.jpg?content-type=image%2Fjpeg",
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/ea4c76b1-14f4-4681-be30-9c52f069279e/Primary+-+Question+5+-+Finger+left.jpg?content-type=image%2Fjpeg"
        ],
        answers: [
            { id: "injuryDiscolorationAnswer1", text: "Yes, on the left or right side of the PIP joint", scores: { A: -1, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer2", text: "No", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    injurySwelling: {
        id: "injurySwelling",
        text: "Has there been any swelling associated with the injury?",
        video: "",
        photos: [
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/cf08cf06-d9ca-4008-9ec0-aa988cb3a762/Primary+-+Question+5+-+Finger+right.jpg?content-type=image%2Fjpeg",
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/ea4c76b1-14f4-4681-be30-9c52f069279e/Primary+-+Question+5+-+Finger+left.jpg?content-type=image%2Fjpeg"
        ],
        answers: [
            { id: "injurySwellingAnswer1", text: "Yes, mainly in the left or right side of the PIP joint", scores: { A: -1, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injurySwellingAnswer2", text: "No", scores: { A: 1, B: 0, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    resistedFingerExtension: {
        id: "resistedFingerExtension",
        text: "How does the resisted finger extension test affect your injury?",
        video: "https://www.youtube.com/embed/GKdMHktjdz4?si=RrZe_seS2KDvpndf&rel=0",
        photos: [],
        answers: [
          { id: "resistedFingerExtensionAnswer1", text: "Discomfort/pain starts with minimal (1-2 out of 10) force", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
          { id: "resistedFingerExtensionAnswer2", text: "Discomfort/pain starts with mild (3-4 out of 10) force", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
          { id: "resistedFingerExtensionAnswer3", text: "Discomfort/pain starts with moderate (5-7 out of 10) force", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
          { id: "resistedFingerExtensionAnswer4", text: "Discomfort/pain starts with heavy (8-10 out of 10) force", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
          { id: "resistedFingerExtensionAnswer5", text: "No discomfort/pain even with heavy (8-10 out of 10) force", scores: { A: 2, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
      }

}
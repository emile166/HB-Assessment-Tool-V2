export const COLLATERAL_LIGAMENT_SEVERITY_DATA = {

    injuryType: {
        id: "injuryType",
        text: "What type of injury did you sustain?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "injuryTypeAnswer1", text: "Traumatic (occurred as a result of sudden trauma – typically characterized by an unexpected overload of the tissue in a single obvious event/moment)", scores: { A: 1, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryTypeAnswer2", text: "Non-traumatic acute (occurred in a single session or single climb but not as a result of any obvious traumatic event or overload)", scores: { A: 1, B: 1, C: -100, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryTypeAnswer3", text: "None of these options apply to me, or I’m unsure", scores: { A: 1, B: 0, C: -100, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    injuryDiscoloration: {
        id: "injuryDiscoloration",
        text: "Has there been any discoloration associated with the injury?",
        video: "placeholderID",
        photos: [
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/cf08cf06-d9ca-4008-9ec0-aa988cb3a762/Primary+-+Question+5+-+Finger+right.jpg?content-type=image%2Fjpeg",
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/ea4c76b1-14f4-4681-be30-9c52f069279e/Primary+-+Question+5+-+Finger+left.jpg?content-type=image%2Fjpeg"
        ],
        answers: [
            { id: "injuryDiscolorationAnswer1", text: "Yes, on the left or right side of the injured joint", scores: { A: -1, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injuryDiscolorationAnswer2", text: "No", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    injurySwelling: {
        id: "injurySwelling",
        text: "Has there been any swelling associated with the injury?",
        video: "placeholderID",
        photos: [
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/cf08cf06-d9ca-4008-9ec0-aa988cb3a762/Primary+-+Question+5+-+Finger+right.jpg?content-type=image%2Fjpeg",
            "https://images.squarespace-cdn.com/content/5e3ca2f99bfdc338a02cefb9/ea4c76b1-14f4-4681-be30-9c52f069279e/Primary+-+Question+5+-+Finger+left.jpg?content-type=image%2Fjpeg"
        ],
        answers: [
            { id: "injurySwellingAnswer1", text: "Yes, on the left or right side of the injured joint", scores: { A: -1, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "injurySwellingAnswer2", text: "No", scores: { A: 1, B: 0, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    aromPositionThree: {
        id: "aromPositionThree",
        text: "What are your active range of motion test results in position three?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "aromPositionThreeAnswer1", text: "Normal range of motion and no discomfort/pain associated with my injury", scores: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromPositionThreeAnswer2", text: "Normal range of motion but some discomfort/pain associated with my injury", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromPositionThreeAnswer3", text: "Limited range of motion due to discomfort/pain associated with my injury", scores: { A: 0, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    lateralStressTestPain: {
        id: "lateralStressTestPain",
        text: "Does the lateral stress test cause discomfort/pain associated with your injury?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "lateralStressTestPainAnswer1", text: "Yes", scores: { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "lateralStressTestPainAnswer2", text: "No", scores: { A: 1, B: -1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    lateralStressTestLaxity: {
        id: "lateralStressTestLaxity",
        text: "Does the lateral stress test show joint laxity?",
        video: "placeholderID",
        photos: [],
        answers: [
            { id: "lateralStressTestLaxityAnswer1", text: "Yes", scores: { A: -2, B: 0, C: 2, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "lateralStressTestLaxityAnswer2", text: "No obvious laxity, but the joint feels slightly more mobile than usual", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "lateralStressTestLaxityAnswer3", text: "No obvious laxity or increased mobility", scores: { A: 1, B: 0, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

}
export const JOINT_CAPSULITIS_SEVERITY_DATA = {
    aromFist: {
        id: "aromFist",
        text: "How does the active range of motion fist test affect your injury?",
        video: "https://www.youtube.com/embed/Z9BT8RdYkZE?si=tYbSG3Swaa8o09DA&rel=0",
        photos: [],
        answers: [
            { id: "aromFistAnswer1", text: "Unable to make a tight fist due to discomfort/pain or stiffness in the joint", scores: { A: -1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFistAnswer2", text: "Full range of motion but some discomfort/pain or stiffness when making a tight fist", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFistAnswer3", text: "No discomfort/pain and full range of motion when making a tight fist", scores: { A: 1, B: 1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    aromFullFlexion: {
        id: "aromFullFlexion",
        text: "How does the full flexion active range of motion test affect your injury?",
        video: "https://www.youtube.com/embed/202D9iemtPc?si=7MPCUsLnRrtGPHQB&rel=0",
        photos: [],
        answers: [
            { id: "aromFullFlexionAnswer1", text: "Full range of motion", scores: { A: 1, B: -1, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFullFlexionAnswer2", text: "Mild to moderate range of motion limitation", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "aromFullFlexionAnswer3", text: "Significant range of motion limitation", scores: { A: -1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    symptomDuration: {
        id: "symptomDuration",
        text: "For approximately how long have these changes or symptoms in your joint been happening?",
        video: "",
        photos: [],
        answers: [
            { id: "symptomDurationAnswer1", text: "One month or less", scores: { A: 1, B: 0, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "symptomDurationAnswer2", text: "More than one month but less than six months", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "symptomDurationAnswer3", text: "Six months or more", scores: { A: -1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    },

    jointEnlargement: {
        id: "jointEnlargement",
        text: "Approximately how much enlargement has your joint experienced?",
        video: "",
        photos: [],
        answers: [
            { id: "jointEnlargementAnswer1", text: "No noticeable enlargement", scores: { A: 1, B: 0, C: -1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "jointEnlargementAnswer2", text: "Slightly larger than normal, but not super noticeable", scores: { A: 1, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "jointEnlargementAnswer3", text: "Obviously enlarged to the point where the joint sticks out quite a bit", scores: { A: -1, B: 0, C: 1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } },
            { id: "jointEnlargementAnswer4", text: "Somewhere between answers two and three", scores: { A: 0, B: 1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0 } }
        ],
        multiple: false,
        conditions: []
    }
}
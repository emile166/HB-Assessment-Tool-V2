I’m creating a new questionnaire called Pulley Injury Severity Assessment. I’ve already created the file (PulleySeverityQuestionnaire.jsx) and copied and pasted all the code from the PrimaryQuestionnaire.jsx file. I’ve changed the name of the function from PrimaryQuestionnaire to PulleySeverityQuestionnaire. This new questionnaire should operate very similarly to the other questionnaires, but as usual the results logic needs to be unique and the injury mapping is different (see injuryMapping.js file for reference).

I need you to translate the results logic I originally wrote for a google sheet (written below) into logic that works in this assessment app and that is consistent with the way the logic is written for the other questionnaires. I’ve put a comment on line 158 to show you where I think the logic should go.

One thing that is different about the results logic for this questionnaire compared to the other ones is that this one requires an additional “displayed results” component for the location of the injury (which should be displayed below the regular displayedResults section on the results page under the heading “Your responses suggestion this location:”). Basically, the displayed results for this questionnaire are broken into two parts: the grade of the injury and the location of the injury. The grade and locations are containd in the injury mapping, where A-E are grades and F-K are locations.

Make sure you use question IDs and answer IDs rather than indices in the logic whenever possible to ensure the code is flexible.

Before you generate the code and tell me how to implement it, is there any other information you need to know from me to complete this task?



Here is the information about the google sheet references:

C20=displayedResult
C23=displayedResultLocation
C26=resultsSummary
C10=first location result name
[SevScoring]'!C8=grade IVb score

D3=first grade score
B3=first grade key
D4=second grade score
B4=second grade key
D5=third grade score
B5=third grade key

D10=first location score
B10=first location key
D11=second location score
B11=second location key
D12=third location score
B12=third location key



resultsSummary:

IFS(  
	C20="Grade IVb", "⚕️ Medical evaluation is needed.",
	C20=“Grade IVa”, “🧑‍⚕️ Medical diagnosis required before treatment.”,        
	C20="Data Unclear (Grade IVb Warning)", "😓 Something’s wrong here…",
	AND(REGEXMATCH(C20, "Grade"), C23<>"Data Unclear", C23<>"None"), "🥳 Success! You’ve completed the assessment.",
	AND(C20="Data Unclear", C23="Data Unclear"), "🤔 Something’s wrong here…",
	AND(C20="Data Unclear", C23<>"Data Unclear", C23<>"None"), "😞 Something’s wrong here…",
	AND(REGEXMATCH(C20, "Grade"), C23="Data Unclear"), "🙏 So close! Revisit location-based questions.",
	TRUE, "🙃 Sorry, there seems to be an error.”
)



displayedResult:

IFS(
        D3>=D4+3, C3,

        AND(D3<D4+3, '[SevScoring]'!C8>=5), "Data Unclear (Grade IVb Warning)",

        AND(D3<D4+3, D3>D4, D4>=D5+3),
                IFS(
                        AND(REGEXMATCH(B3, "A|B"), REGEXMATCH(B4, "A|B")), "Grade II",
                        AND(REGEXMATCH(B3, "B|C"), REGEXMATCH(B4, "B|C")), "Grade III",
                        AND(REGEXMATCH(B3, "C|D"), REGEXMATCH(B4, "C|D")), "Grade IVa",
                        AND(REGEXMATCH(B3, "D|E"), REGEXMATCH(B4, "D|E")), "Grade IVb",
                        TRUE, "Data Unclear"
                ),
        
        AND(D3=D4, D4>=D5+2),
                IFS(
                        AND(REGEXMATCH(B3, "A|B"), REGEXMATCH(B4, "A|B")), "Grade II",
                        AND(REGEXMATCH(B3, "B|C"), REGEXMATCH(B4, "B|C")), "Grade III",
                        AND(REGEXMATCH(B3, "C|D"), REGEXMATCH(B4, "C|D")), "Grade IVa",
                        AND(REGEXMATCH(B3, "D|E"), REGEXMATCH(B4, "D|E")), "Grade IVb",
                        TRUE, "Data Unclear"
                ),

        TRUE, "Data Unclear"
)



displayedResultLocation:

IFS(
        C20 = "Data Unclear (Grade IVb Warning)", "Data Unclear",

        C20 = "Grade IVb", "A2+A3+A4",

        D10>=D11+2,
                IFS(
                        C20="Data Unclear", C10,

                        AND(OR(C20="Grade I", C20="Grade II", C20="Grade III"), REGEXMATCH(B10, "F|G|H")), C10,

                        AND(C20="Grade IVa", REGEXMATCH(B10, "I|J")), C10,

                        AND(C20="Grade IVa", D11>D12, AND(REGEXMATCH(B10, "F|G|I"), REGEXMATCH(B11, "F|G|I"))), "A2+A3",
                        AND(C20="Grade IVa", D11>D12, AND(REGEXMATCH(B10, "G|H|J"), REGEXMATCH(B11, "G|H|J"))), "A3+A4",

                        AND(C20="Grade IVa", D11=D12, AND(REGEXMATCH(B10, "F|G|I"), REGEXMATCH(B11, "F|G|I"), REGEXMATCH(B12, "F|G|I"))), "A2+A3",
                        AND(C20="Grade IVa", D11=D12, AND(REGEXMATCH(B10, "G|H|J"), REGEXMATCH(B11, "G|H|J"), REGEXMATCH(B12, "G|H|J"))), "A2+A3",

                        TRUE, "Data Unclear"
                ),

        AND(D10<D11+2, D10>D11),
                IFS(
                        OR(C20="Grade I", C20="Grade II", C20="Grade III"), "Data Unclear",

                        AND(C20="Grade IVa", D11>D12, AND(REGEXMATCH(B10, "F|G|I"), REGEXMATCH(B11, "F|G|I"))), "A2+A3",
                        AND(C20="Grade IVa", D11>D12, AND(REGEXMATCH(B10, "G|H|J"), REGEXMATCH(B11, "G|H|J"))), "A3+A4",

                        AND(C20="Grade IVa", D11=D12, AND(REGEXMATCH(B10, "F|G|I"), REGEXMATCH(B11, "F|G|I"), REGEXMATCH(B12, "F|G|I"))), "A2+A3",
                        AND(C20="Grade IVa", D11=D12, AND(REGEXMATCH(B10, "G|H|J"), REGEXMATCH(B11, "G|H|J"), REGEXMATCH(B12, "G|H|J"))), "A2+A3",

                        TRUE, "Data Unclear"
                ),

        D10=D11,
                IFS(
                        OR(C20="Grade I", C20="Grade II", C20="Grade III"), "Data Unclear",

                        AND(C20="Grade IVa", D11>=D12, D12>D13, AND(REGEXMATCH(B10, "F|G|I"), REGEXMATCH(B11, "F|G|I"))), "A2+A3",
                        AND(C20="Grade IVa", D11>=D12, D12>D13, AND(REGEXMATCH(B10, "G|H|J"), REGEXMATCH(B11, "G|H|J"))), "A3+A4",

                        TRUE, "Data Unclear"
                ),

        TRUE, "Data Unclear"
)



additionalDetails:

IFS(
        REGEXMATCH(C26, "🙃"), "This is strange; you may have encountered a bug. Please refresh this page and try again. If you continue to receive this result, please email us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to info@hoopersbeta.com and we will be happy to assist you. We apologize for the inconvenience.",   

        REGEXMATCH(C26, "⚕️"), "A grade IVb pulley injury involves complete ruptures of multiple pulleys. Due to the complexity of this injury and the possibility of other complicating factors, your first step should be to see your primary care physician. They will likely order imaging to confirm the extent of the damage while ruling out involvement of other tissues. They will then help you decide if you will need surgical intervention or if you can begin conservative treatment.",  

        REGEXMATCH(C26, "🧑‍⚕️"), "A grade IVa injury means two adjacent pulley tears. This grade of injury can be treated conservatively with a guided recovery program. However, before starting any treatment you must obtain a proper diagnosis from a qualified professional (using ultrasound or MRI) to rule out the possibility of a grade IVb injury, which is a more severe injury that may require surgery. This assessment tool is not a diagnostic tool and as such is not a replacement for proper medical advice.",     

        REGEXMATCH(C26, "🥳"), "Great job completing the pulley severity assessment! Your answers are associated with a clear grade and location of injury. Huzzah!",

        REGEXMATCH(C26, "😓"), "Your answers did not indicate a clear result; however, they do show the possibility of a Grade IVb pulley injury, which is a rupture of multiple pulleys. If this does not sound right to you, please retake the severity questionnaire and make sure you are as accurate and specific as possible with your answers. If you continue to receive the same result, your condition may simply require professional evaluation. You can schedule an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.",

        REGEXMATCH(C26, "🤔"), "Your answers did not indicate a clear grade or location of injury. If you are certain you have a pulley injury, please retake the severity questionnaire and make sure you are as accurate and specific as possible with your answers. If you continue to receive the same result, your condition may simply require professional evaluation. You can schedule an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.",

        REGEXMATCH(C26, "😞"), "Your answers did not indicate a clear grade. If you are certain you have a pulley injury, please retake the severity questionnaire and make sure you are as accurate and specific as possible with your answers. If you continue to receive the same result, your condition may simply require professional evaluation. You can schedule an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.",

        REGEXMATCH(C26, "🙏"), "Your results indicate a clear grade of injury, but the location is not clear. Please retake this assessment and pay special attention to questions related to the location of your injury, ensuring you’re being as accurate and specific as possible with your answers. If you continue to receive the same result, your condition may simply require professional evaluation. You can start by emailing us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to info@hoopersbeta.com and we will be happy to assist you if you can. Alternatively, you can speed up the process by scheduling an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.",

        TRUE, "This is strange; you may have encountered a bug. Please refresh this page and try again. If you continue to receive this result, please email us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to  info@hoopersbeta.com and we will be happy to assist you. We apologize for the inconvenience."

)




Here is some additional logic (written in plain English) that is not a part of the google sheet:

checkForEarlyCompletion conditions:

1. After answering the first three questions of this questionnaire (injuryType, obviousSound, and visibleBowstringing), check the answers. If the user has selected injuryTypeAnswer1, obviousSoundAnswer1, and visibleBowstringingAnswer1, the user should be taken to the results page and the displayedResult should be Grade IVb.

2. Before the user is shown the tissueLoadingDrag question, check to see if Grade III, Grade IVa, or Grade IVb is the top scoring grade result. If one of them is, and it has two or more points than the other grades, then the user should be taken to the results page.

3. Before the user is shown the injuredPulley question, check to see if the current top-scoring location has two or more points than the rest of the locations. If so, the user should be taken to the results page.
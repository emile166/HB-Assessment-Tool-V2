I’ve added a new severity questionnaire called LumbricalSeverityQuestionnaire.jsx. I’ve copied and pasted all the code from the FDPSeverityQuestionnaire.jsx file into this new LumbricalSeverityQuestionnaire.jsx file. I’ve changed the name of the function from FDPSeverityQuestionnaire to LumbricalSeverityQuestionnaire. This new questionnaire should operate very similarly to the other questionnaires, but as usual the results logic needs to be unique. I’ve added the appropriate injury mapping to the injuryMapping.js file under the heading ‘Lumbrical Injury Severity Assessment’, where A=Grade I, B=Grade II, and C=Grade III.

I need you to translate the results logic I originally wrote for a google sheet (written below) into logic that works in this assessment app and that is consistent with the way the logic is written for the other questionnaires. I’ve put a comment on line 167 to show you where I think the logic should go.

Make sure you use question IDs and answer IDs rather than indices in the logic whenever possible to ensure the code is flexible.

Before you generate the code and tell me how to implement it, is there any other information you need to know from me to complete this task?

Here is a key so you know what the google sheet logic is referencing:
D3=first grade score
B3=first grade key
D4=second grade score
B4=second grade key
D5=third grade score
B5=third grade key
C3=first grade name
C4=second grade name
C5=third grade name
C10=displayedResult
C13=versionResult
C16=resultsSummary
Severity!C495=injuryMechanismAnswer1
Severity!D495=injuryMechanismAnswer2


resultsSummary:

IFS(
        REGEXMATCH(C10, "Grade"), "🥳 Success! You’ve completed the assessment.",
        C10="Data Unclear", "🤔 Something’s wrong here…",
        TRUE, "🙃 Sorry, there seems to be an error."
)


displayedResult:

IFS(
        D3>=D4+3, C3,
        AND(D3<D4+3, D3>=D4, D4>=D5+3),
                IFS(
                        AND(REGEXMATCH(B3, "A|B"), REGEXMATCH(B4, "A|B")), "Grade II",
                        AND(REGEXMATCH(B3, "B|C"), REGEXMATCH(B4, "B|C")), "Grade III",
                        TRUE, "Data Unclear"
                ),
        TRUE, "Data Unclear"
)


versionResult:

IFS(
        AND(Severity!C495=TRUE, Severity!D495=FALSE), "Standard Version",
        AND(Severity!C495=FALSE, Severity!D495=TRUE), "Two-Finger Pocket Version",
        TRUE, "None"
)


additionalDetails:

IFS(
        REGEXMATCH(C15, "🙃"), "This is strange; you may have encountered a bug. Please refresh this page and try again. If you continue to receive this result, please email us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to  info@hoopersbeta.com and we will be happy to assist you. We apologize for the inconvenience.",
        REGEXMATCH(C15, "🥳"), "Great job completing the lumbrical injury severity questionnaire! Your answers are associated with a clear grade of injury. Huzzah!",
        REGEXMATCH(C15, "🤔"), "Your answers did not indicate a clear grade of injury. If you’re certain you have a lumbrical injury, please retake the severity questionnaire and make sure you are as accurate and specific as possible with your answers. If you continue to receive the same result, your condition may simply require professional evaluation. You can start by emailing us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to info@hoopersbeta.com and we will be happy to assist you if you can. Alternatively, you can speed up the process by scheduling an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.",
        TRUE, "This is strange; you may have encountered a bug. Please refresh this page and try again. If you continue to receive this result, please email us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to  info@hoopersbeta.com and we will be happy to assist you. We apologize for the inconvenience."
)
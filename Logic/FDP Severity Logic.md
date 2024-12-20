I’ve added a new severity questionnaire called FDPSeverityQuestionnaire.jsx. I’ve copied and pasted all the code from the PulleySeverityQuestionnaire.jsx file into this new FDPSeverityQuestionnaire.jsx file. I’ve changed the name of the function from PulleySeverityQuestionnaire to FDPSeverityQuestionnaire. This new questionnaire should operate very similarly to the other questionnaires, but as usual the results logic needs to be unique. I’ve added the appropriate injury mapping to the injuryMapping.js file under the heading ‘FDP Injury Severity Assessment’, where A=Grade I, B=Grade II, and C=Grade III.

I need you to translate the results logic I originally wrote for a google sheet (written below) into logic that works in this assessment app and that is consistent with the way the logic is written for the other questionnaires. I’ve put a comment on line 152 to show you where I think the logic should go.

Rather than having a locationResult variable like the Pulley Severity Questionnaire, this questionnaire has a versionResult variable which will need to be added and handled in the results display.

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
Severity!C269=injuryMechanismAnswer1
Severity!D269=injuryMechanismAnswer2
Severity!C279=fifthDigitAnswer1
Severity!D279=fifthDigitAnswer2



resultsSummmary:

IFS(
	C10="Grade III", "⚕️ Medical evaluation is needed.",
	AND(REGEXMATCH(C10, "Grade"), C13<>"Data Unclear", C13<>"None"), "🥳 Success! You’ve completed the assessment.",
	AND(REGEXMATCH(C10, "Grade"), C13="Data Unclear"), "🙏 So close! Some clarification is needed.”,
	AND(C10="Data Unclear", C13<>"Data Unclear", C13<>"None"), "😞" Something’s wrong here…",
	AND(C10="Data Unclear", C13="Data Unclear"), "🤔 Something’s wrong here…",
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
	AND(Severity!D269=TRUE, Severity!C279=TRUE), "5th Digit (Pinky Finger) Version",
	AND(Severity!C269=TRUE, Severity!D279=TRUE), "Two-Finger Pocket Version",
	AND(Severity!C269=TRUE, Severity!C279=TRUE), "5th Digit (Pinky Finger) Version",
	AND(Severity!D269=TRUE, Severity!D279=TRUE), "Standard Version",
	TRUE, "Data Unclear"
)



additionalDetails:

IFS(
        REGEXMATCH(C16, "🙃"), "This is strange; you may have encountered a bug. Please refresh this page and try again. If you continue to receive this result, please email us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to info@hoopersbeta.com and we will be happy to assist you. We apologize for the inconvenience.",

        REGEXMATCH(C16, "⚕️"), "Your answers are associated with a Grade III injury, which is a tear or rupture of the FDP. Your first step should be to schedule an appointment with your primary care physician who will likely need to order imaging to confirm the injury. They will then guide you on what steps to take next, whether that be conservative treatment or a surgical referral.”,

        REGEXMATCH(C16, "🥳"), "Great job! You've completed the assessment. Huzzah!",

        REGEXMATCH(C16, "🙏"), "Your answers are associated with a clear grade of injury, but the location results are unclear which makes it hard to determine the correct recovery protocol version. Please retake this assessment and make sure you have answered all questions as accurately as possible. If you continue to receive the same result, your condition may simply require professional evaluation. You can start by emailing us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to info@hoopersbeta.com and we will be happy to assist you if you can. Alternatively, you can speed up the process by scheduling an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.",

        REGEXMATCH(C16, "😞"), "Your answers did not indicate a clear grade of injury. If you are certain you have an FDP injury, please retake the severity questionnaire and make sure you are as accurate and specific as possible with your answers. If you continue to receive the same result, your condition may simply require professional evaluation. You can start by emailing us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to info@hoopersbeta.com and we will be happy to assist you if you can. Alternatively, you can speed up the process by scheduling an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.",

        REGEXMATCH(C16, "🤔"), "Your answers did not indicate a clear grade or location of injury. If you’re certain you have an FDP injury, please retake the severity questionnaire and make sure you are as accurate and specific as possible with your answers. If you continue to receive the same result, your condition may simply require professional evaluation. You can start by emailing us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to info@hoopersbeta.com and we will be happy to assist you if you can. Alternatively, you can speed up the process by scheduling an online or in-person appointment with Dr. Jason Hooper, PT, DPT, OCS, SCS by going here: https://www.hoopersbeta.com/private-sessions.",

        TRUE, "This is strange; you may have encountered a bug. Please refresh this page and try again. If you continue to receive this result, please email us screenshots of your answer log and scores (enter code ‘hb-debug’ into the debug field below) to  info@hoopersbeta.com and we will be happy to assist you. We apologize for the inconvenience."
)
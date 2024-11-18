I want to add another questionnaire to this app. It should be called “Differential Assessment 1” and should be the same as the primary questionnaire but with different questions, answers, videos, photos, scoring, and resutls logic. Below I’ve listed the information you need to translate the google sheets logic (where the questionnaire was originally built) into a questionnaire within this app. Please translate this logic the same way that you have for the primary questionnaire. Before you generate the code and tell me how to implement it, is there any other information you need to know from me to complete this task?


- Here is the information about the google sheet references in the logic:

The injury score mapping is the same as for the primary questionnaire (A=“pulley injury grade I-II”, B=“pulley injury grade III-IV”, etc.).
B3:B7 are the injury IDs (A, B, C, D, etc.).
C3:C7 are the names of the injuries (cyst, lumbrical injury, pulley injury grade I-II, etc.).
D3:D7 are the scores for each injury. C12 is the cell that shows the displayed result.
C15 is the cell that shows the results summary.
D17 is the cell that shows teh nerve issue possibility result.
D18 is the cell that shows the cyst indication result.
C20 is the cell that shows the additional information.
[MainScoring]'!C48 is the nerve issue combined score from the primary assessment and differential assessment 1.
Differential!D99=TRUE means they answered “no” to “Do any of the nerve tension tests create symptoms at or very near to your injury site?” on differential assessment 1 and Differential!C99=TRUE means they answered “yes.”
Differential!C111=TRUE means they answered “yes” to “Do any of the nerve tension tests create more intense symptoms anywhere in your injured arm compared to your uninjured arm (not including the neck and upper traps)?” on differential assessment 1 and Differential!D111=TRUE means they answered “no.”
Primary!C96=TRUE means they answered “yes” to “Can you feel an abnormal mass/lump at (or very near to) the area of discomfort/pain?” on the primary questionnaire.
Differential!C57=TRUE means they answeres “yes” to “Have you recovered from another injury to the same finger within the last six months that caused discomfort/pain in the same area?” on differential assessment 1.
[MainScoring]'!C49 is the cyst combined score from the primary assessment and differential assessment 1.
Primary!C14=TRUE means they answered “traumatic” to “What type of injury did you sustain?” on the primary questionnaire.
Primary!C96=FALSE means they did not choose “yes” to “Can you feel an abnormal mass/lump at (or very near to) the area of discomfort/pain?” on the primary questionnaire.
Differential!C57=FALSE means they did not choose “yes” to “Have you recovered from another injury to the same finger within the last six months that caused discomfort/pain in the same area?” on differential assessment 1.
Primary!C14=FALSE means they did not answer “traumatic” to “What type of injury did you sustain?” on the primary questionnaire.



- Here is the logic for the results summary:

IFS(
B3="J", "😔"&CHAR(10)&"This isn't the tool for you.",

AND(D3>=D4+2, REGEXMATCH(B3, "[GDFNEABK]")),
        "🎉"&CHAR(10)&"Success! Move on to severity assessment.",

D3>=D4+2, "🥳"&CHAR(10)&"Success! You've completed the assessment.",

AND('[MainScoring]'!C48=D3, D4>D5,
        OR(
                AND(Differential!D99=TRUE, Differential!C111=TRUE),
                Differential!C99=TRUE,
                AND(Differential!D99=TRUE, Differential!D111=TRUE)
        )
), IF(OR(REGEXMATCH(B3, "[GDFNEABK]"), REGEXMATCH(B4, "[GDFNEABK]")),
        "💪"&CHAR(10)&"Success! Move on to severity assessment and be aware of the potential nerve issue.", 
        "⚡"&CHAR(10)&"Success! You've completed the assessment"
   ),

AND(D3>D4, B3="I", Primary!C96=TRUE, Differential!C57=TRUE),
        "🥳"&CHAR(10)&"Success! You've completed the assessment.",

AND(D3>=D5+1, D4>D5, REGEXMATCH(B3, "[AB]"), REGEXMATCH(B4, "[AB]")),
        "🎉"&CHAR(10)&"Success! Move on to severity assessment.",

AND(D3>=D4, D4>=D5+2, REGEXMATCH(B3, "[DE]"), REGEXMATCH(B4, "[DE]")),
        "🎊"&CHAR(10)&"Success! Move on to severity assessment.",

AND(D3>=D4, D4=D5+1, REGEXMATCH(B3, "[DE]"), REGEXMATCH(B4, "[DE]")),
        "🎊"&CHAR(10)&"Success! Move on to severity assessment.",

D3<=D4+1, "🤔"&CHAR(10)&"Something's wrong here...",

TRUE, "🙃"&CHAR(10)&"Sorry, there seems to be an error."
)



- Here is the logic for the displayed result:

IFS(
REGEXMATCH(C15, "💪"), C3&" and "&C4,
REGEXMATCH(C15, "⚡"), C3&" and "&C4,
REGEXMATCH(C15, "🎉"), C3,
REGEXMATCH(C15, "🥳"), C3,
REGEXMATCH(C15, "🎊"), C3&" and "&C4,
REGEXMATCH(C15, "🤔"), "Data Unclear",
REGEXMATCH(C15, "😔"), "Possible Growth Plate Fracture"
)


- Here is the logic for the nerve issue possibility:

IFS(
        '[MainScoring]'!C48=D3-2,
                IFS(
                        AND(Differential!D99=TRUE, Differential!C111=TRUE), "None",
                        Differential!C99=TRUE, "⚠️ Medium",
                        AND(Differential!D99=TRUE, Differential!D111=TRUE), "None",
                        TRUE, "None"
                ),

        AND('[MainScoring]'!C48<D3, '[MainScoring]'!C48>D3-2),
                IFS(
                        AND(Differential!D99=TRUE, Differential!C111=TRUE), "⚠️ Medium",
                        Differential!C99=TRUE, "⚠️ High",
                        AND(Differential!D99=TRUE, Differential!D111=TRUE), "⚠️ Medium",
                        TRUE, "None"
                ),
                
        AND('[MainScoring]'!C48=D3, D4>5),
                IFS(
                        AND(Differential!D99=TRUE, Differential!C111=TRUE), "⚠️ Medium",
                        Differential!C99=TRUE, "⚠️ High",
                        AND(Differential!D99=TRUE, Differential!D111=TRUE), "⚠️ Data Unclear",
                        TRUE, "None"
                ),

        Differential!D99=TRUE, "⚠️ Medium",

        TRUE, "None"
)




- Here is the logic for the cyst indication:

        IFS(
                REGEXMATCH(C12, "Cyst"), "⚠️ Yes",

                '[MainScoring]'!C49>=D3-1, "⚠️ Yes",

                AND('[MainScoring]'!C49<D3-1, '[MainScoring]'!C49>=D3-2, Primary!C14=TRUE),
                        "None",

                AND('[MainScoring]'!C49<D3-1, '[MainScoring]'!C49>=D3-2, Primary!C96=FALSE, Differential!C57=FALSE),
                        "None",

                AND('[MainScoring]'!C49<D3-1, '[MainScoring]'!C49>=D3-2, Primary!C96=TRUE),
                        "⚠️ Yes",

                AND('[MainScoring]'!C49<=D3-3, Primary!C96=FALSE),
                        "None",

                AND('[MainScoring]'!C49<=D3-3, Primary!C14=FALSE, Primary!C96=TRUE),
                        "Mild",

                AND('[MainScoring]'!C49>=D3-5, Primary!C96=TRUE), "⚠️ Yes",

                '[MainScoring]'!C49<D3-5, "None",

                TRUE, "None"
        )




- Here is the logic for the additional details:

        IFS(

                C12 = "Nerve Issue",  "Great job complete the assessment thus far! Your answers are strongly associated with a nerve issue."&CHAR(10)&CHAR(10)&"If the affected finger is the second (index) or third (middle) digit, the culprit is most often the median nerve."&CHAR(10)&CHAR(10)&"If the affected finger is the fifth (pinky) digit, the culprit is most often ulnar nerve."&CHAR(10)&CHAR(10)&"If the affected finger is the fourth (ring) digit, please complete the nerve assessment (located in the 'Severity' tab) to help determine which nerve is most often associated with your symptoms.",               

                REGEXMATCH(C15, "🎉"),
                        "Great job completing the differential assessment! Based on your results, you should now move on to severity assessment.",

                REGEXMATCH(C15, "💪"),
                        "Great job completing the differential assessment! Your answers are associated with a multi-faceted condition involving a possible nerve issue. Your next step will be to complete the severity assessment for your non-nerve issue. However, please continue reading below to find out more about your how the nerve issue may affect things.",

                REGEXMATCH(C15, "⚡"),
                        "Great job completing the differential assessment! Your answers are associated with a multi-faceted condition involving a possible nerve issue. You do not need to complete a severity assessment at this time. However, please continue reading below to find out more about your how the nerve issue may affect things.",

                REGEXMATCH(C15, "🥳"),
                        "Great job! You have completed the assessment. (You do not need to complete a severity assessment.) Heck yes!", 

                REGEXMATCH(C15, "🎊"),
                        "Great job completing the differential assessment! Your answers are associated with both an FDP injury and a lumbrical injury. These two injuries frequently occur together. For this reason, you should complete the appropriate severity assessments for both injuries. If your severity assessment results indicate different grades for each injury (e.g. FDP is grade I and lumbrical is grade II), choose your Recovery Blueprint based on the highest grade.",
    
                REGEXMATCH(C15, "🤔"), 
                        "Your answers indicate too many possibilities for a valid assessment. This can be due to multiple confounding factors, such as the possibility of two or more concurrent injuries. If you believe you performed all the tests properly and chose accurate answers, this may be the case for you. If so, you can email a link to your Answer Sheet to courses@hoopersbeta.com and we will be happy to assist you.",
    
                REGEXMATCH(C15, "😔"), 
                        "If you're seeing this, you may have been sent to this assessment by mistake; it not designed to handle the possibility of growth plate fractures.",

                REGEXMATCH(C15, "🙃"), 
                        "This is strange. Something has gone wrong with your Answer Sheet or you’ve encountered a bug. Please make a new copy of the Answer Sheet from the Master Copy and try again. If you continue to receive this result, please email your Answer Sheet to info@hoopersbeta.com and we will be happy to assist you. We apologize for the inconvenience."

        ) &
  
        IFS(
                C12 = "Nerve Issue", "",

                AND(D17="⚠️ High", REGEXMATCH(C15, "🤔")=FALSE), 
                        CHAR(10)&CHAR(10)&"➡️ Please note: Your answers are associated with a high possibility of a nerve issue. Nerve issues can mask or mimic symptoms from other injuries, which can make them tricky to assess (and which can make assessing other injuries more challenging as well). We recommend the following course of action if you have approval from a qualified medical professional:"
&CHAR(10)&"1. Start treatment for the nerve issue."
&CHAR(10)&"2. In one to two days, retake this assessment (or, if you’re pressed for time, just retake Differential Assessment 1)."
&CHAR(10)&"3. If your final results change, simply follow the new recommendations on the Answer Sheet."
&CHAR(10)&"4. If your final results do not change, continue treatment for the nerve issue and, if applicable, begin treatment for your other condition as well."
&CHAR(10)&"5. If your symptoms do not change after a week or two or you would like a more definitive assessment that can account for the potential nerve issue, you’ll need to schedule an appointment with a qualified medical professional that has experience with nerve issues and, ideally, rock climbers.",

                AND(D17="⚠️ High", REGEXMATCH(C15, "🤔")=TRUE), 
                        CHAR(10)&CHAR(10)&"➡️ Please note: Your answers are associated with a high possibility of a nerve issue, which could be affecting your symptoms and therefore this assessment. Nerve issues can mask or mimic symptoms from other injuries, which can make them tricky to deal with. Be aware that a nerve issue is a possible confounding factor that may need professional evaluation.",
               
                AND(D17="⚠️ Medium", REGEXMATCH(C15, "🤔")=FALSE),
                        CHAR(10)&CHAR(10)&"➡️ Please note: During testing, you indicated a positive nerve tension test. Based on your results, it is possible your symptoms are associated with a nerve issue as well as a separate injury. We recommend the following course of action if you have approval from a qualified medical professional:"
&CHAR(10)&"1. Begin treatment for your primary (non-nerve) issue. (*Be sure to complete the severity assessment for your primary issue if instructed to do so by the Answer Sheet.*)"
&CHAR(10)&"2. In one to two days, retake the nerve tests (Question 9A and 9B in DDx 1). If your results are different, change your answer(s) accordingly in the Answer Sheet and see if that leads to a different result. (You can repeat the nerve tests every couple days to see if you can detect any change or correlation to your symptoms.)"
&CHAR(10)&"3. If your nerve tests don’t change, continue treating your primary issue and assess your progress after about a week. If your symptoms are improving, simply continue. If they are not improving, begin nerve treatment exercises as well."
&CHAR(10)&"4. If your symptoms do not change after a week or two, scheduling an appointment with a qualified medical professional who has experience with nerve issues and, ideally, rock climbers. They will be better able to determine if you do indeed have two concurrent issues or just one that is mimicking the other.",

                AND(D17="⚠️ Medium", REGEXMATCH(C15, "🤔")=TRUE),
                        CHAR(10)&CHAR(10)&"➡️ Please note: Your answers are associated with some possibility of a nerve issue, which could be affecting your symptoms and therefore diagnosis. Nerve issues can mask or mimic symptoms from other injuries, which can make them tricky to deal with. Be aware that a nerve issue is a possible confounding factor that may need professional evaluation.",

                D17="⚠️ Data Unclear",
                        CHAR(10)&CHAR(10)&"➡️ Please note: Your answers are associated with a high possibility of a nerve issue, yet you did not receive a positive result on either of the nerve tests (questions 9A and 9B in DDx 1). We recommend retaking the nerve tests and paying special attention to ensure you perform them correctly, as they are easy to get wrong. If your results do not change and you have approval from a qualified medical professional, consider adding some nerve exercises to your routine if treating your non-nerve issue does not improve your symptoms. You may also want to consider consulting with a medical professional if you continue to run into issues, as assessing and treating nerve issues can be complicated.",

                TRUE, ""

        ) &

        IFS(

                D18="⚠️ Yes",
                        CHAR(10)&CHAR(10)&"➡️ Please note: Your answers are associated with the possibility of a cyst in your finger. Cysts can cause various symptoms that mimic other injuries, which makes obtaining an accurate diagnosis more challenging. Be aware that a cyst is a possible confounding factor that may need professional evaluation with ultrasound.",

                D18="Mild",
                        CHAR(10)&CHAR(10)&"➡️ Please note: Your answer of 'yes' to 'do you feel an abnormal mass/lump in your finger?' is associated with the possibility of a cyst. Cysts can cause various symptoms that mimic other injuries, which makes obtaining an accurate diagnosis more challenging. Be aware that a cyst is a possible confounding factor that may need professional evaluation with ultrasound.",

                TRUE, ""

        )


- The logic for the injury descriptions is the same as in the primary questionnaire. However, if the displayed results contains more than one injury, the description for both injuries should be shown.
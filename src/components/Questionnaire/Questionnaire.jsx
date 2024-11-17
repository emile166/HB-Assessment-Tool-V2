import React, { useState, useEffect } from 'react';
import { injuryMapping } from '../../utils/injuryMapping';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { DISCLAIMER_TEXT } from '../../constants/disclaimer';
import VideoEmbed from '../VideoEmbed/VideoEmbed';
import { PRIMARY_VIDEO_IDS } from '../../constants/primary-questionnaire-videos';
import { PRIMARY_PHOTO_URLS } from '../../constants/primary-questionnaire-photos';
import ImageViewer from '../ImageViewer/ImageViewer';
import AppHeader from '../AppHeader/AppHeader';

function Questionnaire({ questionnaire, onBack }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [results, setResults] = useState({});
  const [skippedQuestions, setSkippedQuestions] = useState(new Set());
  const [displayedResult, setDisplayedResult] = useState('');
  const [resultsSummary, setResultsSummary] = useState('');
  const [nerveIssuePossibility, setNerveIssuePossibility] = useState('');
  const [cystIndication, setCystIndication] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [injuryDescription, setInjuryDescription] = useState('');
  const [debugMode, setDebugMode] = useState(false);
  const [debugCode, setDebugCode] = useState('');

  useEffect(() => {
    const handleKeyPress = (e) => {
      setDebugCode(prev => {
        const newCode = prev + e.key;
        // Only keep last 8 characters to prevent string from growing too long
        const trimmedCode = newCode.slice(-8);

        // Check if code matches
        if (trimmedCode === 'hb-debug') {
          setDebugMode(true);
        }

        return trimmedCode;
      });
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (showResults || currentQuestionIndex > 0) {
      window.scrollTo({
        top: 0,
      });
    }
  }, [showResults, currentQuestionIndex]);

  const handleAnswer = (questionIndex, answer) => {
    const newResponses = {
      ...responses,
      [questionIndex]: answer,
    };
    setResponses(newResponses);
  };

  const getNextQuestionIndex = (currentIndex) => {
    let nextIndex = currentIndex + 1;
    while (nextIndex < questionnaire.questions.length && skippedQuestions.has(nextIndex)) {
      nextIndex++;
    }
    return nextIndex;
  };

  const getPreviousQuestionIndex = (currentIndex) => {
    let prevIndex = currentIndex - 1;
    while (prevIndex >= 0 && skippedQuestions.has(prevIndex)) {
      prevIndex--;
    }
    return prevIndex;
  };

  const calculateScoresForAnswers = (currentResponses) => {
    const totalScores = {};

    // Add debug logging
    console.log('Questionnaire:', questionnaire);
    console.log('InjuryMapping:', injuryMapping);

    // Check if questionnaire and name exist
    if (!questionnaire || !questionnaire.name) {
      console.error('Questionnaire or questionnaire name is undefined');
      return totalScores;
    }

    // Check if mapping exists for this questionnaire
    if (!injuryMapping[questionnaire.name]) {
      console.error(`No injury mapping found for questionnaire: ${questionnaire.name}`);
      return totalScores;
    }

    // Initialize all injury scores to 0
    Object.keys(injuryMapping[questionnaire.name]).forEach(injuryCode => {
      totalScores[injuryCode] = 0;
    });

    questionnaire.questions.forEach((q, idx) => {
      if (skippedQuestions.has(idx)) return;

      const answer = currentResponses[idx];
      if (answer) {
        if (Array.isArray(answer)) {
          answer.forEach(a => {
            for (const [category, score] of Object.entries(a.scores)) {
              totalScores[category] = (totalScores[category] || 0) + score;
            }
          });
        } else {
          for (const [category, score] of Object.entries(answer.scores)) {
            totalScores[category] = (totalScores[category] || 0) + score;
          }
        }
      }
    });

    // Apply special scoring rules
    const answer1 = currentResponses[0]?.text;
    const answer3Responses = currentResponses[2];
    const answer4Responses = currentResponses[3];
    const answer9Responses = currentResponses[8];

    // Rule for question 3
    if (answer1 !== 'Traumatic' && answer1 !== 'Chronic' && answer3Responses) {
      const validAnswers = ['1', '2', '3', '7', '9', '11'];
      const hasValidAnswer = Array.isArray(answer3Responses) &&
        answer3Responses.some((ans, idx) => validAnswers.includes(String(idx + 1)));
      if (!hasValidAnswer) {
        totalScores['I'] = (totalScores['I'] || 0) - 1; // Subtract from Cyst score
      }
    }

    // Rule for question 4
    if (answer1 !== 'Traumatic' && answer1 !== 'Non-traumatic acute' && answer4Responses) {
      const validAnswers = ['1', '6'];
      const hasValidAnswer = Array.isArray(answer4Responses) &&
        answer4Responses.some((ans, idx) => validAnswers.includes(String(idx + 1)));
      if (!hasValidAnswer) {
        totalScores['I'] = (totalScores['I'] || 0) - 1; // Subtract from Cyst score
      }
    }

    // Rule for question 9
    if (answer9Responses) {
      const penaltyAnswers = ['1', '2', '3', '4', '5', '6'];
      const hasPenaltyAnswer = Array.isArray(answer9Responses) &&
        answer9Responses.some((ans, idx) => penaltyAnswers.includes(String(idx + 1)));
      if (hasPenaltyAnswer) {
        totalScores['H'] = (totalScores['H'] || 0) - 1; // Subtract from Nerve Issues score
      }
    }

    return totalScores;
  };

  const shouldSkipQuestion = (questionIndex) => {
    const answer1 = responses[0]?.text;
    const answer5 = responses[4];
    const answer11 = responses[10]?.text;
    const answer12 = responses[11]?.text;

    switch (questionIndex) {
      case 1: // Question 2
        return answer1 === 'Non-traumatic acute' || answer1 === 'Chronic';
      case 2: // Question 3
        return answer1 === 'Traumatic' || answer1 === 'Chronic';
      case 3: // Question 4
        return answer1 === 'Traumatic' || answer1 === 'Non-traumatic acute';
      case 5: // Question 6
        if (answer1 === 'Non-traumatic acute' || answer1 === 'Chronic') return true;
        if (answer5) {
          const selectedAnswers = Array.isArray(answer5) ? answer5.map((a, idx) => String(idx + 1)) : [];
          const skipAnswers = ['8', '9', '10', '11', '12'];
          const hasOnlySkipAnswers = selectedAnswers.every(ans => skipAnswers.includes(ans));
          return hasOnlySkipAnswers;
        }
        return false;
      case 6: // Question 7
        return answer1 === 'Non-traumatic acute' || answer1 === 'Chronic';
      case 7: // Question 8
        if (answer1 === 'Traumatic') return true;
        if (answer5) {
          const selectedAnswers = Array.isArray(answer5) ? answer5.map((a, idx) => String(idx + 1)) : [];
          const skipAnswers = ['4', '8', '9', '10', '11'];
          const hasOnlySkipAnswers = selectedAnswers.every(ans => skipAnswers.includes(ans));
          return hasOnlySkipAnswers;
        }
        return false;
      case 9: // Question 10
        return answer1 === 'Chronic';
      case 11: // Question 12
        return answer11 === 'Yes';
      case 12: // Question 13
        return answer11 === 'Yes' || answer12 === 'Yes';
      case 14: // Question 15
        if (answer5) {
          const selectedAnswers = Array.isArray(answer5) ? answer5.map((a, idx) => String(idx + 1)) : [];
          return selectedAnswers.length === 1 && (selectedAnswers[0] === '9' || selectedAnswers[0] === '10');
        }
        return false;
      default:
        return false;
    }
  };

  useEffect(() => {
    const newSkippedQuestions = new Set();
    for (let i = 0; i < questionnaire.questions.length; i++) {
      if (shouldSkipQuestion(i)) {
        newSkippedQuestions.add(i);
      }
    }
    setSkippedQuestions(newSkippedQuestions);
  }, [responses]);

  const handleSubmit = (finalResponses = responses) => {
    console.log("handleSubmit called");
    console.log("InjuryMapping:", injuryMapping);

    // Calculate scores
    const scores = calculateScoresForAnswers(finalResponses);
    console.log("Scores:", scores);

    // Sort and filter results
    const sortedResults = Object.entries(scores)
      .sort((a, b) => b[1] - a[1]);
    console.log("Sorted results:", sortedResults);

    if (sortedResults.length === 0) {
      setResultMessage("🤷‍♂️\nThere's nothing to show.");
      setShowResults(true);
      return;
    }

    const [B3, D3] = sortedResults[0] || [null, 0];
    const [, D4] = sortedResults[1] || [null, 0];
    const [, D5] = sortedResults[2] || [null, 0];
    const [, D16] = sortedResults[13] || [null, 0];

    console.log("Key values:", {
      B3, D3, D4, D5, D16,
      "First injury code": sortedResults[0]?.[0],
      "First injury score": sortedResults[0]?.[1],
      "Second injury code": sortedResults[1]?.[0],
      "Second injury score": sortedResults[1]?.[1]
    });

    // Get all scores equal to D4
    const acceptableScoresArray = sortedResults
      .slice(1)  // Start from second result
      .filter(([_, score]) => score >= D4 - 1);  // Only keep scores equal to D4 and D4 - 1
    const acceptableScoresString = acceptableScoresArray.map(([code]) => code).join('');

    console.log("Acceptable scores array:", acceptableScoresArray);
    console.log("Acceptable scores string:", acceptableScoresString);

    const injuryNames = injuryMapping[questionnaire.name];
    const firstInjuryName = injuryNames[B3] || B3;

    const CystScore = scores['I'] || 0;
    const NerveIssueScore = scores['H'] || 0;

    let resultsSummary;
    if (B3 === 'J') {
      resultsSummary = `😔 This isn't the tool for you.`;
    } else if (D3 >= D4 + 3 && /[GDFNEABK]/.test(B3)) {
      resultsSummary = `🎉 Success! Move on to severity assessment.`;
    } else if (D3 >= D4 + 3) {
      resultsSummary = `🥳 Success! You've completed the assessment.`;
    } else if (CystScore >= D3 - 2 && CystScore < D3 && /[ACIHL]/.test(B3)) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 1.`;
    } else if (D3 > D4 && /[ACIHL]/.test(B3) && // If D3 is greater than D4 and B3 is one of ACIHL
      (D4 > D16 ?
        /[ACIHL]/.test(acceptableScoresString) // Contains at least one of ACIHL
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 1.`;
    } else if (D3 > D4 && /[FGN]/.test(B3) && // If D3 is greater than D4 and B3 is one of FGN
      (D4 > D16 ?
        /[FGN]/.test(acceptableScoresString) // Contains at least one of FGN
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 2.`;
    } else if (D3 > D4 && /[BDE]/.test(B3) && // If D3 is greater than D4 and B3 is one of BDE
      (D4 > D16 ?
        /[BDE]{2}/.test(acceptableScoresString) // Contains at least two of BDE
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 3 & 4.`;
    } else if (D3 > D4 && /[BD]/.test(B3) && // If D3 is greater than D4 and B3 is one of BD
      (D4 > D16 ?
        /[BD]/.test(acceptableScoresString) // Contains at least one of BD
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 3.`;
    } else if (D3 > D4 && /[DE]/.test(B3) && // If D3 is greater than D4 and B3 is one of DE
      (D4 > D16 ?
        /[DE]/.test(acceptableScoresString) // Contains at least one of DE
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 4.`;
    } else if (D3 === D4 && /[ACIHL]/.test(B3) && // If D3 equals D4 and B3 is one of ACIHL
      (D4 > D16 ?
        /[ACIHL]/.test(acceptableScoresString) && // Contains at least one of ACIHL
        !/[^ACIHL]/.test(acceptableScoresString)  // ONLY contains ACIHL
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 1.`;
    } else if (D3 === D4 && /[FGN]/.test(B3) && // If D3 equals D4 and B3 is one of FGN
      (D4 > D16 ?
        /[FGN]/.test(acceptableScoresString) && // Contains at least one of FGN
        !/[^FGN]/.test(acceptableScoresString)  // ONLY contains FGN
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 2.`;
    } else if (D3 === D4 && /[BDE]/.test(B3) && // If D3 equals D4 and B3 is one of BDE
      (D4 > D16 ?
        /[BDE]{2}/.test(acceptableScoresString) && // Contains at least two of BDE
        !/[^BDE]/.test(acceptableScoresString)  // ONLY contains BDE
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 3 & 4.`;
    } else if (D3 === D4 && /[BD]/.test(B3) && // If D3 equals D4 and B3 is one of BD
      (D4 > D16 ?
        /[BD]/.test(acceptableScoresString) && // Contains at least one of BD
        !/[^BD]/.test(acceptableScoresString)  // ONLY contains BD
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 3.`;
    } else if (D3 === D4 && /[DE]/.test(B3) && // If D3 equals D4 and B3 is one of DE
      (D4 > D16 ?
        /[DE]/.test(acceptableScoresString) && // Contains at least one of DE
        !/[^DE]/.test(acceptableScoresString)  // ONLY contains DE
        : true)
    ) {
      resultsSummary = `🙌 Good work! Move on to Differential Assessment 4.`;
    } else if (D3 === D4 + 2 && /[GDFNEABK]/.test(B3)) {
      resultsSummary = `🎉 Success! Move on to severity assessment.`;
    } else if (D3 === D4 + 2) {
      resultsSummary = `🥳 Success! You've completed the assessment.`;
    } else if (NerveIssueScore === D3 && /[^ACIL]/.test(B3) && /[^ACIL]/.test(sortedResults[1][0]) && D3 >= D5 + 2) {
      resultsSummary = `💪 Success! Move on to nerve tests in Differential Assessment 1.`;
    } else if (NerveIssueScore < D3 && NerveIssueScore >= D3 - 1 && D3 > D4 && /[^ACIL]/.test(B3) && D3 >= D5 + 2) {
      resultsSummary = `💪 Success! Move on to nerve tests in Differential Assessment 1.`;
    } else if (D3 >= D5 + 1 && D4 > D5 && /[AB]/.test(B3) && /[AB]/.test(sortedResults[1][0])) {
      resultsSummary = `🎉 Success! Move on to severity assessment.`;
    } else if (D3 <= D4 + 1) {
      resultsSummary = `🤔 Something's wrong here.`;
    } else {
      resultsSummary = `🙃 Sorry, there seems to be an error.`;
    }

    let displayedResult;
    if (/💪/.test(resultsSummary) || /🎉/.test(resultsSummary) || /🥳/.test(resultsSummary)) {
      displayedResult = firstInjuryName;
    } else if (/🤙/.test(resultsSummary) || /🙌/.test(resultsSummary)) {
      displayedResult = "More information needed";
    } else if (/🤔/.test(resultsSummary)) {
      displayedResult = "Data unclear";
    } else if (/😔/.test(resultsSummary)) {
      displayedResult = "Possible growth plate fracture";
    } else {
      displayedResult = "Error";
    }

    // Add nerve issue possibility calculation
    let nerveIssuePossibility;

    if (firstInjuryName === "Nerve Issue") {
      nerveIssuePossibility = "⚠️ High";
    } else if (/1/.test(resultsSummary)) {
      nerveIssuePossibility = "To be determined...";
    } else if (
      NerveIssueScore === D3 &&
      /[^ACIL]/.test(B3) &&
      sortedResults[1] && /[^ACIL]/.test(sortedResults[1][0]) &&
      D3 >= D5 + 2
    ) {
      nerveIssuePossibility = "⚠️ Test Needed";
    } else if (
      NerveIssueScore >= D3 - 2 &&
      D3 > D4 &&
      /[^ACIL]/.test(B3) &&
      D3 >= D5 + 2
    ) {
      nerveIssuePossibility = "⚠️ Medium";
    } else if (
      NerveIssueScore >= D3 - 2 &&
      /unclear|information/i.test(displayedResult)
    ) {
      nerveIssuePossibility = "⚠️ Yes";
    } else {
      nerveIssuePossibility = "None";
    }

    // Add cyst possibility calculation
    let cystIndication;
    const question8Answer1Selected = responses[7]?.text === 'Yes';  // Index 7 for question 8, checking if answer 1 was selected

    if (/1/.test(resultsSummary)) {
      cystIndication = "To be determined...";
    } else if (firstInjuryName === "Cyst") {
      cystIndication = "⚠️ Yes";
    } else if (CystScore >= D3 - 5 && question8Answer1Selected) {
      cystIndication = "⚠️ Yes";
    } else if (CystScore <= 0) {
      cystIndication = "None";
    } else {
      cystIndication = "None";
    }

    // Add additional details based on result type
    let additionalDetails;

    if (/💪/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to the nerve tests (questions 9A and 9B) in Differential Assessment 1.";
    } else if (/🤙/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now complete Differential Assessment 3 (Grade III-IV Pulley Injury vs. FDP Injury) as well as Differential Assessment 4 (Lumbrical Injury vs. FDP Injury).";
    } else if (/1/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to Differential Assessment 1: Grade I-II Pulley Injury vs. Flexor Tenosynovitis vs. Cyst vs. Nerve Issue vs. FDS Insertional Tendinopathy.";
    } else if (/2/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to Differential Assessment 2: Joint Synovitis vs. Collateral Ligament Injury vs. Lateral Band Syndrome.";
    } else if (/3/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to Differential Assessment 3: Grade III-IV Pulley Injury vs. FDP Injury.";
    } else if (/4/.test(resultsSummary)) {
      additionalDetails = "Great job completing the primary assessment! Based on your results, you should now move on to Differential Assessment 4: Lumbrical Injury vs. FDP Injury.";
    } else if (/🎉/.test(resultsSummary)) {
      additionalDetails = "Great job! You have completed the primary assessment. (You do not need to complete a differential assessment, but may need to complete a severity assessment if indicated above.)";
    } else if (/🥳/.test(resultsSummary)) {
      additionalDetails = "Great job! You have completed the primary assessment. (You do not need to complete a differential assessment or severity assessment.)";
    } else if (/🤔/.test(resultsSummary)) {
      additionalDetails = "Your answers indicate too many possibilities to calculate a result. This is typically a sign that some of the tests were not performed properly or that there may be too many confounding factors (such as multiple concurrent injuries). Please retake the primary assessment and try to be more specific with your answers. If you continue to receive this result, this assessment may not be suitable for you.\n\nIf you'd like assistance, enter the code 'hb-debug' into the text box at the bottom of the page and then email us a screenshot of your full results report (including results summary, answer log, and scores) to pt@hoopersbeta.com. Or if you prefer you can schedule an in-person or online consultation with Dr. Jason Hooper, PT, DPT, OCS, SCS at www.hoopersbeta.com/private-sessions.";
    } else if (/😔/.test(resultsSummary)) {
      additionalDetails = "If you're seeing this, you may have been sent to this assessment by mistake; it not designed to handle the possibility of growth plate fractures.";
    } else if (/🙃/.test(resultsSummary)) {
      additionalDetails = "This is strange. Something has gone wrong in your questionnaire or you've encountered a bug. Please refresh the page and try again. If you continue to receive this result, enter the code 'hb-debug' into the text box at the bottom of the page and then email us a screenshot of your full results report (including results summary, answer log, and scores) to pt@hoopersbeta.com so we can assist you. We apologize for the inconvenience.";
    }

    const getInjuryDescription = (displayedResult) => {
      switch (displayedResult) {
        case "Pulley injury grade I-II":
          return "A pulley strain is a prevalent finger injury among rock climbers, targeting the annular ligaments—or pulleys—that encircle the flexor tendons and keep them close to the bones, facilitating finger flexion and grip strength. The mechanism of injury often involves excessive force applied to the fingers, especially when pulling on small holds or during sudden, powerful movements, leading to overstretching or microtears in the pulleys. Rehabilitation typically involves a period of rest followed by a gradual return to activity, focusing on controlled movements and strength building. Depending on the severity of the strain, recovery can take several weeks to months, with proper rehabilitation crucial for a successful return to climbing. Care and adherence to a quality rehab program will allow most climbers to return to their pre-injury level of climbing performance.";

        case "Pulley injury grade III-IV":
          return "A pulley tear is a prevalent finger injury among rock climbers, targeting the annular ligaments—or pulleys—that encircle the flexor tendons and keep them close to the bones, facilitating finger flexion and grip strength This injury is relatively common among climbers, especially those who frequently utilize crimp grips or perform powerful, dynamic movements. The mechanism typically involves excessive force applied to the finger, often during attempts to grip small holds or execute dynamic moves, resulting in a rupture of the pulley. The importance of a well-structured rehabilitation program cannot be overstated. A thorough rehab plan focuses on gradual recovery, starting with rest and progressing to gentle mobility and strengthening exercises designed specifically for the affected area. Engaging in a comprehensive rehab program not only helps restore function and strength but also significantly reduces the risk of re-injury, allowing climbers to return to their sport safely. Without proper rehabilitation, climbers may face prolonged recovery times and potential long-term complications, underscoring the critical role of a disciplined and informed approach to healing.";

        case "Flexor Digitorum Profundus Injury":
        case "FDP Injury":
          return "An FDP (flexor digitorum profundus) injury occurs when the tendon that flexes the fingertip (distal phalanx) is damaged. This tendon is essential for gripping and pulling, particularly in rock climbing, where intense crimping or finger-locking positions place high loads on the fingers. Although less common than pulley injuries, FDP injuries can happen due to acute trauma or excessive force, such as pulling on a small hold. The rehab process is crucial and should be tailored depending on the specific finger involved, especially if the injury occurs to the 5th digit (pinky finger), which can complicate recovery due to its unique anatomy and weaker tendon structure. Rehab focuses on controlled strengthening and gradual reintroduction to climbing activities. Following a personalized program is key, as improper rehabilitation can lead to long-term issues, but with careful management, most climbers can fully recover over a few months.";

        case "Lumbrical Injury":
          return "Lumbrical injuries involve the small, intrinsic muscles located between the metacarpal bones in the hand, known as the lumbricals. These muscles are responsible for fine motor control and precise movements of the fingers, making them important for rock climbers. While not as common as pulley injuries, lumbrical injuries can occur in climbers particularly on pockets, where some of the fingers are extended to grip the pocket and the adjacent fingers are flexed. This difference between the fingers creates a shearing force on the lumbricals which can cause damage when excessive. A proper rehab program, tailored to the severity of the injury, is essential to prevent chronic pain, and most climbers can expect a full recovery with time and careful management.";

        case "Flexor Tenosynovitis":
          return "Flexor tenosynovitis is an inflammation of the synovial sheath surrounding the flexor tendons in the fingers, which are responsible for bending the fingers and gripping. This condition can occur in rock climbers due to repetitive stress and overuse of the fingers during climbing activities. The flexor tendons slide through the synovial sheath, and when this sheath becomes irritated or inflamed, it can cause pain, swelling, and difficulty with finger movement. The mechanism of this injury typically involves repetitive friction between the tendons and their surrounding sheath, leading to inflammation. This can be exacerbated by forceful gripping, crimping, or dynamic movements that put additional stress on the tendons. The prognosis for flexor tenosynovitis is generally good with appropriate treatment and adherence to a well-designed rehab program. Most climbers can expect to return to their previous level of climbing performance, although the recovery time may vary depending on the severity of the inflammation and the individual's response to treatment.";

        case "Joint Synovitis":
          return "Joint synovitis is the inflammation of the synovial membrane, which lines the joints and produces synovial fluid to lubricate them for smooth movement. In rock climbers, this injury often affects the finger joints due to repetitive high-stress movements, such as crimping or gripping small holds, which place significant pressure on the joint capsule. Synovitis is relatively common among climbers, especially with a lack of adequate load management. The mechanism typically involves repetitive stress on the joint, leading to inflammation, pain, and swelling. Rehabilitation is key and should focus on improving joint health and gradually reintroducing training loads, climbing, and an emphasis on education about load management. Most climbers can restore full function but benign cosmetic changes (such as an enlarged joint) may linger.";

        case "Collateral Ligament Injury":
          return "A collateral ligament injury involves damage to the ligaments on either side of the finger joints, which stabilize the joints and prevent sideways movement. These ligaments are crucial in climbing, as they help maintain joint stability during gripping and pulling. Collateral ligament injuries are less common than other injuries such as pulley or FDP injuries. They are more often injured during moves that involve twisting or side-loading the fingers, such as in finger jams, wide pinches, or any hold that you are not pulling straight through but rather load the fingers at an angle. The mechanism typically involves overstretching or tearing the ligament due to lateral force applied to the finger. Rehabilitation is essential and should include rest, gentle range-of-motion exercises, and eventually strength training to restore stability. A well-structured rehab program is critical to avoid instability or chronic issues in the finger, and with proper care, most climbers can fully recover in several weeks to months depending on the severity of the injury.";

        case "Nerve Issue":
          return "Ulnar and median nerve entrapment or compression can cause issues in rock climbers due to the nerves being pinched or compressed, leading to pain, numbness, or weakness in the hand and fingers. The ulnar nerve controls sensation and muscle function in the pinky and one side of the ring finger, while the median nerve affects the thumb, index, middle, and one side of the ring finger. These nerve issues, though less common than tendon or ligament injuries, can occur in climbers due to repetitive strain, overuse, or during lock offs in fully extended positions as those can place significant compressive force on the nerve(s). The mechanism often involves sustained pressure on the nerve pathways, such as the cubital tunnel at the elbow (for the ulnar nerve) or in the forearm (for the median and ulnar nerve), though compression at the shoulder should not be discounted. Rehabilitation is crucial and includes tissue mobility, stretching, and nerve gliding exercises to relieve nerve compression. A well-designed rehab program is essential to prevent long-term pain or discomfort, and recovery can take several weeks to months. Early intervention improves the prognosis, allowing climbers to return to full function without impairment.";

        case "Cyst":
          return "A cyst is a fluid-filled sac that forms along the flexor tendon sheath, which surrounds our flexor tendons (which are responsible for bending the fingers). These cysts can develop from repetitive stress or microtrauma to the tendon sheath, making them a potential issue for rock climbers who frequently put high loads on their finger tendons. They can cause pain, discomfort, or a noticeable lump, particularly when gripping or flexing the fingers. The exact mechanism is thought to involve degeneration or irritation of the tendon sheath, leading to the formation of the cyst. Rehabilitation often involves rest and reducing stress on the affected tendon. In some cases, physical therapy, aspiration, or even surgical removal may be necessary if the cyst causes significant discomfort or limits motion. A well-structured rehab program is helpful to ensure full recovery and prevent recurrence, with most climbers able to return to activity once the cyst is managed.";

        case "Growth Plate Fracture":
        case "Possible Growth Plate Fracture":
          return "A finger growth plate fracture is a break in the growth plate–the area of developing cartilage near the ends of long bones–which is responsible for bone growth in children and adolescents. This injury can occur in young rock climbers whose bones are still growing, particularly due to the high forces placed on their fingers during intense gripping. Growth plate fractures are relatively rare but can happen in youth climbers who are training rigorously or pushing their limits on small holds. The mechanism usually involves overloading the finger joints, causing the growth plate to crack or break under the strain. Rehabilitation is critical and typically involves rest, immobilization, and careful monitoring to ensure proper healing, as growth plate injuries can affect future bone development if not treated properly. Growth plate fractures should not be self-evaluated; if one is suspected it should be examined by a qualified medical professional as soon as possible. A good rehab program, often including physical therapy, is essential to restore strength and range of motion while protecting the healing growth plate. With proper care, most young climbers can make a full recovery, though the healing process may take several weeks to months, depending on the severity of the fracture.";

        case "Volar Plate Injury":
          return "A volar plate injury involves damage to the volar plate, a thick ligament located on the palm side of the finger joints that helps stabilize the joint and prevent hyperextension. This injury is relatively common among rock climbers due to the high stress placed on the fingers, especially during aggressive crimping. The mechanism often involves a sudden force or overstretching of the finger joint, leading to pain, swelling, and difficulty fully extending the finger. Rehabilitation is crucial and will depend on the severity of injury, but typically includes rest, immobilization with a splint (for Grade III injuries), and gradually reintroducing range-of-motion and strengthening exercises to support recovery. A well-structured rehab program will help prevent long-term joint instability and stiffness. With appropriate care, most climbers can expect a good prognosis and return to climbing, though recovery may take several weeks to a few months depending on the injury's severity.";

        case "FDS Insertional Tendinopathy":
          return "FDS (flexor digitorum superficialis) insertional tendinopathy is an injury affecting the insertion point of the FDS tendon where it attaches to the finger bones. The FDS tendon plays a key role in flexing the middle joints of the fingers, crucial for gripping and pulling in rock climbing, especially while crimping. This injury is relatively common among climbers, especially those who engage in intense or repetitive finger use, such as crimping or pulling on small holds. The mechanism typically involves repetitive strain or microtrauma to the tendon insertion, leading to inflammation, pain, and reduced finger function. Rehabilitation is essential and usually involves rest, tissue loading, and a gradual return to climbing. Most climbers return to full activity after several weeks to months, depending on the severity of the tendinopathy.";

        case "FDP Insertional Tendinopathy":
          return "FDP (flexor digitorum profundus) insertional tendinopathy is an injury affecting the area where the FDP tendon attaches to the distal phalanx of the finger. The FDP tendon is crucial for flexing the fingertip, and its function is vital for gripping and pulling in rock climbing. This injury is fairly uncommon among climbers, especially compared to more prevalent injuries such as pulley tears. The mechanism usually involves overuse or excessive strain on the tendon insertion, leading to inflammation, pain, and reduced finger function. Rehabilitation is critical and involves rest and a structured approach to regain strength. With appropriate treatment, most climbers can expect a good prognosis and a full return to their climbing activities after several weeks to months, depending on the severity of the tendinopathy.";

        case "Lateral Band Syndrome":
          return "Lateral band syndrome is an injury affecting the lateral bands of the extensor mechanism of the finger, which are crucial for extending the finger joints. These bands help stabilize and extend the finger, and their injury can lead to pain, weakness, and difficulty fully straightening the finger. This condition is quite uncommon among climbers, though may occur with trauma or those engaged in strenuous ring locks. The injury often results from trauma but can occur from overuse or excessive stress on the extensor tendons, leading to inflammation or strain of the lateral bands. Rehabilitation is beneficial and typically involves rest, reducing inflammation, and gradually reintroducing exercises to restore strength and flexibility. With appropriate care, climbers can generally expect a good prognosis and return to full function within several weeks to months, depending on the severity of the injury.";

        default:
          return "";
      }
    };

    // Set states in a Promise.all to ensure they're all updated
    Promise.all([
      setResults(scores),
      setShowResults(true),
      setDisplayedResult(displayedResult),
      setResultsSummary(resultsSummary),
      setNerveIssuePossibility(nerveIssuePossibility),
      setCystIndication(cystIndication),
      setAdditionalDetails(additionalDetails),
      setInjuryDescription(getInjuryDescription(displayedResult))
    ]).then(() => {
      console.log("All states updated");
    });
  };

  // Skip to next non-skipped question
  while (skippedQuestions.has(currentQuestionIndex) && currentQuestionIndex < questionnaire.questions.length) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  if (showResults) {
    return (
      <Card className="w-full max-w-3xl mx-auto p-4">
        <CardHeader>
          <AppHeader />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl font-bold mb-4 text-center">Primary Assessment Results</CardTitle>
          {/* Main Results Section */}
          <div className="space-y-6 bg-secondary/50 rounded-lg p-6">
            {/* Primary Result */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">Your responses suggest:</h2>
              <p className="text-2xl font-bold text-primary mb-2">{displayedResult}</p>
              <p className="text-lg mb-8">{resultsSummary}</p>
              <p className="text-sm text-red-500 uppercase">{DISCLAIMER_TEXT}</p>
            </div>

            {/* Risk Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-muted-foreground mb-1">Nerve Issue Possibility</h3>
                <p className="text-lg font-medium">{nerveIssuePossibility}</p>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-muted-foreground mb-1">Cyst Indication</h3>
                <p className="text-lg font-medium">{cystIndication}</p>
              </div>
            </div>

            {/* Injury Details Card */}
            {(additionalDetails || injuryDescription) && (
              <div className="bg-white/50 rounded-lg p-6 space-y-6">
                {additionalDetails && (
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Additional Details</h2>
                    <p className="text-lg">{additionalDetails}</p>
                  </div>
                )}

                {injuryDescription && (
                  <div>
                    <p className="text-lg">{injuryDescription}</p>
                  </div>
                )}
              </div>
            )}

            {/* Answer Log */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-sm">Answer Log</CardTitle>
                <p className="text-sm text-gray-500">We do not store any information related to this tool. If you refresh this page, your answers will be lost. <a href="https://hoopersbeta.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">View our privacy policy.</a></p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  {questionnaire.questions.map((question, index) => {
                    const response = responses[index];
                    if (!response || skippedQuestions.has(index)) return null;

                    return (
                      <div key={index} className="border-b pb-2">
                        <div className="font-medium">Q{index + 1}: {question.question}</div>
                        <div className="pl-4">
                          {Array.isArray(response) ? (
                            response.map((ans, i) => (
                              <div key={i}>• {ans.text}</div>
                            ))
                          ) : (
                            <div>• {response.text}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Debug Code Input */}
            <div className="mt-6">
              <input
                type="text"
                placeholder="Debug code"
                className="w-full p-2 border rounded"
                onChange={(e) => {
                  if (e.target.value === 'hb-debug') {
                    setDebugMode(true);
                  }
                }}
              />
            </div>

            {/* Debug Sections */}
            {debugMode && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-sm">Current Scores (For Debugging)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(calculateScoresForAnswers(responses))
                      .sort((a, b) => b[1] - a[1])
                      .map(([injury, score]) => (
                        <div key={injury} className="flex justify-between">
                          <span>{injuryMapping[questionnaire.name][injury] || injury}:</span>
                          <span>{score}</span>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            )}

          </div>

          <Button onClick={onBack} className="mt-4 w-full md:w-auto">Back to Dashboard</Button>
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = questionnaire.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / 15) * 100;

  return (
    <Card className="w-full max-w-3xl mx-auto p-4">
      <CardHeader>
        <AppHeader />
        <CardTitle className="text-2xl pt-6">{questionnaire.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Question {currentQuestionIndex + 1}/15</span>
              <span>(some questions may be skipped automatically)</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          <div>
            <div className="space-y-2">
              {PRIMARY_VIDEO_IDS[`Q${currentQuestionIndex + 1}`] && (
                <VideoEmbed videoId={PRIMARY_VIDEO_IDS[`Q${currentQuestionIndex + 1}`]} />
              )}
              {PRIMARY_PHOTO_URLS[`Q${currentQuestionIndex + 1}`] && (
                console.log(`Photos for Q${currentQuestionIndex + 1}:`, PRIMARY_PHOTO_URLS[`Q${currentQuestionIndex + 1}`]),
                <ImageViewer imageUrls={PRIMARY_PHOTO_URLS[`Q${currentQuestionIndex + 1}`]} />
              )}
            </div>
            <div className="mt-5">
              <h3 className="font-medium text-lg">{currentQuestion.question}</h3>
              <p className="text-sm text-gray-500">
                {currentQuestion.type} - read all before submitting
              </p>
            </div>

            {currentQuestion.type === 'select one answer' && (
              <RadioGroup
                onValueChange={(value) => {
                  const answerText = value.split('_').slice(1).join('_');
                  const selectedAnswer = currentQuestion.answers.find(ans => ans.text === answerText);
                  handleAnswer(currentQuestionIndex, selectedAnswer);
                }}
                value={responses[currentQuestionIndex]?.text ? `${currentQuestionIndex}_${responses[currentQuestionIndex].text}` : undefined}
                className="space-y-2 mt-5"
              >
                {currentQuestion.answers.map((ans, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={`${currentQuestionIndex}_${ans.text}`}
                      id={`q${currentQuestionIndex}_a${idx}`}
                    />
                    <label htmlFor={`q${currentQuestionIndex}_a${idx}`} className="text-sm">
                      {ans.text}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {currentQuestion.type === 'select all that apply' && (
              <div className="grid gap-4 mt-5">
                {currentQuestion.answers.map((ans, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Checkbox
                      id={`q${currentQuestionIndex}_a${idx}`}
                      checked={(responses[currentQuestionIndex] || []).includes(ans)}
                      onCheckedChange={(checked) => {
                        const prev = responses[currentQuestionIndex] || [];
                        if (checked) {
                          handleAnswer(currentQuestionIndex, [...prev, ans]);
                        } else {
                          handleAnswer(
                            currentQuestionIndex,
                            prev.filter(a => a.text !== ans.text)
                          );
                        }
                      }}
                    />
                    <label
                      htmlFor={`q${currentQuestionIndex}_a${idx}`}
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {ans.text}
                    </label>
                  </div>
                ))}
              </div>
            )}

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-sm">Current Scores (For Debugging)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(calculateScoresForAnswers(responses))
                    .sort((a, b) => b[1] - a[1])
                    .map(([injury, score]) => (
                      <div key={injury} className="flex justify-between">
                        <span>{injuryMapping[questionnaire.name][injury] || injury}:</span>
                        <span>{score}</span>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between mt-6">
              {currentQuestionIndex > 0 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentQuestionIndex(getPreviousQuestionIndex(currentQuestionIndex))}
                >
                  Previous
                </Button>
              )}
              {currentQuestionIndex < questionnaire.questions.length - 1 ? (
                <Button
                  onClick={() => {
                    const nextIndex = getNextQuestionIndex(currentQuestionIndex);
                    // Check for special conditions after question 10 only when clicking Next
                    if (currentQuestionIndex === 9) {
                      const scores = calculateScoresForAnswers(responses);
                      const pulleyIIIIVScore = scores['B'] || 0;
                      const otherScores = Object.entries(scores)
                        .filter(([key]) => key !== 'B')
                        .map(([, score]) => score);
                      const maxOtherScore = Math.max(...otherScores, 0);

                      if (pulleyIIIIVScore >= maxOtherScore + 3) {
                        handleSubmit(responses);
                        return;
                      }
                    }
                    if (nextIndex < questionnaire.questions.length) {
                      setCurrentQuestionIndex(nextIndex);
                    }
                  }}
                  disabled={!responses[currentQuestionIndex]}
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={() => handleSubmit()}
                  disabled={!responses[currentQuestionIndex]}
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Questionnaire;

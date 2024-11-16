import Papa from 'papaparse';

export function parseCSV(data) {
  // If data is already an array, use it directly
  const rows = Array.isArray(data) ? data : Papa.parse(data.trim(), {
    header: false,
    skipEmptyLines: true
  }).data;

  const questionnaires = {};

  rows.forEach((currentLine) => {
    const questionnaireName = currentLine[0];
    const question = currentLine[1];
    const type = currentLine[2];
    const answer = currentLine[3];
    const scores = currentLine.slice(4).map(Number);

    if (!questionnaires[questionnaireName]) {
      questionnaires[questionnaireName] = {
        name: questionnaireName,
        questions: [],
      };
    }

    // Check if the question already exists
    let existingQuestion = questionnaires[questionnaireName].questions.find(q => q.question === question);

    if (!existingQuestion) {
      existingQuestion = {
        question,
        type,
        answers: [],
      };
      questionnaires[questionnaireName].questions.push(existingQuestion);
    }

    // Map scores to injury categories (A to N)
    const injuryCategories = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G',
      'H', 'I', 'J', 'K', 'L', 'M', 'N',
    ];

    const scoreMapping = {};
    injuryCategories.forEach((cat, index) => {
      scoreMapping[cat] = scores[index] || 0;
    });

    const answerObject = {
      text: answer,
      scores: scoreMapping,
    };

    existingQuestion.answers.push(answerObject);
  });

  return Object.values(questionnaires);
}

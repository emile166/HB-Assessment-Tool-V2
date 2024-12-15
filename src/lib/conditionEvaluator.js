/**
 * Evaluates if selected answers match condition requirements
 * @param {string[]} selectedAnswerIds - Array of selected answer IDs
 * @param {string[]} conditionAnswers - Array of answer IDs to match against
 * @param {string} matchType - Type of match to perform ('any'|'none'|'only'|'all') 
 * @returns {boolean}
 */
export function evaluateAnswerMatch(selectedAnswerIds, conditionAnswers, matchType) {
  switch (matchType) {
    case 'any':
      return conditionAnswers.some(id => selectedAnswerIds.includes(id));
    case 'none':
      return !conditionAnswers.some(id => selectedAnswerIds.includes(id));
    case 'only':
      return selectedAnswerIds.every(id => conditionAnswers.includes(id)) &&
        conditionAnswers.some(id => selectedAnswerIds.includes(id));
    case 'all':
      return conditionAnswers.every(id => selectedAnswerIds.includes(id));
    default:
      return false;
  }
}

/**
 * Normalizes an answer into an array of answer IDs
 * @param {Object|Object[]} answer - Answer object or array of answer objects
 * @returns {string[]} Array of answer IDs
 */
export function normalizeAnswerIds(answer) {
  if (!answer) return [];
  return Array.isArray(answer) ? answer.map(a => a.id) : [answer.id];
}

/**
 * Evaluates a condition against the current responses
 * @param {Object} condition - Condition to evaluate
 * @param {Object} responses - Current questionnaire responses
 * @param {string} currentQuestionId - ID of current question
 * @returns {boolean}
 */
export function evaluateCondition(condition, responses, currentQuestionId) {
  // Early return if no condition
  if (!condition) return true;

  // Get relevant answer based on condition type
  const answer = condition.questionId ? 
    responses[condition.questionId] : 
    responses[currentQuestionId];

  // Early return if no answer and condition requires one
  if (!answer && (condition.questionId || condition.selectedAnswers)) {
    return false;
  }

  // If condition has selectedAnswers, evaluate the match
  if (condition.selectedAnswers) {
    const selectedAnswerIds = normalizeAnswerIds(answer);
    return evaluateAnswerMatch(selectedAnswerIds, condition.selectedAnswers, condition.match);
  }

  return true;
} 
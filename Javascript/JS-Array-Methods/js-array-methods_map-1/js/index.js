console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((card) => {
  return card.answer.toLowerCase();
});
console.log(lowerCaseAnswers); // ['as often as you like.', ...]

const questionsAndAnswersTogether = cards.map((card) => {
  return { question: card.question, answer: card.answer };
}); // ["How often can I use <header>? - As often as you like.", ...]

console.log(questionsAndAnswersTogether);

const questionAndAnswer = cards.map((card) => {
  return `${card.question} - ${card.answer}`;
}); // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]
console.log(questionsAndAnswers);

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };

// data.js
import quizComplete from './assets/quiz-complete.png';
import quizLogo from './assets/quiz-logo.png';

export const assets = {
    quizComplete,
    quizLogo
}

export const QUESTIONS = [
  {
    id: 'q1',
    questionText: 'What is the capital of France?',
    answers: ['Paris', 'Madrid', 'Berlin', 'Rome'],
    correct: 'Paris',
  },
  // {
  //   id: 'q2',
  //   questionText: 'Which language is primarily used for React?',
  //   answers: ['Java', 'Python', 'JavaScript', 'C#'],
  //   correct: 'JavaScript',
  // },
  // {
  //   id: 'q3',
  //   questionText: 'Who created React?',
  //   answers: ['Google', 'Facebook', 'Microsoft', 'Apple'],
  //   correct: 'Facebook',
  // },
  // {
  //   id: 'q4',
  //   questionText: 'What does JSX stand for?',
  //   answers: ['JavaScript XML', 'Java Syntax Extension', 'JS Export', 'None'],
  //   correct: 'JavaScript XML',
  // },
  // {
  //   id: 'q5',
  //   questionText: 'Which hook is used to manage state in functional components?',
  //   answers: ['useEffect', 'useCallback', 'useRef', 'useState'],
  //   correct: 'useState',
  // }
];

/**
 * @typedef {Object} QuizState
 * @property {number} currentQuestionIndex - Index của câu hỏi hiện tại
 * @property {string|null} currentSelectedAnswer - Câu trả lời được chọn tạm thời
 * @property {string[]} submittedAnswers - Các câu trả lời đã nộp
 * @property {boolean} isQuizFinished - Đã hoàn thành bài quiz hay chưa
 */

/** @type {QuizState} */
export const initialState = {
  currentQuestionIndex: 0,
  currentSelectedAnswer: null,
  submittedAnswers: [],
  isQuizFinished: false,
};

import { useEffect, useState, useReducer } from "react";
import Question from "./Question";
import Answer from "./Answer";
import SkipButton from "./SkipButton";
import { quizReducer } from "../hooks/useQuizReducer";
import { initialState } from "../data";
import {
  SELECT_ANSWER,
  NEXT_QUESTION,
  RESET_QUIZ,
} from "../constants/quizActionTypes";
import ResultScreen from "../components/ResultScreen";
import { QUESTIONS } from "../data";

export default function Quiz({ questions }) {
  
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

  // câu hỏi hiện tại
  const question = questions[quizState.currentQuestionIndex];
  const { id, questionText, answers } = question;

  const handleSelectAnswer = (id, answer) => {
    quizDispatch({
      type: SELECT_ANSWER,
      payload: {
        id: id,
        answer,
      },
    });
  };

  const handleNextQuestion = () => {
    if (!quizState.currentSelectedAnswer) {
      alert("Please select an answer first.");
      return;
    }
    quizDispatch({ type: NEXT_QUESTION });
  };

  const handleReset = () => {
    quizDispatch({ type: RESET_QUIZ });
  };

  // Hàm khi click vào answer
  if (!questions || questions.length === 0) return null;

  return (
    <div className="max-w-2xl w-full mx-auto px-6 py-10 bg-gradient-to-br from-purple-700 to-indigo-800 rounded-3xl shadow-2xl text-white text-center space-y-8 mt-10">
      {!quizState.isQuizFinished && (
        <>
          <Question questionText={questionText} />
          {answers.map((answer) => (
            <Answer
              key={answer}
              answer={answer}
              isSelected={quizState?.currentSelectedAnswer?.answer === answer}
              onSelectedAnswer={() => handleSelectAnswer(id, answer)}
            />
          ))}
          <SkipButton text="Skip question" onNext={handleNextQuestion} />
        </>
      )}

      {
        // nếu kết thúc câu hỏi thì mở ra ResultScreen
        quizState.isQuizFinished && (
          <ResultScreen
            userAnswers={quizState.submittedAnswers}
            questions={QUESTIONS}
            onRestart={() => handleReset()}
          />
        )
      }
    </div>
  );
}

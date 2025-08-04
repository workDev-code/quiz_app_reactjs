import { useEffect, useState, useReducer } from "react";
import QuestionCard from "./QuestionCard";
import { quizReducer } from "../hooks/useQuizReducer";
import { initialState } from "../data";
import QuizHeader from "./QuizHeader";
import {
  SELECT_ANSWER,
  NEXT_QUESTION,
  RESET_QUIZ,
} from "../constants/quizActionTypes";
import ResultScreen from "../components/ResultScreen";
import { QUESTIONS } from "../data";

export default function Quiz({ questions }) {
  
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

   // Nếu chưa có câu hỏi nào
  if (!questions || questions.length === 0) return null;

  // câu hỏi hiện tại
  const question = questions[quizState.currentQuestionIndex];

  // --- Handler ---
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
    quizDispatch({ type: NEXT_QUESTION });
  };

  const handleReset = () => {
    quizDispatch({ type: RESET_QUIZ });
  };

  // --- Render ---
  const isQuizFinished = quizState.isQuizFinished;

  return (
    <div className="max-w-2xl w-full mx-auto px-6 py-10 bg-gradient-to-br from-purple-700 to-indigo-800 rounded-3xl shadow-2xl text-white text-center space-y-8 mt-10">

      {isQuizFinished ? (
          <>
            <ResultScreen
              submittedAnswers={quizState.submittedAnswers}
              questions={QUESTIONS}
              onRestart={handleReset}
            />
          </>
        ) : (
          <>
            <QuizHeader
              totalQuestions={questions.length}
              currentQuestionIndex={quizState.currentQuestionIndex + 1}
              onTimeout={handleNextQuestion}
            />

            <QuestionCard
              currentQuestion={question}
              currentSelectedAnswer={quizState?.currentSelectedAnswer?.answer}
              handleNextQuestion={handleNextQuestion}
              handleSelectAnswer={handleSelectAnswer}
            />
          </>
        )}
    </div>
  );
}

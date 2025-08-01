import { QUESTIONS } from "../data";
import RestartButton from "./RestartButton";
import ResultQuestionCard from "./ResultQuestionCard";

export default function ResultScreen({ questions, userAnswers, onRestart }) {
  const total = questions.length;

  const correct = userAnswers.filter((ans) => {
    const question = questions.find((q) => q.id === ans.id);
    return question && question.correct === ans.answer;
  }).length;

  const incorrect = total - correct;
  const skipped = userAnswers.filter((ans) => !ans.answer).length;

  return (
    <div className="text-white px-6 py-8 max-w-3xl mx-auto space-y-6">
      <h2 className="text-4xl font-bold text-center text-purple-300">🎉 Quiz Completed!</h2>

      {/* Tổng kết kết quả */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg text-center">
        <div className="bg-purple-900 rounded-lg p-4 shadow">
          <p className="font-bold text-yellow-400">{Math.round((skipped / total) * 100)}%</p>
          <p>Skipped</p>
        </div>
        <div className="bg-purple-900 rounded-lg p-4 shadow">
          <p className="font-bold text-green-400">{Math.round((correct / total) * 100)}%</p>
          <p>Correct</p>
        </div>
        <div className="bg-purple-900 rounded-lg p-4 shadow">
          <p className="font-bold text-red-400">{Math.round((incorrect / total) * 100)}%</p>
          <p>Incorrect</p>
        </div>
      </div>

      <hr className="border-gray-600 my-6" />
      
      {/* Chi tiết từng câu hỏi */}
      <ResultQuestionCard questions={questions} userAnswers={userAnswers} />

      <RestartButton onRestart={onRestart}/>

    </div>
  );
}

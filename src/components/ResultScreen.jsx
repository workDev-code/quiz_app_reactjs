import { QUESTIONS } from "../data";

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
      <div className="space-y-6">
        {questions.map((q, index) => {
          const userAnswer = userAnswers.find((ua) => ua.id === q.id)?.answer;
          const isCorrect = userAnswer === q.correct;

          return (
            <div key={index} className="bg-purple-800 p-4 rounded-lg shadow">
              <p className="text-sm text-gray-300 mb-1">Question {index + 1}</p>
              <p className="font-semibold">{q.questionText}</p>
              <p className="text-green-300 mt-1">Correct: {q.correct}</p>
              <p
                className={`mt-1 font-medium ${
                  userAnswer
                    ? isCorrect
                      ? "text-green-400"
                      : "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                Your answer: {userAnswer || "No answer selected"}
              </p>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <button
          className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-6 py-2 rounded shadow"
          onClick={onRestart}
        >
          🔁 Restart Quiz
        </button>
      </div>
    </div>
  );
}

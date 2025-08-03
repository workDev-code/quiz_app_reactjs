import { QUESTIONS } from "../data";
import RestartButton from "./RestartButton";
import ResultQuestion from "./ResultQuestion";
import ResultQuestionCard from "./ResultQuestionCard";

export default function ResultScreen({ questions, submittedAnswers, onRestart }) {
  const total = questions.length;

  const correct = submittedAnswers.filter((ans) => {
    return ans.isCorrect;
  })

  const incorrect = total - correct;
  const skipped = submittedAnswers.filter(a => a.selectedAnswer === null).length;

  return (
    <div className="text-white px-6 py-8 max-w-3xl mx-auto space-y-6">
      <h2 className="text-4xl font-bold text-center text-purple-300">🎉 Quiz Completed!</h2>

      {/* Tổng kết kết quả */}
      <ResultQuestion
        correct={correct}
        incorrect={incorrect}
        skipped={skipped}
        total={total}
      />

      {/* Chi tiết từng câu hỏi */}
      <ResultQuestionCard
        questions={questions}
        userAnswers={submittedAnswers}
      />

      <RestartButton onRestart={onRestart}/>

    </div>
  );
}

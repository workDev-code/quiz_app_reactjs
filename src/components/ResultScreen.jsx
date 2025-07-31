export default function ResultScreen({questions, userAnswers, onRestart}){

    const total = questions.length;

    const correct = userAnswers.filter((ans) => {
        const question = questions.find((q) => q.id === ans.id);
        return question && question.correct === ans.answer;
    }).length;

    const incorrect = total - correct;
     
    return (
        <div className="text-white text-center space-y-4">

            <h2 className="text-3xl font-bold">QUIZ COMPLETED!</h2>

            <div className="flex justify-center space-x-6">
                <p>{0}% Skipped</p>
                <p>{Math.round((correct / total) * 100)}% Answered Correctly</p>
                <p>{Math.round((incorrect / total) * 100)}% Answered Incorrectly</p>
            </div>

            <hr className="my-4 border-gray-400" />

            { questions.map((q, index) => {
                const userAnswer = userAnswers[index]?.answer;
                const isCorrect = userAnswer === q.correct;

                    return (
                        <div key={index}>
                            <p className="text-sm mb-1">Question {index + 1}</p>
                            <p>{q.questionText}</p>
                            <p className={isCorrect ? "text-green-300" : "text-red-400"}>
                            {userAnswer || 'No answer selected'}
                            </p>
                        </div>
                    );
                })
            }
            <button className="mt-4 bg-white text-purple-800 px-4 py-2 rounded" onClick={onRestart}>
                Restart Quiz
            </button>
        </div>
  );
}
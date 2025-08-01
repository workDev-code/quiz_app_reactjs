export default function ResultQuestionCard({questions, userAnswers}){
    return(
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
    );
}
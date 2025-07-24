import { useState } from 'react';

export default function Quiz({ questions }) {

    
  const questionText = 'What is the capital of France?';
  const answers = ['Paris', 'Berlin', 'Rome', 'Madrid'];
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <div className="max-w-2xl w-full mx-auto px-6 py-10 bg-gradient-to-br from-purple-700 to-indigo-800 rounded-3xl shadow-2xl text-white text-center space-y-8 mt-10">
      <h2 className="text-2xl sm:text-3xl font-bold">
        {questionText}
      </h2>

      <ul className="flex flex-col gap-4">
        {answers.map((ans) => {
          const isSelected = ans === selectedAnswer;
          return (
            <li key={ans}>
              <button
                onClick={() => setSelectedAnswer(ans)}
                className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300
                  ${isSelected
                    ? 'bg-yellow-400 text-black scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'}
                `}
              >
                {ans}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="pt-6">
        <button className="text-sm text-gray-300 hover:text-white underline transition">
          Skip Question
        </button>
      </div>
    </div>
  );
}

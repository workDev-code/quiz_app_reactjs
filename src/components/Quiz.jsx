import { useEffect, useState } from 'react';
import Question from "./Question";
import Answer from "./Answer"
import SkipButton from './SkipButton';

export default function Quiz({ questions }) {

  // index hiện tại
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // câu hỏi hiện tại
  const question = questions[currentIndex];
  const {id, questionText, answers, correct } = question;
  
  // mảng lưu câu trả lời theo từng câu hỏi
  // { id: 'q1', answer: 'Paris' },

  const [userAnswers, setUserAnswers] = useState([]);

  // lưu đáp án tạm của câu hỏi tại index
  const [selectedAnswer, setSelectedAnswer] = useState(null);


   useEffect(() => {
    console.log(userAnswers);
  }, [userAnswers]);


  const handleNextQuestion = () => {

    if (!selectedAnswer) {
      alert("You must slect a answer.");
      return;
    }
    
    // next khi mà chưa phải câu cuối
    if (currentIndex < questions.length - 1){ 

      // lưu lại câu trả lời
      setUserAnswers(prev => [...prev, selectedAnswer]);

      // reset lại đáp án để sang câu mới không bị giữ
      setSelectedAnswer(null);
      console.log("next question");
      setCurrentIndex(prev => prev + 1)
    }else{
        console.log("finish question");
        setIsFinished(true);
    }

  }

  const handleSelectAnswer = (id, answer) => {
    setSelectedAnswer({id: id, answer:answer});
  }

  // Hàm khi click vào answer
  if (!questions || questions.length === 0) return null;

  return (
    
    <div className="max-w-2xl w-full mx-auto px-6 py-10 bg-gradient-to-br from-purple-700 to-indigo-800 rounded-3xl shadow-2xl text-white text-center space-y-8 mt-10">
          <>
            <Question questionText={questionText} />
            {answers.map((answer) => (
              <Answer
                key={answer}
                answer={answer}
                isSelected={selectedAnswer?.answer === answer}
                onSelectedAnswer={() => handleSelectAnswer(id, answer)}
              />
            ))}
            
          </>
      <div className="pt-6">
         <SkipButton text={"Skip question"} onNext={handleNextQuestion} />
      </div>
    </div>
  );
}

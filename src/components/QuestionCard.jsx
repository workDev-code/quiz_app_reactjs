import Question from "./Question";
import Answer from "./Answer";
import SkipButton from "./SkipButton";

export default function QuestionCard({currentQuestion, currentSelectedAnswer, handleNextQuestion, handleSelectAnswer}){

    const {id, questionText, answers} = currentQuestion;

    return(
        <>
            <Question questionText={questionText} />
            {answers.map((answer) => (
            <Answer
                key={answer}
                answer={answer}
                isSelected={currentSelectedAnswer === answer}
                onSelectedAnswer={() => handleSelectAnswer(id, answer)}
            />))}
            <SkipButton text="Skip question" onNext={handleNextQuestion} />
        </>
    )
}
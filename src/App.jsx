import { useState, useEffect } from "react";
import questionsData from './data/questions.json';
import Header from "./components/Header";
import StartButton from "./components/StartButton";
import Loading from "./components/Loading";
import Quiz from "./components/Quiz";

function App() {
    const [isStart, setIsStart] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const loadQuestions = async () => {
            await new Promise((r) => setTimeout(r, 500)); // mô phỏng delay
            setQuestions(questionsData);
        };

        loadQuestions();  
    }, []);


    console.log(questions);

    if (questions.length === 0) {
        return (
           <Loading />
        );
    }
    
    return (
        <div className="p-4">
            <Header />
            {!isStart && <StartButton onStart={() => setIsStart(true)} />}
            {isStart && <Quiz questions={questions} />} 
        </div>
    );
}

export default App;

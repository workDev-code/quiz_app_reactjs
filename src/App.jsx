import { useState } from "react";
import {QUESTIONS} from './data'
import Header from "./components/Header";
import StartButton from "./components/StartButton";
import Quiz from "./components/Quiz";

function App() {
    const [isStart, setIsStart] = useState(false);
    return (
        <div className="p-4">
        <Header />
        {/* Các component khác */}
        {!isStart && (
            <StartButton onStart={() => setIsStart(true)} />
        )}
        {isStart && <Quiz questions={QUESTIONS}/>}
        
    </div>
  );
}

export default App;

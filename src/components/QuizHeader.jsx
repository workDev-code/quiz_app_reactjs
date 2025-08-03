import { useRef, useState, useEffect } from "react";

export default function QuizHeader({currentQuestionIndex, totalQuestions, onTimeout}){

    const timerRef = useRef();
    const [timeLeft, setTimeLeft ] = useState(1);

    useEffect(() => {
    // Code cần chạy khi component mount hoặc update
    // Bạn lắp đồng hồ
    timerRef.current = setInterval(
        () => {
            //Đồng hồ tự chạy và trừ timeLeft mỗi giây
            setTimeLeft((prev) => {
                if(prev <= 0) {
                    clearInterval(timerRef.current); // dừng khi còn 0
                    onTimeout?.(); // gọi callback khi hết giờ
                    return 0;
                }
                return prev -1;
            })
        }, 1000
    );
    return () => {
            // Code cleanup (chạy khi component unmount hoặc trước khi chạy lại useEffect)
            // Khi bạn "rời khỏi", thì xóa đồng hồ
            clearInterval(timerRef.current)
        };

    }, []); // useEffect chỉ chạy 1 lần lúc "vào nhà"


    return(
        <>
            <div className="flex justify-between items-center text-sm text-purple-200">
                <div>
                    <span className="font-bold text-white">Question {currentQuestionIndex}</span>
                    <span> of {totalQuestions}</span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">Time left:</span>
                    <span className="bg-white text-purple-700 px-2 py-1 rounded-lg font-bold">
                        {timeLeft}s
                    </span>
                </div>
            </div>
        </>
    );
}
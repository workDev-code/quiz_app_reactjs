export default function ResultQuestion({skipped, correct, incorrect, total}){
    return(
        <>
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
        </>
    );
}
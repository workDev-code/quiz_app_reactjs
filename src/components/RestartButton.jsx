

export default function RestartButton({onRestart}){
    return(
        <div className="text-center mt-8">
            <button
            className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-6 py-2 rounded shadow"
            onClick={onRestart}
            >
            🔁 Restart Quiz
            </button>
      </div>
    )
}
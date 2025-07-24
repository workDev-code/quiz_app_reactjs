export default function StartButton({ onStart }) {
  return (
    <div className="flex items-center justify-center m-4">
      <div className="w-[300px] h-[200px] flex items-center justify-center bg-gradient-to-br from-indigo-200 via-white to-blue-100 rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
        <button
          onClick={onStart}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-xl text-lg font-semibold shadow-lg hover:from-pink-500 hover:to-yellow-500 hover:animate-pulse transition-all duration-300 ease-in-out"
        >
          🚀 Bắt đầu
        </button>
      </div>
    </div>
  );
}

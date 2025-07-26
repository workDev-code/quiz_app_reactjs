export default function Answer({ answer, isSelected, onSelectedAnswer }) {
  return (
    <button
      onClick={onSelectedAnswer}
      className={`flex items-center justify-between w-full px-6 py-4 rounded-xl shadow transition duration-200 font-medium
        ${isSelected 
          ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white ring-2 ring-orange-300' 
          : 'bg-white text-gray-800 hover:bg-gray-100'}
      `}
    >
      <span>{answer}</span>
      {isSelected && <span className="ml-4">✅</span>}
    </button>
  );
}

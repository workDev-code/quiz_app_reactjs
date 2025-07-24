// Header.jsx
import { assets } from '../data'; // hoặc './data' nếu cùng thư mục

export default function Header() {
  return (
    <>
      <img src={assets.quizLogo} alt="Quiz Logo" className="w-24 h-24 mx-auto" />
      <h1 className="text-3xl font-bold text-center text-purple-600 mt-2">
        React Quiz
      </h1>
    </>
  );
}

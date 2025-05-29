import { useRecoilState } from 'recoil';
import { userNameAtom } from '../store/quizAtom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const navigate = useNavigate();

  const startQuiz = () => {
    if (name.trim()) {
      setUserName(name);
      navigate('/quiz');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-md text-center">
        {/* 가운데 정렬을 위한 text-center */}
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">DevQuiz</h1>

        <input
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-primary text-center"
        />

        <button
          onClick={startQuiz}
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
        >
          퀴즈 시작
        </button>
      </div>
    </div>
  );
}

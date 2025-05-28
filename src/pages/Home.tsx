// 이름 입력 페이지
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userNameAtom } from '../store/quizAtom';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [_userName, setUserName] = useRecoilState(userNameAtom);
  const navigate = useNavigate();

  const startQuiz = () => {
    if (name.trim()) {
      setUserName(name);
      navigate('/quiz');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-4">DevQuiz</h1>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-4"
      />
      <button
        onClick={startQuiz}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        퀴즈 시작
      </button>
    </div>
  );
}

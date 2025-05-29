// 결과 페이지
import { useRecoilValue, useResetRecoilState } from 'recoil';
import {
  scoreAtom,
  userNameAtom,
  currentQuestionIndexAtom,
  selectedAnswersAtom,
} from '../store/quizAtom';
import questions from '../data/questions.json';
import { useNavigate } from 'react-router-dom';

export default function Result() {
  const userName = useRecoilValue(userNameAtom);
  const score = useRecoilValue(scoreAtom);
  const selectedAnswers = useRecoilValue(selectedAnswersAtom);

  const resetScore = useResetRecoilState(scoreAtom);
  const resetIndex = useResetRecoilState(currentQuestionIndexAtom);
  const resetAnswers = useResetRecoilState(selectedAnswersAtom);

  const navigate = useNavigate();

  const restart = () => {
    resetScore();
    resetIndex();
    resetAnswers();
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-2xl bg-white p-6 sm:p-8 rounded-2xl shadow-md text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">🎉 결과 확인</h1>
        <p className="text-lg sm:text-xl mb-2">{userName}님의 점수는</p>
        <p className="text-5xl font-extrabold text-blue-600 mb-6">
          {score} / {questions.length}
        </p>
        <button
          onClick={restart}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition mb-8"
        >
          🔄 다시 시작
        </button>

        <h2 className="text-2xl font-semibold text-left w-full mb-4 mt-4">📝 복습</h2>
        <div className="w-full space-y-4 text-left">
          {questions.map((q, i) => {
            const userChoice = selectedAnswers[i];
            return (
              <div key={q.id} className="border p-4 rounded-lg bg-gray-50">
                <p className="font-semibold mb-2">
                  {i + 1}. {q.question}
                </p>
                <ul className="ml-4 mt-2 space-y-1 text-sm">
                  {q.options.map((opt, idx) => (
                    <li
                      key={idx}
                      className={`${
                        idx === q.answer
                          ? 'text-green-600 font-semibold'
                          : idx === userChoice
                          ? 'text-red-500'
                          : ''
                      }`}
                    >
                      {idx === q.answer
                        ? '정답 → '
                        : idx === userChoice
                        ? '선택 → '
                        : ''}
                      {opt}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-gray-600 text-sm">해설: {q.explanation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

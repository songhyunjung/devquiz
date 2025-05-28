// 결과 페이지
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { scoreAtom, userNameAtom, currentQuestionIndexAtom } from '../store/quizAtom';
import questions from '../data/questions.json';
import { useNavigate } from 'react-router-dom';
import { selectedAnswersAtom } from '../store/quizAtom';

export default function Result() {
  const userName = useRecoilValue(userNameAtom);
  const score = useRecoilValue(scoreAtom);
  const resetScore = useResetRecoilState(scoreAtom);
  const resetIndex = useResetRecoilState(currentQuestionIndexAtom);
  const navigate = useNavigate();
  const selectedAnswers = useRecoilValue(selectedAnswersAtom);
  const resetAnswers = useResetRecoilState(selectedAnswersAtom);

  const restart = () => {
  resetScore();
  resetIndex();
  resetAnswers();
  navigate('/');
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl mb-4">🎉 결과 확인</h1>
      <p className="text-xl mb-2">{userName}님의 점수는</p>
      <p className="text-4xl font-bold text-blue-600 mb-6">
        {score} / {questions.length}
      </p>
      <button
        onClick={restart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        다시 시작
      </button>
      <h2 className="text-xl mt-8 mb-4">오답 복습</h2>
<div className="w-full text-left space-y-4">
  {questions.map((q, i) => {
    const userChoice = selectedAnswers[i];
    //const isCorrect = userChoice === q.answer;
    return (
      <div key={q.id} className="border p-3 rounded">
        <p className="font-semibold">{i + 1}. {q.question}</p>
        <ul className="ml-4 mt-2 space-y-1 text-sm">
          {q.options.map((opt, idx) => (
            <li key={idx}
                className={
                  idx === q.answer
                    ? 'text-green-600 font-semibold'
                    : idx === userChoice
                    ? 'text-red-500'
                    : ''
                }>
              {idx === q.answer ? '정답 → ' : idx === userChoice ? '선택 → ' : ''}
              {opt}
            </li>
          ))}
        </ul>
        <p className="mt-1 text-gray-600 text-sm">해설: {q.explanation}</p>
      </div>
    );
  })}
</div>

    </div>
    
  );
}

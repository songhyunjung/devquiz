// 퀴즈 풀이 페이지
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import questions from '../data/questions.json';
import QuestionCard from '../components/QuestionCard'
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import {
  currentQuestionIndexAtom,
  scoreAtom,
  selectedAnswersAtom,
} from '../store/quizAtom';

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useRecoilState(currentQuestionIndexAtom);
  const [_score, setScore] = useRecoilState(scoreAtom);
  const [selected, setSelected] = useState<number | null>(null);
  const navigate = useNavigate();
  const [_answers, setAnswers] = useRecoilState(selectedAnswersAtom);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (index: number) => {
  setSelected(index);
  setAnswers((prev) => [...prev, index]);

  if (index === currentQuestion.answer) {
    setScore((prev) => prev + 1);
  }

  setTimeout(() => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
    } else {
      navigate('/result');
    }
  }, 1000);
};

  useEffect(() => {
    // 페이지 새로고침 시 초기화
    setCurrentIndex(0);
    setScore(0);
  }, []);

  return (
  <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
    <div className="w-full max-w-xl p-4 bg-white rounded-xl shadow-lg">
      <ProgressBar current={currentIndex + 1} total={questions.length} />
      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        selected={selected}
        onSelect={handleAnswer}
        answer={currentQuestion.answer}
      />
    </div>
  </div>
);


}

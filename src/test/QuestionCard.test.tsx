import { render, screen,} from '@testing-library/react';
import QuestionCard from '../components/QuestionCard';

const sampleQuestion = {
  question: '2 + 2는?',
  options: ['1', '2', '3', '4'],
  answer: 3,
};

test('문제와 보기들이 잘 표시되는지 확인', () => {
  render(
    <QuestionCard
      question={sampleQuestion.question}
      options={sampleQuestion.options}
      answer={sampleQuestion.answer}
      selected={null}
      onSelect={() => {}}
    />
  );

  expect(screen.getByText('2 + 2는?')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('4')).toBeInTheDocument();
});

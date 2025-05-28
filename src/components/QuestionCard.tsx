// 문제 카드 컴포넌트
interface Props {
  question: string;
  options: string[];
  selected: number | null;
  onSelect: (index: number) => void;
  answer: number;
}

export default function QuestionCard({
  question,
  options,
  selected,
  onSelect,
  answer,
}: Props) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">{question}</h2>
      <ul className="space-y-2">
        {options.map((opt, i) => {
          const isCorrect = selected !== null && i === answer;
          const isWrong = selected === i && i !== answer;

          return (
            <li key={i}>
              <button
                onClick={() => onSelect(i)}
                disabled={selected !== null}
                className={`w-full text-left p-2 border rounded
                  ${isCorrect ? 'bg-green-200 border-green-500' : ''}
                  ${isWrong ? 'bg-red-200 border-red-500' : ''}
                  ${selected === null ? 'hover:bg-gray-100' : ''}
                `}
              >
                {opt}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

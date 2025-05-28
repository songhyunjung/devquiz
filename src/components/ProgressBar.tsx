// 진행률 바 컴포넌트
interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  const percent = (current / total) * 100;

  return (
    <div className="w-full mb-4">
      <div className="bg-gray-300 h-3 rounded-full">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="text-sm text-right mt-1">
        {current} / {total}
      </p>
    </div>
  );
}

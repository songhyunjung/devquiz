import { atom } from 'recoil';

export const userNameAtom = atom<string>({
  key: 'userName',
  default: '',
});

export const currentQuestionIndexAtom = atom<number>({
  key: 'currentQuestionIndex',
  default: 0,
});

export const scoreAtom = atom<number>({
  key: 'score',
  default: 0,
});

// 사용자가 선택한 보기 인덱스 목록
export const selectedAnswersAtom = atom<number[]>({
  key: 'selectedAnswers',
  default: [],
});

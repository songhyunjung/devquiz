# DevQuiz 🧠

프론트엔드 개발자를 위한 기술 퀴즈 플랫폼입니다.

## 🔗 배포 주소
👉 [https://devquizcomplete.vercel.app](https://devquizcomplete.vercel.app)

## 💡 주요 기능
- HTML, CSS, JavaScript, React 등 퀴즈 문제 제공
- 정답 선택 시 즉시 피드백
- 점수 계산 및 오답 복습 기능
- 반응형 UI, Tailwind CSS 적용
- 상태 관리 (Recoil), 폼 처리 (React Hook Form)

## 🛠️ 사용 기술 스택
- React + TypeScript
- Tailwind CSS
- Recoil
- React Hook Form
- Jest, React Testing Library
- Vite
- Vercel (배포)

## 📂 프로젝트 구조
src/

┣ pages/ ← Home, Quiz, Result

┣ components/ ← QuestionCard, ProgressBar

┣ store/ ← Recoil 상태

┣ data/ ← 퀴즈 문제(JSON)

┗ test/ ← 테스트 설정


## ✍️ 개발자
송현정 | GitHub: [songhyunjung](https://github.com/songhyunjung)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

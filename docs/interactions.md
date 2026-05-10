# LEEHEEWON PORTFOLIO

> 사용자 경험과 인터랙션 중심으로 설계한 프론트엔드 포트폴리오 프로젝트입니다.

---

## Live Demo

- URL: https://my-walking-portfolio.vercel.app/

---

## Overview

직접 제작한 비주얼 에셋과 인터랙션을 기반으로 구현한 포트폴리오 프로젝트입니다.

- App Router 기반 SSR 환경 구성
- Framer Motion 기반 인터랙션 설계
- 직접 드로잉한 스프라이트 애니메이션 적용
- 접근성(A11y) 기반 인터랙션 대응
- Portal 기반 레이어 구조 설계

---

## Creative Direction

![Character Sprite Sheet](public/images/characters/img-character-walk.png)

프로젝트에 사용된 캐릭터 및 배경 에셋은 모두 직접 제작했습니다.

### Includes

- 직접 제작한 캐릭터 / 배경 / 오브젝트 에셋
- 8프레임 기반 스프라이트 워킹 애니메이션
- 웹 환경에 최적화된 에셋 구조 설계

---

## Tech Stack

- Next.js 14+ (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel

---

## Key Features

### 1. Hybrid Scroll Interaction

Framer Motion의 `useScroll`, `useTransform`을 활용해 수직-수평 하이브리드 스크롤 인터랙션을 구현했습니다.

- Sticky Horizontal Scroll 구조 설계
- scroll progress 기반 x축 인터랙션 제어
- 섹션별 인터랙션 흐름 구성

---

### 2. SSR Stability & Hydration Strategy

브라우저 API 의존 컴포넌트의 hydration mismatch 문제를 방지하기 위한 구조를 설계했습니다.

### Includes

- ClientOnly 공통 컴포넌트 구성
- isMounted 기반 hydration guard 처리
- SSR 환경 안정성 대응

---

### 3. Portal-based UI Layering

Framer Motion transform 환경에서 발생하는 stacking context 문제를 해결했습니다.

### Includes

- React Portal 기반 최상위 레이어 렌더링
- Dialog / Popup 레이어 분리
- 복잡한 인터랙션 환경에서 z-index 충돌 방지

---

### 4. Web Accessibility & Focus Management

수평 스크롤 환경에서 발생하는 focus 이동 문제를 개선했습니다.

### Includes

- inert 속성을 활용한 focus guard 처리
- keyboard interaction 대응
- screen reader 고려 마크업 적용

---

### 5. Systematic Z-Index Structure

인터랙션 UI와 배경 요소를 효율적으로 관리하기 위해 z-index 구조를 체계화했습니다.

| Layer                      | Z-Index | Description                |
| :------------------------- | :------ | :------------------------- |
| Overlay / Modal (Portal)   | 700+    | 최상위 팝업 / 모달         |
| Progress Bar               | 510     | 스크롤 인디케이터          |
| Header                     | 500     | 내비게이션                 |
| Character                  | 300     | 인터랙션 캐릭터            |
| Bubble / Interactive Layer | 100~200 | 말풍선 및 상호작용 요소    |
| Background Decor           | 40~110  | 배경 오브젝트 및 장식 요소 |

---

## Directory Structure

```text
src/
├── components/
│   ├── common/
│   ├── character/
│   ├── sections/
├── providers/
├── constants/
├── lib/
└── app/
```

---

## What I Focused On

- 인터랙션 중심 사용자 경험 설계
- SSR 환경 안정성 대응
- 접근성을 고려한 UI 구조
- 유지보수 가능한 레이어 및 컴포넌트 구조
- 직접 제작한 비주얼 에셋 기반 UI 구현

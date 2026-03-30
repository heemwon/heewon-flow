# 📝 LEEHEEWON PORTFOLIO

> **"사용자 경험의 디테일을 설계하는 프론트엔드 개발자 이희원입니다."**
> 단순한 포트폴리오를 넘어, 부드러운 인터랙션과 최적화된 성능으로 몰입감 있는 사용자 경험을 제공합니다.

---

### 🔗 Live Demo

- **URL:** [https://my-walking-portfolio.vercel.app/](https://my-walking-portfolio.vercel.app/)

---

### 🛠️ Tech Stack

- **Framework:** `Next.js 14+ (App Router)`
- **Language:** `TypeScript`
- **Styling:** `Tailwind CSS`
- **Animation:** `Framer Motion`
- **Deployment:** `Vercel`

---

### ✨ Key Features & Technical Challenges

#### 1. Hybrid Scroll Interaction (수직-수평 하이브리드 스크롤)

- **Challenge:** 정적인 수직 스크롤 흐름 속에서 특정 섹션(Stack & Project List)을 수평으로 이동하는 몰입감 있는 레이아웃 필요
- **Solution:** `Framer Motion`의 `useScroll`과 `useTransform`을 결합하여 스크롤 진행도(`scrollYProgress`)에 따라 `x`축 값을 제어하는 **Sticky-Horizontal Scroll** 구조를 직접 설계

#### 2. Web Accessibility & Focus Management (A11y)

- **Problem:** 수평 스크롤 섹션 진행 중, 화면 밖에 위치한 요소에 `Tab` 키 포커스가 닿아 화면이 강제로 이동하는 UX 결함 발견
- **Solution:** `inert` 속성을 활용해 활성화되지 않은 섹션의 상호작용을 물리적으로 차단하는 **Focus Guard** 로직을 구현하여 웹 접근성을 개선

#### 3. Performance Optimization (Web Vitals)

- **LCP Improvement:** 메인 비주얼 요소인 이미지를 `Largest Contentful Paint` 요소로 파악하고, Next.js의 `priority` 속성을 부여하여 초기 로딩 성능을 최적화
- **Hydration Strategy:** 스크롤 기반 애니메이션에서 발생하는 서버/클라이언트 상태 불일치를 해결하기 위해 `isMounted` 훅을 도입하여 하이드레이션 오류를 원천 차단

#### 4. Brand Identity & Muted UI

- **Design:** 포인트 컬러인 **#d4d77c** (Muted Olive)를 기반으로 커스텀 프로그레스 바를 제작
- **Detail:** 사용자 시선을 방해하지 않도록 채도를 조율한 톤온톤 그라데이션과 은은한 Shadow 효과를 적용해 세련된 인터페이스를 완성

#### 5. Systematic Z-Index Management

- **Challenge:** 수평 스크롤, 애니메이션 요소(자동차, 나무 등), 헤더, 프로그레스 바 등 다양한 레이어가 겹치는 복잡한 UI에서 요소 간의 우선순위 혼선 방지
- **Solution:** 전역적인 **Z-Index Layering System**을 구축하여 마법의 숫자(Magic Number) 및 999 사용을 지양하고, 계층 간의 명확한 위계(Hierarchy)를 정의하여 관리 효율성을 높임

| Layer                          | Z-Index | Description                     |
| :----------------------------- | :------ | :------------------------------ |
| **Overlay/Modal**              | 600+    | 모달, 팝업 등 최상위 요소       |
| **Progress Bar**               | 510     | 스크롤 인디케이터 (헤더 위)     |
| **Header**                     | 500     | 내비게이션 바                   |
| **Interactive UI**             | 100~200 | 캐릭터, 말풍선 등 상호작용 요소 |
| **Interactive UI - Charactor** | 300     | 수평 스크롤 걷는 캐릭터         |
| **Background Decor**           | 40~100  | 도로, 나무 등 배경 장식 요소    |
| **Background Decor - Floor**   | 90~110  | 바닥 요소                       |

---

### 📂 Directory Structure

```text
src/
├── components/
│   ├── common/         # 재사용 가능한 공용 컴포넌트
│   ├── character/      # 수평 스크롤 걸어가는 캐릭터 컴포넌트
│   ├── sections/       # 프로젝트 섹션 전용 컴포넌트
├── providers/          # Theme Providers
├── constants/          # 상수 및 프로젝트 데이터 관리
├── lib/                # cn, utils등 공통 함수
└── app/                # Next.js App Router
```

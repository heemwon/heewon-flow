# Design System

SaaS 관리자(Admin) 대시보드를 위한 디자인 시스템입니다.  
일관된 사용자 경험과 빠른 개발 생산성, 유지보수 가능한 컴포넌트 구조를 목표로 설계했습니다.

> Design Token 기반 스타일 관리 + 접근성(A11y) 고려 + Storybook 문서화까지 포함한 UI 시스템 프로젝트입니다.

<br />

---

<br />

## Figma

[디자인 시스템 가이드 및 컴포넌트 설계 문서](https://www.figma.com/design/gZeYjMdOmNZzv2srOaN0Ud/Design-System?node-id=0-1&t=gVKNseF3DsZHbz2F-1)

<br />

---

<br />

## Storybook

컴포넌트 문서 및 테스트 환경

### Includes

- Controls
- Docs
- Accessibility Addon
- Foundation Token Docs

```
npm run storybook
```

<br />

---

<br />

## Core Principles

1. Semantic Design Tokens

   숫자 중심 스타일이 아니라 의미 중심 토큰으로 설계했습니다.

   ```
   text-body-md
   spacing-sm
   radius-md
   primary-600
   ```

   예측 가능하고 유지보수하기 쉬운 구조를 목표로 했습니다.

<br />

2. Reusability

   중복 UI를 최소화하고 공통 컴포넌트로 재사용할 수 있도록 설계했습니다.

<br />

3. Accessibility First

   기본적인 접근성을 고려했습니다.

   - keyboard interaction
   - focus-visible
   - aria attributes
   - color contrast 점검

<br />

4. Scalable Structure

   추후 Modal / Table / Tabs / Toast 등 확장이 가능한 구조로 설계했습니다.

<br />

---

<br />

## Tech Stack

`React` `TypeScript`

`Tailwind CSS v4`

`Storybook`

`clsx` `tailwind-merge`

<br />

---

<br />

## Project Structure

<br />

```text
packages/design-system/src
├── foundations/          # Storybook Docs (토큰 문서)
├── styles/
│   └── globals.css       # Tailwind v4 @theme 토큰 정의
├── icons/               # SVG Icon Components
├── lib/
│   └── cn.ts            # class merge util
├── components/
│   ├── button/
│   ├── icon-button/
│   ├── textfield/
│   ├── dropdown/
│   ├── checkbox/
│   └── field/
└── index.ts
```

<br />

---

<br />

## Foundations

디자인 시스템의 기준이 되는 Token 문서입니다.

Storybook Docs에서 확인할 수 있습니다.

<br />

---

<br />

## Utility

### cn()

Tailwind class 충돌 방지를 위한 유틸 함수입니다.

<br />

---

<br />

## Components

### Button

주요 액션 버튼 컴포넌트

### Features

- variant
  - primary
  - secondary
  - danger
  - ghost
- size
  - sm
  - md
  - lg
- disabled
- polymorphic (button, a, Link)

---

### IconButton

아이콘 전용 버튼

### Accessibility

시각적 텍스트가 없기 때문에 aria-label 필수

---

### TextField

텍스트 입력 컴포넌트

### Features

- label
- helpMessage
- clear button
- disabled
- readOnly
- error state
- controlled / uncontrolled

### Accessibility

- label 연결
- aria-invalid
- aria-describedby

---

### Dropdown

단일 값 선택 컴포넌트

### Features

- placeholder
- selected state
- disabled
- helpMessage
- controlled / uncontrolled

### Accessibility

- aria-haspopup="listbox"
- aria-expanded
- aria-controls

---

### Checkbox

단일 선택 체크박스 컴포넌트

### Features

- checked
- disabled
- controlled / uncontrolled

### Accessibility

- native input 기반
- keyboard support (Tab / Space)
- focus-visible

---

## Badge

상태(Status)나 카테고리(Label)를 간결하게 표시하는 컴포넌트입니다.

### Features

- variant 기반 스타일 (success, warning, info 등)
- 텍스트 기반 의미 전달
- 선택적 aria-label 지원

### Accessibility

- 색상만으로 의미를 전달하지 않고 텍스트를 함께 제공
- 필요 시 aria-label로 보조 설명 제공

---

## Checkbox

단일 선택 입력을 위한 체크박스 컴포넌트입니다.

### Features

- native input 기반 구현
- checked / defaultChecked 지원 (controlled / uncontrolled)
- label 클릭 영역 확장
- focus-visible 상태 지원

### Accessibility

- keyboard interaction 지원 (Tab / Space)
- label 연결
- peer 기반 상태 스타일링

---

## Table

행과 열 구조의 데이터를 표현하는 컴포넌트입니다.  
semantic table 구조를 기반으로 접근성과 확장성을 고려해 설계했습니다.

### Features

- compound component 패턴 (`Table.Head`, `Table.Row` 등)
- caption 지원 (스크린리더용)
- colgroup 기반 컬럼 width 제어
- row variant (selected / disabled)
- empty state 지원
- skeleton loading 지원

### Accessibility

- semantic table 구조 유지 (thead, tbody, th, td)
- `scope` 속성 적용
- `aria-busy`를 통한 로딩 상태 전달
- skeleton 영역 `aria-hidden` 처리

---

## Loading State (Skeleton)

데이터 로딩 상태를 표현하기 위한 Skeleton 컴포넌트를 제공합니다.

### Features

- 공통 Skeleton 컴포넌트
- Table.Skeleton 조합 지원
- animate-pulse 기반 로딩 애니메이션

### Accessibility

- skeleton 요소는 `aria-hidden` 처리
- 상위 영역에서 `aria-busy` 상태 관리

---

<br />

## What I Focused On

1. 실무형 구조 설계

   디자인 토큰 → 공통 UI → 문서화까지 이어지는 구조를 구성했습니다.

2. 단순 구현보다 유지보수성

   컴포넌트 하나보다 전체 시스템 구조를 우선 고려했습니다.

3. 접근성 기본기

   시각적 완성도뿐 아니라 keyboard / aria / contrast를 함께 고려했습니다.

<br />

---

<br />

## Next Step

...

<br />

---

<br />

## Author

이 희원 lee heewon

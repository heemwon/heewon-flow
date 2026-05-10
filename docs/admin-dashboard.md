# Admin Dashboard

디자인 시스템을 기반으로 구축한 SaaS 관리자(Admin) 대시보드 프로젝트입니다.

일관된 UI 구조와 상태 관리, 접근성을 고려한 인터랙션 설계를 중심으로 구현했습니다.

---

## Overview

SaaS Admin 대시보드 프로젝트입니다.

- Design System 기반 UI 구성
- Feature 단위 폴더 구조 설계
- TanStack Query 기반 서버 상태 관리
- Mock API 기반 CRUD 시뮬레이션
- 접근성(A11y)을 고려한 마크업 구조

---

## Tech Stack

- Next.js
- React
- TypeScript
- TanStack Query
- Tailwind CSS v4
- Highcharts

---

## Project Structure

```text
src/features
├── dashboard/
├── users/
├── create-user/
├── settings/
└── shared/
```

Feature 단위로 관심사를 분리해 유지보수성과 확장성을 고려했습니다.

---

## Common Features

### 1. Design System Integration

공통 디자인 시스템 컴포넌트를 활용해 UI 일관성을 유지했습니다.

- Button
- Dialog
- Table
- Dropdown
- Checkbox
- Skeleton
- TextField

---

### 2. Accessibility First

- semantic markup
- keyboard interaction
- aria attributes
- focus 관리

기본적인 웹 접근성을 고려해 마크업 및 인터랙션을 설계했습니다.

---

### 3. TanStack Query + Mock API

Mock API 환경에서도 실제 서버 상태처럼 동작할 수 있도록 구성했습니다.

- get / post / delete 시뮬레이션
- invalidateQueries 기반 데이터 동기화
- 새로고침 전까지 메모리 기반 상태 유지

---

### 4. Validation Architecture

범용 검증 로직은 디자인 시스템 내부에서 관리하고, 도메인 전용 검증은 feature 내부로 분리했습니다.

```text
packages/design-system/src/lib/validator.ts
```

또한 반복되는 폼 상태 관리 로직을 줄이기 위해 공통 `useForm` 훅을 설계했습니다.

### useForm

- values / errors 상태 관리
- dirty check
- validation 처리
- reset 기능
- submit flow 제어

```ts
const {
  values,
  errors,
  isDirty,
  handleChange,
  onSubmit,
  onReset,
} = useForm(...)
```

---

# Dashboard (/dashboard)

## Sections

- KPI
- 매출 추이 차트
- 최근 활동
- 최근 사용자

최근 사용자 섹션의 “전체보기” 버튼 클릭 시 `/dashboard/users` 페이지로 이동합니다.

---

## Features

### KPI / Loading State

- KPI 데이터 로딩 스켈레톤 처리
- 차트 및 리스트 로딩 상태 분리

---

### Highcharts Accessibility

Highcharts 접근성 옵션을 적용해 차트 사용성을 개선했습니다.

- keyboard navigation
- screen reader 대응
- semantic description 제공

---

# Users (/dashboard/users)

## Sections

- 최근 사용자 리스트

---

## Features

### Search Debounce

입력 중 불필요한 요청을 줄이기 위해 debounce를 적용했습니다.

```ts
const debouncedSearch = useDebounce({
  value: search,
  delay: 300,
});
```

---

### Status Filter

사용자 상태(active / pending / blocked) 기반 필터링 기능을 구현했습니다.

---

### Multi Delete

- 다중 선택 삭제 지원
- 삭제 완료 후 사용자 리스트 자동 업데이트
- TanStack Query invalidateQueries 활용

---

### Detail Dialog

더보기 버튼 클릭 시 사용자 상세 정보를 Dialog 형태로 확인할 수 있도록 설계했습니다.

---

# Create User (/dashboard/users/create)

## Sections

- 사용자 추가 폼

---

## Features

### Validation

추가하기 버튼 클릭 시 입력값 검증을 수행합니다.

- 필수값 검증
- 이메일 형식 검증

---

### Create Flow

사용자 추가 완료 시:

- 사용자 리스트 자동 업데이트
- `/dashboard/users` 페이지로 이동
- 신규 사용자 row 강조 스타일 적용

---

# Settings (/dashboard/settings)

## Sections

- 워크스페이스 설정
- 알림 설정
- 보안 설정

---

## Features

### Prefill Settings

초기 설정 데이터를 API 호출을 통해 prefill 처리했습니다.

---

### Dirty Check

초기값과 현재 form 상태를 비교해 변경사항이 있을 경우에만 액션 버튼을 활성화했습니다.

```ts
const isDirty = JSON.stringify(initialValues) !== JSON.stringify(values);
```

---

### Reset

초기화 버튼 클릭 시 기존 설정 값으로 복구할 수 있도록 구현했습니다.

---

### Save Validation

저장 버튼 클릭 시 validation을 수행하며, 검증 통과 시 저장 완료 Dialog를 노출합니다.

---

## What I Focused On

- 디자인 시스템 기반 일관된 UI 구조
- Feature 단위 관심사 분리
- 접근성을 고려한 인터랙션
- 서버 상태와 UI 상태 동기화
- 확장 가능한 폼 및 validation 구조 설계

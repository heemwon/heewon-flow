## 📚 Documentation

- [Design System](./docs/design-system.md)
- [Admin Dashboard](./docs/admin-dashboard.md)
- [Interactions](./docs/interactions.md)
- [Supabase Setup](./docs/supabase.md)

## Recent Updates (2026-07-18)

- `/dashboard` 데이터 요청을 Next Route Handlers로 분리하고 Supabase 저장소를 연결했습니다.
- Supabase 환경변수가 없는 로컬 환경에서는 기존 mock 데이터를 fallback으로 사용합니다.
- 사용자 생성/삭제, 설정 저장 데이터가 새로고침 이후에도 유지되도록 개선했습니다.
- 요청 실패 케이스를 공통 `ErrorDialog`와 `InlineError`로 분리해 접근성과 UI 일관성을 보강했습니다.
- API 에러 메시지 파싱을 공통화해 서버 응답 메시지를 클라이언트 피드백에 재사용합니다.

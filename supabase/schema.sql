create table if not exists public.users (
  id text primary key,
  name text not null,
  email text not null,
  role text not null check (role in ('Admin', 'Editor', 'Viewer', 'admin', 'editor', 'viewer')),
  status text not null check (status in ('active', 'pending', 'blocked')),
  joined_at text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.settings (
  id text primary key,
  workspace_name text not null,
  admin_name text not null,
  admin_email text not null,
  email_notification boolean not null,
  user_join_notification boolean not null,
  report_cycle text not null check (report_cycle in ('daily', 'weekly', 'monthly')),
  two_factor_auth boolean not null,
  session_timeout text not null check (session_timeout in ('15m', '30m', '1h')),
  updated_at timestamptz not null default now()
);

create table if not exists public.dashboard_kpis (
  id text primary key,
  title text not null,
  value text not null,
  change text not null,
  trend text not null check (trend in ('increase', 'decrease', 'neutral')),
  description text not null,
  sort_order int not null default 0
);

create table if not exists public.dashboard_chart_points (
  id bigserial primary key,
  period text not null check (period in ('7d', '30d')),
  label text not null,
  revenue int not null,
  users int not null,
  sort_order int not null default 0,
  unique (period, label)
);

create table if not exists public.dashboard_activities (
  id text primary key,
  type text not null check (type in ('user', 'payment', 'system')),
  title text not null,
  description text not null,
  created_at_label text not null,
  sort_order int not null default 0
);

insert into public.users (id, name, email, role, status, joined_at, created_at)
values
  ('user-1', '이희원', 'heewon.lee@example.com', 'Admin', 'active', '2026.05.01', '2026-05-01T10:00:00+09:00'),
  ('user-2', '김서연', 'seoyeon.kim@example.com', 'Editor', 'pending', '2026.04.29', '2026-04-29T10:00:00+09:00'),
  ('user-3', '이준호', 'junho.lee@example.com', 'Viewer', 'blocked', '2026.04.26', '2026-04-26T10:00:00+09:00'),
  ('user-4', '박지민', 'jimin.park@example.com', 'Viewer', 'active', '2021.03.10', '2021-03-10T10:00:00+09:00'),
  ('user-5', '최현우', 'hyunwoo.choi@example.com', 'Admin', 'blocked', '2026.05.01', '2026-05-01T09:00:00+09:00'),
  ('user-6', '정유진', 'yujin.jung@example.com', 'Editor', 'pending', '2026.05.01', '2026-05-01T08:00:00+09:00'),
  ('user-7', '한도윤', 'doyoon.han@example.com', 'Admin', 'active', '2026.05.01', '2026-05-01T07:00:00+09:00'),
  ('user-8', '오세린', 'serin.oh@example.com', 'Editor', 'pending', '2026.04.29', '2026-04-29T09:00:00+09:00'),
  ('user-9', '강민재', 'minjae.kang@example.com', 'Viewer', 'blocked', '2026.04.26', '2026-04-26T09:00:00+09:00'),
  ('user-10', '윤채원', 'chaewon.yoon@example.com', 'Viewer', 'active', '2021.03.10', '2021-03-10T09:00:00+09:00')
on conflict (id) do update set
  name = excluded.name,
  email = excluded.email,
  role = excluded.role,
  status = excluded.status,
  joined_at = excluded.joined_at;

insert into public.settings (
  id,
  workspace_name,
  admin_name,
  admin_email,
  email_notification,
  user_join_notification,
  report_cycle,
  two_factor_auth,
  session_timeout
)
values (
  'dashboard-settings',
  'Walking Admin',
  '이희원',
  'heewon@example.com',
  true,
  true,
  'weekly',
  false,
  '30m'
)
on conflict (id) do update set
  workspace_name = excluded.workspace_name,
  admin_name = excluded.admin_name,
  admin_email = excluded.admin_email,
  email_notification = excluded.email_notification,
  user_join_notification = excluded.user_join_notification,
  report_cycle = excluded.report_cycle,
  two_factor_auth = excluded.two_factor_auth,
  session_timeout = excluded.session_timeout,
  updated_at = now();

insert into public.dashboard_kpis (id, title, value, change, trend, description, sort_order)
values
  ('revenue', '총 매출', '₩12.4M', '+12.5%', 'increase', '지난달 대비', 1),
  ('users', '전체 사용자', '8,420', '+8.2%', 'increase', '이번 달 신규 포함', 2),
  ('conversion', '전환율', '6.8%', '-1.1%', 'decrease', '최근 7일 기준', 3),
  ('active', '활성 사용자', '2,184', '+3.4%', 'increase', '오늘 기준', 4)
on conflict (id) do update set
  title = excluded.title,
  value = excluded.value,
  change = excluded.change,
  trend = excluded.trend,
  description = excluded.description,
  sort_order = excluded.sort_order;

insert into public.dashboard_chart_points (period, label, revenue, users, sort_order)
values
  ('7d', 'Sun', 300, 690, 1),
  ('7d', 'Mon', 120, 320, 2),
  ('7d', 'Tue', 180, 410, 3),
  ('7d', 'Wed', 150, 380, 4),
  ('7d', 'Thu', 220, 520, 5),
  ('7d', 'Fri', 260, 610, 6),
  ('7d', 'Sat', 210, 480, 7),
  ('30d', 'Sun', 200, 410, 1),
  ('30d', 'Mon', 320, 300, 2),
  ('30d', 'Tue', 80, 280, 3),
  ('30d', 'Wed', 100, 300, 4),
  ('30d', 'Thu', 120, 450, 5),
  ('30d', 'Fri', 240, 240, 6),
  ('30d', 'Sat', 110, 400, 7)
on conflict (period, label) do update set
  revenue = excluded.revenue,
  users = excluded.users,
  sort_order = excluded.sort_order;

insert into public.dashboard_activities (id, type, title, description, created_at_label, sort_order)
values
  ('activity-1', 'user', '신규 사용자 가입', '이희원님이 새로 가입했습니다.', '5분 전', 1),
  ('activity-2', 'payment', '결제 완료', 'Pro Plan 결제가 완료되었습니다.', '18분 전', 2),
  ('activity-3', 'system', '시스템 알림', '정기 리포트 생성이 완료되었습니다.', '1시간 전', 3)
on conflict (id) do update set
  type = excluded.type,
  title = excluded.title,
  description = excluded.description,
  created_at_label = excluded.created_at_label,
  sort_order = excluded.sort_order;

grant usage on schema public to service_role;

grant select, insert, update, delete on table
  public.users,
  public.settings,
  public.dashboard_kpis,
  public.dashboard_chart_points,
  public.dashboard_activities
to service_role;

grant usage, select on sequence public.dashboard_chart_points_id_seq to service_role;

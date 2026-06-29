-- Weekly Todo shared data model for Visual Life OS.
-- Run in Supabase SQL editor while logged in as project owner.

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(trim(title)) > 0),
  due_date date not null,
  is_done boolean not null default false,
  category text,
  priority text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists tasks_user_due_date_idx
  on public.tasks (user_id, due_date, is_done, created_at);

alter table public.tasks enable row level security;

drop policy if exists "Users can select own tasks" on public.tasks;
create policy "Users can select own tasks"
  on public.tasks for select
  using (user_id = auth.uid());

drop policy if exists "Users can insert own tasks" on public.tasks;
create policy "Users can insert own tasks"
  on public.tasks for insert
  with check (user_id = auth.uid());

drop policy if exists "Users can update own tasks" on public.tasks;
create policy "Users can update own tasks"
  on public.tasks for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists "Users can delete own tasks" on public.tasks;
create policy "Users can delete own tasks"
  on public.tasks for delete
  using (user_id = auth.uid());

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_tasks_updated_at on public.tasks;
create trigger set_tasks_updated_at
  before update on public.tasks
  for each row
  execute function public.set_updated_at();

create table if not exists public.weekly_focus (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  week_start date not null,
  focus_text text,
  today_focus_text text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, week_start)
);

alter table public.weekly_focus enable row level security;

drop policy if exists "Users can select own weekly focus" on public.weekly_focus;
create policy "Users can select own weekly focus"
  on public.weekly_focus for select
  using (user_id = auth.uid());

drop policy if exists "Users can insert own weekly focus" on public.weekly_focus;
create policy "Users can insert own weekly focus"
  on public.weekly_focus for insert
  with check (user_id = auth.uid());

drop policy if exists "Users can update own weekly focus" on public.weekly_focus;
create policy "Users can update own weekly focus"
  on public.weekly_focus for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists "Users can delete own weekly focus" on public.weekly_focus;
create policy "Users can delete own weekly focus"
  on public.weekly_focus for delete
  using (user_id = auth.uid());

drop trigger if exists set_weekly_focus_updated_at on public.weekly_focus;
create trigger set_weekly_focus_updated_at
  before update on public.weekly_focus
  for each row
  execute function public.set_updated_at();

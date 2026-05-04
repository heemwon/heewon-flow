"use client";

import DashboardPage from "@/features/dashboard";
import { useSession } from "../shared/hooks/useSession";

export default function Dashboard() {
  const { data } = useSession();
  const userId = data?.userId;

  if (!userId) return null;

  return <DashboardPage userId={userId} />;
}

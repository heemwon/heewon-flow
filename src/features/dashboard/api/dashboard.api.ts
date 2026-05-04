import { dashboardMock } from "../mocks/dashboard.mock";
import { DashboardData } from "../types/dashboard.types";

export async function getDashboardData(): Promise<DashboardData> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  return dashboardMock;
}

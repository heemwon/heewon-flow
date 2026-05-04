import { DashboardActivity } from "../../types/dashboard.types";

interface ActivityProps {
  data: DashboardActivity[];
  isLoading: boolean;
}
export default function Activity({ data, isLoading }: ActivityProps) {
  return (
    <ul>
      {data.map((activity) => (
        <li key={activity.id}>
          <span>{activity.description}</span>
          <span>{activity.createdAt}</span>
        </li>
      ))}
    </ul>
  );
}

import { Table } from "@design-system/components/table/Table";
import Badge from "@design-system/components/badge/Badge";
import { formatBadge } from "@/lib/formatBadge";
import { RecentUser } from "../../types/dashboard.types";

interface UserTableProps {
  data: RecentUser[];
  isLoading: boolean;
}

export default function UserTable({ data, isLoading }: UserTableProps) {
  return (
    <Table caption="최근 사용자 목록 테이블" isLoading={isLoading}>
      {isLoading ? (
        <Table.Skeleton columns={4} rows={5} />
      ) : (
        <>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>이름</Table.HeaderCell>
              <Table.HeaderCell>이메일</Table.HeaderCell>
              <Table.HeaderCell>상태</Table.HeaderCell>
              <Table.HeaderCell>권한</Table.HeaderCell>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            {data.map((user) => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                  <Badge variant={formatBadge(user.status)}>
                    {user.status}
                  </Badge>
                </Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </>
      )}
    </Table>
  );
}

import { ReactNode } from "react";

import { cn } from "@design-system/lib/cn";
import { Table } from "@design-system/components/table/Table";
import { User } from "../types/user.types";

export interface RowCell<T> {
  header: string;
  className?: string;
  render: (item: T) => ReactNode;
}

interface UserTableProps {
  data: User[];
  isLoading: boolean;
  rowCell: RowCell<User>[];
  caption: string;
  colLength: number;
  columns?: { id: string; width?: string }[];
}

export default function UserTable({
  data,
  isLoading,
  columns,
  rowCell,
  colLength,
  caption,
}: UserTableProps) {
  const isEmpty = !isLoading && data?.length === 0;

  return (
    <Table
      isLoading={isLoading}
      caption={isEmpty ? "데이터가 없는 테이블" : caption}
      columns={columns}
    >
      {isLoading ? (
        <Table.Skeleton columns={colLength} rows={5} />
      ) : (
        <>
          <Table.Head>
            <Table.Row>
              {rowCell.map((cell) => (
                <Table.HeaderCell key={cell.header}>
                  {cell.header}
                </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {isEmpty ? (
              <Table.Row>
                <Table.Cell colSpan={colLength} isEmpty />
              </Table.Row>
            ) : (
              data.map((user) => (
                <Table.Row key={user.id}>
                  {rowCell.map((cell) => (
                    <Table.Cell
                      key={cell.header}
                      className={cn(cell.className)}
                    >
                      {cell.render(user)}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))
            )}
          </Table.Body>
        </>
      )}
    </Table>
  );
}

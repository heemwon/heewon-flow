import type {
  HTMLAttributes,
  TableHTMLAttributes,
  ThHTMLAttributes,
  TdHTMLAttributes,
} from "react";
import clsx from "clsx";

import {
  tableBaseClass,
  tableBodyClass,
  tableCellClass,
  tableCellEmptyClass,
  tableCellEmptySpanClass,
  tableHeaderCellClass,
  tableRowClass,
  tableRowVariantClass,
  tableWrapperClass,
} from "./table.styles";
import { cn } from "@design-system/lib/cn";
import Skeleton from "../skeleton/Skeleton";

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  caption: string;
  columns?: { id: string; width?: string }[];
  isLoading?: boolean;
}
function TableRoot({
  caption,
  className,
  columns,
  children,
  isLoading = false,
  ...props
}: TableProps) {
  return (
    <div aria-busy={isLoading} className={tableWrapperClass}>
      <table className={clsx(tableBaseClass, className)} {...props}>
        <caption className="sr-only">
          {isLoading ? "테이블 데이터를 불러오는 중입니다." : caption}
        </caption>
        {columns && (
          <colgroup>
            {columns.map((col) => (
              <col key={col.id} style={{ width: col.width }} />
            ))}
          </colgroup>
        )}
        {children}
      </table>
    </div>
  );
}

function TableHead({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={className} {...props} />;
}

function TableBody({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={clsx(tableBodyClass, className)} {...props} />;
}

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  variant?: "disabled" | "selected";
}
function TableRow({ className, variant, ...props }: TableRowProps) {
  return (
    <tr
      aria-disabled={variant === "disabled" ? true : undefined}
      aria-selected={variant === "selected" ? true : undefined}
      className={cn(
        tableRowClass,
        variant && tableRowVariantClass[variant],
        className
      )}
      {...props}
    />
  );
}

function TableHeaderCell({
  className,
  scope = "col",
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      scope={scope}
      className={clsx(tableHeaderCellClass, className)}
      {...props}
    />
  );
}

interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  isEmpty?: boolean;
}
function TableCell({ className, isEmpty = false, ...props }: TableCellProps) {
  if (isEmpty)
    return (
      <td className={clsx(tableCellEmptyClass, className)} {...props}>
        <p>
          표시할 데이터가 없습니다
          <span className={tableCellEmptySpanClass}>
            아직 등록된 내역이 없어요. 새로운 데이터를 추가해 보세요.
          </span>
        </p>
      </td>
    );
  return <td className={clsx(tableCellClass, className)} {...props} />;
}

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}
function TableSkeleton({ rows = 5, columns = 4 }: TableSkeletonProps) {
  return (
    <tbody aria-hidden="true">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <td key={colIndex} className={tableCellClass}>
              <Skeleton className="h-sm w-full" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export const Table = Object.assign(TableRoot, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  HeaderCell: TableHeaderCell,
  Cell: TableCell,
  Skeleton: TableSkeleton,
});

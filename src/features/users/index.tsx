"use client";

import { useMemo, useState } from "react";

import Button from "@design-system/components/button/Button";
import Badge from "@design-system/components/badge/Badge";
import Checkbox from "@design-system/components/checkbox/Checkbox";
import IconButton from "@design-system/components/icon-button/IconButton";
import TextField from "@design-system/components/text-field/TextField";
import Dropdown from "@design-system/components/dropdown/Dropdown";
import { MoreDotIcon } from "@design-system/icons/MoreDotIcon";
import Section from "@/components/layout/section/Section";
import { formatBadge } from "@/lib/formatBadge";
import useDebounce from "@/app/shared/hooks/useDebounce";
import UserTable, { RowCell } from "../users/components/UserTable";
import type { User, UserStatusUi } from "../users/types/user.types";
import DeleteUserDialog from "./components/DeleteUserDialog";
import DetailDialog from "./components/detail-dialog";
import { useUserData } from "./hooks/useUserData";
import { useDeleteUsers } from "./hooks/useDeleteUsers";

const tableColumns = [
  { id: "users-checked", width: "100px" },
  { id: "users-name", width: "100px" },
  { id: "users-email" },
  { id: "users-status", width: "100px" },
  { id: "users-role", width: "100px" },
  { id: "users-join-at", width: "148px" },
  { id: "users-more", width: "100px" },
];

const tableFilterOptions = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Pending", value: "pending" },
  { label: "Blocked", value: "blocked" },
];

export default function Users() {
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<UserStatusUi>("all");
  const [detailId, setDetailId] = useState<string>("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [dialogType, setDialogType] = useState<"confirm" | "detail" | null>(
    null
  );

  const debouncedSearch = useDebounce({ value: search, delay: 300 });

  const { data, isLoading } = useUserData({
    search: debouncedSearch,
    status,
  });
  const { mutate: deleteUsers } = useDeleteUsers();

  const handleDialog = (type: "confirm" | "detail" | null) => {
    setDialogType(type);
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleDetailId = (id: string) => {
    setDetailId(id);
  };

  const handleDelete = () => {
    deleteUsers(selectedIds, {
      onSuccess: () => {
        setSelectedIds([]);
        handleDialog(null);
      },
    });
  };

  const dashboardColumns: RowCell<User>[] = useMemo(
    () => [
      {
        header: "선택",
        render: (u) => (
          <Checkbox
            id={`checkbox-${u.id}`}
            label={`${u.name} 선택`}
            srOnly
            checked={selectedIds.includes(u.id)}
            onChange={() => toggleSelect(u.id)}
          />
        ),
      },
      { header: "이름", render: (u) => u.name },
      { header: "이메일", render: (u) => u.email },
      {
        header: "상태",
        render: (u) => (
          <Badge variant={formatBadge(u.status)}>{u.status}</Badge>
        ),
      },
      { header: "권한", render: (u) => u.role },
      { header: "가입일", render: (u) => u.joinedAt },
      {
        header: "더보기",
        className: "flex justify-center items-center",
        render: (u) => (
          <IconButton
            label="더보기"
            className="flex justify-center items-center w-[24px] h-[24px]"
            onClick={() => {
              handleDialog("detail");
              toggleDetailId(u.id);
            }}
          >
            <MoreDotIcon />
          </IconButton>
        ),
      },
    ],
    [selectedIds]
  );

  return (
    <>
      <Section id="users" title="최근 사용자" className="w-full">
        <div className="flex-1 flex items-center justify-between">
          <div className="w-[280px]">
            <TextField
              id="users-textfield"
              label="최근 사용자 목록 검색"
              srOnly
              placeholder="이름, 이메일 검색"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-xs w-[238px]">
            <Dropdown
              id="users-dropdown"
              label="최근 사용자 목록 상태별 필터링"
              options={tableFilterOptions}
              placeholder="모든 상태"
              srOnly
              onChange={(e) => setStatus(e as UserStatusUi)}
            />
            <Button
              variant="danger"
              onClick={() => handleDialog("confirm")}
              disabled={selectedIds.length === 0}
            >
              사용자 삭제
            </Button>
          </div>
        </div>

        <UserTable
          data={data ?? []}
          caption="최근 사용자 목록 전체 테이블"
          isLoading={isLoading}
          rowCell={dashboardColumns}
          columns={tableColumns}
          colLength={7}
        />
      </Section>

      <DeleteUserDialog
        isOpen={dialogType === "confirm"}
        titleId="dialog-user-title"
        descriptionId="dialog-user-desc"
        handleDelete={handleDelete}
        onClose={() => handleDialog(null)}
      />
      <DetailDialog
        isOpen={dialogType === "detail"}
        titleId="dialog-detail-title"
        userData={data ?? []}
        detailId={detailId}
        onClose={() => handleDialog(null)}
      />
    </>
  );
}

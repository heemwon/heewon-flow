"use client";

import Dropdown from "@design-system/components/dropdown/Dropdown";
import TextField from "@design-system/components/text-field/TextField";
import { User, UserRole, UserStatus } from "@/features/users/types/user.types";
import { ROLE_OPTIONS, STATUS_OPTIONS } from "../../constants/options";
import { userFormBaseClass } from "./userForm.styles";

interface UserFormProps {
  errors: Partial<Record<keyof User, string>>;
  userValue: Partial<User>;
  handleChange: <K extends keyof User>({
    field,
    value,
  }: {
    field: K;
    value: User[K];
  }) => void;
}

export default function UserForm({
  errors,
  userValue,
  handleChange,
}: UserFormProps) {
  return (
    <div className={userFormBaseClass}>
      <TextField
        id="create-field-id"
        label="아이디"
        placeholder="gildong123"
        value={userValue.id}
        helpMessage={errors.id}
        isError={!!errors?.id}
        onChange={(e) => handleChange({ field: "id", value: e.target.value })}
      />
      <TextField
        id="create-field-name"
        label="이름"
        placeholder="홍길동"
        value={userValue.name}
        helpMessage={errors.name}
        isError={!!errors?.name}
        onChange={(e) => handleChange({ field: "name", value: e.target.value })}
      />
      <TextField
        id="create-field-email"
        label="이메일"
        placeholder="gildong@example.com"
        value={userValue.email}
        helpMessage={errors.email}
        isError={!!errors?.email}
        onChange={(e) =>
          handleChange({ field: "email", value: e.target.value })
        }
      />
      <Dropdown
        id="create-dropdown-role"
        label="권한"
        placeholder="선택해 주세요."
        value={userValue.role}
        options={ROLE_OPTIONS}
        helpMessage={errors.role}
        isError={!!errors?.role && !userValue.role}
        onChange={(value) =>
          handleChange({ field: "role", value: value as UserRole })
        }
      />
      <Dropdown
        id="create-dropdown-status"
        label="상태"
        placeholder="선택해 주세요."
        value={userValue.status}
        options={STATUS_OPTIONS}
        helpMessage={errors.status}
        isError={!!errors?.status && !userValue.status}
        onChange={(value) =>
          handleChange({ field: "status", value: value as UserStatus })
        }
      />
    </div>
  );
}

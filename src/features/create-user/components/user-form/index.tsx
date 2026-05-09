"use client";

import Dropdown from "@design-system/components/dropdown/Dropdown";
import TextField from "@design-system/components/text-field/TextField";
import type { User } from "@/features/users/types/user.types";
import { userFormBaseClass } from "./userForm.styles";
import { USER_FORM_FIELDS } from "../../constants/form";

interface UserFormProps {
  errors: Partial<Record<keyof User, string>>;
  isSubmitted: boolean;
  userValue: Partial<User>;
  handleChange: <K extends keyof User>(args: {
    key: K;
    value: User[K];
  }) => void;
}

export default function UserForm({
  errors,
  isSubmitted,
  userValue,
  handleChange,
}: UserFormProps) {
  return (
    <div className={userFormBaseClass}>
      {USER_FORM_FIELDS.map((field) => {
        const isError = !!errors[field.key as keyof User];
        const fieldProps = {
          id: `create-field-${field.key}`,
          label: field.label,
          placeholder: field.placeholder,
          helpMessage: errors[field.key as keyof User],
          isError:
            field.type === "dropdown"
              ? (isSubmitted && !userValue[field.key as keyof User]) || isError
              : isError,
        };

        if (field.type === "text") {
          return (
            <TextField
              key={field.key}
              {...fieldProps}
              value={userValue[field.key as keyof User] as string}
              onChange={(e) =>
                handleChange({
                  key: field.key as keyof User,
                  value: e.target.value as any,
                })
              }
              onClear={() =>
                handleChange({ key: field.key as keyof User, value: "" as any })
              }
            />
          );
        }

        return (
          <Dropdown
            key={field.key}
            {...fieldProps}
            value={userValue[field.key as keyof User]}
            options={field.options}
            onChange={(value) =>
              handleChange({
                key: field.key as keyof User,
                value: value as any,
              })
            }
          />
        );
      })}
    </div>
  );
}

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
  handleChange: <K extends keyof Partial<User>>(args: {
    key: K;
    value: Partial<User>[K];
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
        const key = field.key;
        const isError = !!errors[key];
        const fieldProps = {
          id: `create-field-${key}`,
          label: field.label,
          placeholder: field.placeholder,
          helpMessage: errors[key],
          isError:
            field.type === "dropdown"
              ? (isSubmitted && !userValue[key]) || isError
              : isError,
        };

        if (field.type === "text") {
          return (
            <TextField
              key={key}
              {...fieldProps}
              value={userValue[key] as string}
              onChange={(e) =>
                handleChange({
                  key,
                  value: e.target.value as Partial<User>[typeof key],
                })
              }
              onClear={() =>
                handleChange({
                  key,
                  value: "" as Partial<User>[typeof key],
                })
              }
            />
          );
        }

        return (
          <Dropdown
            key={key}
            {...fieldProps}
            value={userValue[key]}
            options={field.options}
            onChange={(value) =>
              handleChange({
                key,
                value: value as Partial<User>[typeof key],
              })
            }
          />
        );
      })}
    </div>
  );
}

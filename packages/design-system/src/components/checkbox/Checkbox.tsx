import { InputHTMLAttributes } from "react";
import clsx from "clsx";

import { CheckBox } from "@design-system/icons/CheckBox";
import {
  checkboxIconClass,
  checkboxInputClass,
  checkboxLabelClass,
} from "./checkbox.styles";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  srOnly?: boolean;
}

export default function Checkbox({
  id,
  label,
  srOnly = false,
  ...props
}: CheckboxProps) {
  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        className={checkboxInputClass}
        {...props}
      />
      <CheckBox className={clsx(checkboxIconClass)} />
      <span className={clsx(checkboxLabelClass, srOnly && "sr-only")}>
        {label}
      </span>
    </label>
  );
}

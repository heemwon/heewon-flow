import { ChangeEvent, InputHTMLAttributes, useRef, useState } from "react";

import { XIcon } from "@design-system/icons/XIcon";
import { cn } from "@design-system/lib/cn";
import FieldBox from "../field/FieldBox";
import FieldLabel from "../field/FieldLabel";
import FieldMessage from "../field/FieldMessage";
import IconButton from "../icon-button/IconButton";
import {
  clearButtonBaseClass,
  inputBaseClass,
  textFieldBaseClass,
} from "./textfield.styles";

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  id: string;
  label: string;
  helpMessage?: string;
  isError?: boolean;
  srOnly?: boolean;
  onClear?: () => void;
}

export default function TextField({
  id,
  label,
  helpMessage,
  isError = false,
  srOnly = false,
  value,
  defaultValue,
  onChange,
  onClear,
  disabled,
  readOnly,
  ...props
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = useState(
    defaultValue?.toString() ?? ""
  );

  const currentValue = isControlled ? value?.toString() ?? "" : internalValue;
  const hasValue = currentValue.length > 0;
  const canClear = hasValue && !disabled && !readOnly;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(event.target.value);
    }

    onChange?.(event);
  };

  const handleClear = () => {
    if (!canClear) return;

    if (isControlled) {
      onClear?.();
    } else {
      setInternalValue("");
    }

    inputRef.current?.focus();
  };

  return (
    <div className={textFieldBaseClass}>
      <FieldLabel htmlFor={id} isError={isError} text={label} srOnly={srOnly} />

      <FieldBox isError={isError}>
        <input
          ref={inputRef}
          id={id}
          value={isControlled ? value : internalValue}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={isError}
          aria-describedby={helpMessage ? `${id}-help` : undefined}
          {...props}
          className={cn(inputBaseClass, props.className)}
        />

        {canClear && (
          <IconButton
            type="button"
            label="입력값 지우기"
            className={clearButtonBaseClass}
            onClick={handleClear}
          >
            <XIcon />
          </IconButton>
        )}
      </FieldBox>

      {helpMessage && (
        <FieldMessage id={`${id}-help`} isError={isError} text={helpMessage} />
      )}
    </div>
  );
}

import clsx from "clsx";

import { fieldLabelBaseClass, fieldTextErrorClass } from "./field.styles";

interface FieldLabelProps {
  htmlFor: string;
  text: string;
  srOnly?: boolean;
  isError?: boolean;
}

export default function FieldLabel({
  htmlFor,
  text,
  srOnly = false,
  isError = false,
}: FieldLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        fieldLabelBaseClass,
        srOnly && "sr-only",
        isError && fieldTextErrorClass
      )}
    >
      {text}
    </label>
  );
}

import clsx from "clsx";

import { fieldMessageBaseClass, fieldTextErrorClass } from "./field.styles";

interface FieldMessageProps {
  id: string;
  text: string;
  isError?: boolean;
}

export default function FieldMessage({
  id,
  text,
  isError = false,
}: FieldMessageProps) {
  return (
    <span
      id={id}
      className={clsx(fieldMessageBaseClass, isError && fieldTextErrorClass)}
    >
      {text}
    </span>
  );
}

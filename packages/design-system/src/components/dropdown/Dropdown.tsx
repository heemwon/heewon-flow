import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

import { cn } from "@design-system/lib/cn";
import { ChevronDownIcon } from "@design-system/icons/ChevronDownIcon";
import FieldBox from "../field/FieldBox";
import FieldLabel from "../field/FieldLabel";
import FieldMessage from "../field/FieldMessage";

import {
  dropdownBaseClass,
  dropdownIconClass,
  dropdownIconIsOpenClass,
  dropdownListClass,
  dropdownOptionClass,
  dropdownOptionSelectedClass,
  dropdownTriggerClass,
  dropdownValueClass,
} from "./dropdown.styles";

export type DropdownOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

interface DropdownProps {
  id: string;
  label: string;
  options: DropdownOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  helpMessage?: string;
  isError?: boolean;
  disabled?: boolean;
  srOnly?: boolean;
  onChange?: (value: string) => void;
}

export default function Dropdown({
  id,
  label,
  options = [],
  value,
  defaultValue,
  placeholder = "선택해주세요",
  helpMessage,
  isError = false,
  disabled = false,
  srOnly = false,
  onChange,
}: DropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const isControlled = value !== undefined;

  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");

  const selectedValue = isControlled ? value : internalValue;

  const selectedOption = useMemo(
    () => options.find((option) => option.value === selectedValue),
    [options, selectedValue]
  );

  const listboxId = `${id}-listbox`;

  const close = () => setIsOpen(false);

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: DropdownOption) => {
    if (option.disabled) return;

    if (!isControlled) {
      setInternalValue(option.value);
    }

    onChange?.(option.value);
    close();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    if (event.key === "Escape") {
      close();
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={rootRef} className={dropdownBaseClass}>
      <FieldLabel htmlFor={id} isError={isError} text={label} srOnly={srOnly} />

      <button
        id={id}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listboxId : undefined}
        aria-invalid={isError}
        aria-describedby={helpMessage ? `${id}-help` : undefined}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={dropdownTriggerClass}
      >
        <FieldBox isError={isError}>
          <span className={dropdownValueClass}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>

          <ChevronDownIcon
            className={cn(dropdownIconClass, isOpen && dropdownIconIsOpenClass)}
          />
        </FieldBox>
      </button>

      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          className={clsx(dropdownListClass, !srOnly && "top-[76px] ")}
        >
          {options.map((option) => {
            const isSelected = option.value === selectedValue;

            return (
              <li key={option.value}>
                <button
                  type="button"
                  aria-selected={isSelected}
                  disabled={option.disabled}
                  onClick={() => handleSelect(option)}
                  className={clsx(
                    dropdownOptionClass,
                    isSelected && dropdownOptionSelectedClass
                  )}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {helpMessage && (
        <FieldMessage id={`${id}-help`} isError={isError} text={helpMessage} />
      )}
    </div>
  );
}

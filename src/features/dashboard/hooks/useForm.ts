import { useState, useCallback } from "react";

export const useForm = <T extends Record<string, any>>({
  initialValues,
  validateFn,
}: {
  initialValues: T;
  validateFn?: (values: T) => {
    isValid: boolean;
    errors: Partial<Record<keyof T, string>>;
  };
}) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isDirty = JSON.stringify(initialValues) !== JSON.stringify(values);

  const handleChange = useCallback(
    <K extends keyof T>({ key, value }: { key: K; value: T[K] }) => {
      setValues((prev) => ({
        ...prev,
        [key]: value,
      }));

      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    },
    []
  );

  const onSubmit = useCallback(
    (callback: (data: T) => void) => {
      setIsSubmitted(true);

      if (validateFn) {
        const { isValid, errors: validationErrors } = validateFn(values);
        if (!isValid) {
          return setErrors(validationErrors);
        }
      }

      callback(values);
    },
    [values, validateFn]
  );

  const onReset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitted(false);
  }, [initialValues]);

  return {
    values,
    errors,
    isSubmitted,
    isDirty,
    handleChange,
    onSubmit,
    onReset,
    setValues,
    setErrors,
  };
};

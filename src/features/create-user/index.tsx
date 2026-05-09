"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@design-system/components/button/Button";
import Section from "@/components/layout/section/Section";
import { User } from "@/features/users/types/user.types";
import { validateUserForm } from "@/features/dashboard/utils/validation";
import { useCreateUser } from "@/features/users/hooks/useCreateUser";
import { INIT_FORM_VALUE } from "./constants/form";
import UserForm from "./components/user-form";

export default function CreateUser() {
  const router = useRouter();

  const [userValue, setUserValue] = useState<Partial<User>>(INIT_FORM_VALUE);
  const [errors, setErrors] = useState<Partial<Record<keyof User, string>>>({});

  const { mutate: createUser } = useCreateUser();

  const handleChange = <K extends keyof User>({
    field,
    value,
  }: {
    field: K;
    value: User[K];
  }) => {
    setUserValue((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const { isValid, errors } = validateUserForm(userValue);

    if (!isValid) {
      return setErrors(errors);
    }

    createUser(userValue as User, {
      onSuccess: () => {
        router.push("/dashboard/users");
      },
    });
  };

  return (
    <Section
      id="create-user"
      title="사용자 추가"
      className="flex-col gap-lg pt-xxl "
    >
      <UserForm
        errors={errors}
        userValue={userValue}
        handleChange={handleChange}
      />
      <Button className="mt-xxl w-[480px]" onClick={handleSubmit}>
        추가하기
      </Button>
    </Section>
  );
}

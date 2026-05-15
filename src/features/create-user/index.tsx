"use client";

import { useRouter } from "next/navigation";

import Button from "@design-system/components/button/Button";
import Section from "@/components/layout/section/Section";
import { User } from "@/features/users/types/user.types";
import { useCreateUser } from "@/features/users/hooks/useCreateUser";
import { INIT_FORM_VALUE } from "./constants/form";
import UserForm from "./components/user-form";
import { useForm } from "../dashboard/hooks/useForm";
import { validateUserForm } from "../dashboard/utils/validation";

export default function CreateUser() {
  const router = useRouter();

  const { mutate: createUser } = useCreateUser();

  const { values, errors, isSubmitted, handleChange, onSubmit } = useForm<
    Partial<User>
  >({ initialValues: INIT_FORM_VALUE, validateFn: validateUserForm });

  const handleCreate = () => {
    onSubmit((data) => {
      createUser(data as User, {
        onSuccess: () => {
          router.push("/dashboard/users");
        },
      });
    });
  };

  return (
    <Section
      id="create-user"
      title="사용자 추가"
      className="flex-col gap-lg p-md pt-xxl "
    >
      <UserForm
        errors={errors}
        isSubmitted={isSubmitted}
        userValue={values}
        handleChange={handleChange}
      />
      <Button className="mt-xxl w-full lg:w-[480px]" onClick={handleCreate}>
        추가하기
      </Button>
    </Section>
  );
}

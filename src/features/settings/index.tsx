"use client";

import { useState } from "react";

import Button from "@design-system/components/button/Button";
import Section from "@/components/layout/section/Section";
import Workspace from "./components/workspace";
import Notification from "./components/notification";
import Private from "./components/security";
import SuccessDialog from "./components/SuccessDialog";
import { useSettingsData } from "./hooks/useSettingsData";
import { validateSettingsForm } from "./utils/validation";
import type { Settings } from "./types/settings.types";
import { useForm } from "../dashboard/hooks/useForm";
import { useUpdateSettings } from "./hooks/useUpdateSettings";

export default function Settings() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const { data } = useSettingsData();
  const { mutate: updateSettings } = useUpdateSettings();

  if (!data) return null;

  const { values, errors, isDirty, handleChange, onSubmit, onReset } =
    useForm<Settings>({
      initialValues: data,
      validateFn: validateSettingsForm,
    });

  const handleCreate = () => {
    onSubmit((data) => {
      updateSettings(data as Settings, {
        onSuccess: () => {
          setIsDialogOpen(true);
        },
      });
    });
  };

  return (
    <>
      <Section
        id="settings"
        title="설정"
        titleSrOnly
        className="flex flex-col items-start gap-sm "
      >
        <Workspace data={values} handleChange={handleChange} errors={errors} />
        <Notification data={values} handleChange={handleChange} />
        <Private data={values} handleChange={handleChange} />

        <div className="flex items-center gap-sm pt-xl ml-auto w-[400px]">
          <Button variant="secondary" onClick={onReset} disabled={!isDirty}>
            초기화
          </Button>
          <Button disabled={!isDirty} onClick={handleCreate}>
            변경사항 저장
          </Button>
        </div>
      </Section>

      <SuccessDialog
        isOpen={isDialogOpen}
        titleId="dialog-settings-title"
        descriptionId="dialog-settings-desc"
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}

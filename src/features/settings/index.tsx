"use client";

import { useState } from "react";

import Button from "@design-system/components/button/Button";
import ErrorDialog from "@/components/feedback/ErrorDialog";
import InlineError from "@/components/feedback/InlineError";
import Section from "@/components/layout/section/Section";
import { getErrorMessage } from "@/lib/http";
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
  const { data, error, isError, isLoading, refetch } = useSettingsData();

  if (isLoading) return null;

  if (isError || !data) {
    return (
      <Section
        id="settings"
        title="설정"
        titleSrOnly
        className="flex flex-col items-start gap-sm px-md lg:px-0 "
      >
        <InlineError
          message={getErrorMessage(error, "설정 정보를 불러오지 못했습니다.")}
          onRetry={() => refetch()}
        />
      </Section>
    );
  }

  return <SettingsForm initialValues={data} />;
}

interface SettingsFormProps {
  initialValues: Settings;
}

function SettingsForm({ initialValues }: SettingsFormProps) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const {
    mutate: updateSettings,
    error: updateError,
    reset: resetUpdateError,
  } = useUpdateSettings();

  const { values, errors, isDirty, handleChange, onSubmit, onReset } =
    useForm<Settings>({
      initialValues,
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
        className="flex flex-col items-start gap-sm px-md lg:px-0 "
      >
        <Workspace data={values} handleChange={handleChange} errors={errors} />
        <Notification data={values} handleChange={handleChange} />
        <Private data={values} handleChange={handleChange} />

        <div className="flex items-center gap-xs pt-xl ml-auto w-full md:gap-sm md:w-[400px]">
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
      <ErrorDialog
        isOpen={!!updateError}
        titleId="dialog-settings-error-title"
        descriptionId="dialog-settings-error-desc"
        title="설정을 저장하지 못했습니다."
        message={getErrorMessage(updateError, "잠시 후 다시 시도해 주세요.")}
        onClose={resetUpdateError}
      />
    </>
  );
}

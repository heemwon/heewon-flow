"use client";

import TextField from "@design-system/components/text-field/TextField";
import Container from "../container";
import { containerContentBaseClass } from "../container/container.styles";
import {
  workspaceFieldBaseClass,
  workspaceListBaseClass,
  workspaceTitleBaseClass,
} from "./workspace.styles";
import { WORKSPACE_FIELDS } from "../../constants/workspace";
import { Settings } from "../../types/settings.types";

interface WorkspaceProps {
  data: Settings;
  errors: Partial<Record<keyof Settings, string>>;
  handleChange: <K extends keyof Settings>(args: {
    key: K;
    value: Settings[K];
  }) => void;
}

export default function Workspace({
  data,
  errors,
  handleChange,
}: WorkspaceProps) {
  return (
    <Container title="워크스페이스 설정" desc="서비스 기본 정보를 관리합니다.">
      <ul className={containerContentBaseClass}>
        {WORKSPACE_FIELDS.map((field) => (
          <li key={field.id} className={workspaceListBaseClass}>
            <span aria-hidden="true" className={workspaceTitleBaseClass}>
              {field.label}
            </span>
            <div className={workspaceFieldBaseClass}>
              <TextField
                id={`settings-${field.id}-field`}
                label={field.label}
                srOnly
                value={data[field.key] ?? ""}
                onChange={(e) =>
                  handleChange({ key: field.key, value: e.target.value })
                }
                onClear={() => handleChange({ key: field.key, value: "" })}
                isError={!!errors[field.key]}
                helpMessage={errors[field.key]}
              />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

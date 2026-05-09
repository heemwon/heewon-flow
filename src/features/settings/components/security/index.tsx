"use client";

import Dropdown from "@design-system/components/dropdown/Dropdown";
import Checkbox from "@design-system/components/checkbox/Checkbox";
import { cn } from "@design-system/lib/cn";
import {
  notificationContentClass,
  notificationDescBaseClass,
  notificationInfoBaseClass,
  notificationListBaseClass,
  notificationTitleBaseClass,
} from "../notification/notification.styles";
import type { SessionTimeout, Settings } from "../../types/settings.types";
import Container from "../container";
import { containerContentBaseClass } from "../container/container.styles";
import { SESSION_TIMEOUT_OPTIONS } from "../../constants/notification";

interface SecurityProps {
  data: Settings;
  handleChange: <K extends keyof Settings>(args: {
    key: K;
    value: Settings[K];
  }) => void;
}

export default function Security({ data, handleChange }: SecurityProps) {
  return (
    <Container title="보안 설정" desc="보안 관련 설정을 관리합니다.">
      <ul className={cn(containerContentBaseClass, notificationContentClass)}>
        <li className={notificationListBaseClass}>
          <span aria-hidden="true" className={notificationInfoBaseClass}>
            <span className={notificationTitleBaseClass}>2단계 인증</span>
            <p className={notificationDescBaseClass}>
              로그인 시 추가 인증 단계를 사용합니다.
            </p>
          </span>
          <Checkbox
            id="settings-private-selected"
            label="2단계 인증"
            srOnly
            checked={data.twoFactorAuth}
            onChange={(e) =>
              handleChange({
                key: "twoFactorAuth",
                value: e.target.checked,
              })
            }
          />
        </li>
        <li className={notificationListBaseClass}>
          <span aria-hidden="true" className={notificationInfoBaseClass}>
            <span className={notificationTitleBaseClass}>세션 만료 시간</span>
            <p className={notificationDescBaseClass}>
              사용자가 자리를 비울 때 자동 로그아웃 시간을 설정합니다.
            </p>
          </span>
          <Dropdown
            id="settings-session-dropdown"
            label="세션 만료 시간"
            options={SESSION_TIMEOUT_OPTIONS}
            value={data.sessionTimeout}
            srOnly
            onChange={(value) =>
              handleChange({
                key: "sessionTimeout",
                value: value as SessionTimeout,
              })
            }
          />
        </li>
      </ul>
    </Container>
  );
}

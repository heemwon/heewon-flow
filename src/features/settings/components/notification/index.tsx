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
} from "./notification.styles";
import { ReportCycle, Settings } from "../../types/settings.types";
import Container from "../container";
import { containerContentBaseClass } from "../container/container.styles";
import {
  NOTIFICATION_ITEMS,
  REPORT_CYCLE_OPTIONS,
} from "../../constants/notification";

interface NotificationProps {
  data: Settings;
  handleChange: <K extends keyof Settings>(args: {
    key: K;
    value: Settings[K];
  }) => void;
}

export default function Notification({
  data,
  handleChange,
}: NotificationProps) {
  return (
    <Container
      title="알림 설정"
      desc="이메일 알림 및 리포트 수신 설정을 관리합니다."
    >
      <ul className={cn(containerContentBaseClass, notificationContentClass)}>
        {NOTIFICATION_ITEMS.map((item) => (
          <li key={item.key} className={notificationListBaseClass}>
            <span aria-hidden="true" className={notificationInfoBaseClass}>
              <span className={notificationTitleBaseClass}>{item.title}</span>
              <p className={notificationDescBaseClass}>{item.description}</p>
            </span>
            <Checkbox
              id={item.id}
              label={item.title}
              srOnly
              checked={!!data[item.key as keyof Settings]}
              onChange={(e) =>
                handleChange({
                  key: item.key as keyof Settings,
                  value: e.target.checked,
                })
              }
            />
          </li>
        ))}

        <li className={notificationListBaseClass}>
          <span aria-hidden="true" className={notificationInfoBaseClass}>
            <span className={notificationTitleBaseClass}>리포트 수신 주기</span>
            <p className={notificationDescBaseClass}>
              정기 리포트 수신 주기를 선택하세요.
            </p>
          </span>
          <Dropdown
            id="settings-report-dropdown"
            label="리포트 수신 주기"
            options={REPORT_CYCLE_OPTIONS}
            value={data.reportCycle}
            srOnly
            onChange={(value) =>
              handleChange({
                key: "reportCycle",
                value: value as ReportCycle,
              })
            }
          />
        </li>
      </ul>
    </Container>
  );
}

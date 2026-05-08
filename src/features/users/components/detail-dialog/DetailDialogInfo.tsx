import clsx from "clsx";

import { User } from "../../types/user.types";
import {
  detailDialogInfoBaseClass,
  detailDialogInfoDBaseClass,
  detailDialogInfoDdClass,
  detailDialogInfoDtClass,
} from "./detailDialog.styles";

interface DetailDialogInfoProps {
  data: User;
}

export default function DetailDialogInfo({ data }: DetailDialogInfoProps) {
  const { id, role, joinedAt } = data;

  return (
    <dl className={detailDialogInfoBaseClass}>
      <dt className={clsx(detailDialogInfoDBaseClass, detailDialogInfoDtClass)}>
        ID
      </dt>
      <dd className={clsx(detailDialogInfoDBaseClass, detailDialogInfoDdClass)}>
        {id}
      </dd>
      <dt className={clsx(detailDialogInfoDBaseClass, detailDialogInfoDtClass)}>
        권한
      </dt>
      <dd className={clsx(detailDialogInfoDBaseClass, detailDialogInfoDdClass)}>
        {role}
      </dd>
      <dt className={clsx(detailDialogInfoDBaseClass, detailDialogInfoDtClass)}>
        가입일
      </dt>
      <dd className={clsx(detailDialogInfoDBaseClass, detailDialogInfoDdClass)}>
        {joinedAt}
      </dd>
    </dl>
  );
}

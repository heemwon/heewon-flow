import Badge from "@design-system/components/badge/Badge";
import { formatBadge } from "@/features/dashboard/mappers/formatBadge";
import { User } from "../../types/user.types";
import {
  detailDialogTitleBaseClass,
  detailDialogTitleEmailClass,
  detailDialogTitleNameClass,
} from "./detailDialog.styles";

interface DetailDialogTitleProps {
  data: User;
}

export default function DetailDialogTitle({ data }: DetailDialogTitleProps) {
  const { name, email, status } = data;

  return (
    <div className={detailDialogTitleBaseClass}>
      <strong className={detailDialogTitleNameClass}>{name}</strong>
      <Badge variant={formatBadge(status)}>{status}</Badge>
      <span className={detailDialogTitleEmailClass}>{email}</span>
    </div>
  );
}

import { Dialog } from "@design-system/components/dialog/Dialog";
import DetailDialogTitle from "./DetailDialogTitle";
import DetailDialogInfo from "./DetailDialogInfo";
import { User } from "../../types/user.types";

interface DetailDialogProps {
  detailId: string;
  isOpen: boolean;
  titleId: string;
  userData: User[];
  onClose: () => void;
}

export default function DetailDialog({
  detailId,
  isOpen,
  titleId,
  userData,
  onClose,
}: DetailDialogProps) {
  const data = userData.find((user) => user.id === detailId);

  return (
    <Dialog isOpen={isOpen} titleId={titleId} onClose={onClose}>
      <Dialog.Header layout="left">
        <Dialog.Title id={titleId}>회원 정보</Dialog.Title>
      </Dialog.Header>

      <Dialog.Body className="flex flex-col gap-lg">
        {data && (
          <>
            <DetailDialogTitle data={data} />
            <DetailDialogInfo data={data} />
          </>
        )}
      </Dialog.Body>
      <Dialog.CloseButton onClose={onClose} />
    </Dialog>
  );
}

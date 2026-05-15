import Button from "@design-system/components/button/Button";
import { Dialog } from "@design-system/components/dialog/Dialog";

interface DeleteUserDialogProps {
  isOpen: boolean;
  titleId: string;
  descriptionId: string;
  handleDelete: () => void;
  onClose: () => void;
}

export default function DeleteUserDialog({
  isOpen,
  titleId,
  descriptionId,
  handleDelete,
  onClose,
}: DeleteUserDialogProps) {
  return (
    <Dialog
      isOpen={isOpen}
      titleId={titleId}
      descriptionId={descriptionId}
      onClose={onClose}
    >
      <Dialog.Header layout="center">
        <Dialog.Title id={titleId}>선택한 사용자를 삭제할까요?</Dialog.Title>
      </Dialog.Header>

      <Dialog.Body
        className="text-gray-500 text-body-lg text-center"
        id={descriptionId}
      >
        사용자를 삭제하면 목록에서 제거됩니다.
      </Dialog.Body>

      <Dialog.Footer>
        <Button
          className="w-full md:w-[120px] "
          variant="secondary"
          onClick={onClose}
        >
          취소
        </Button>
        <Button
          className="w-full md:w-[120px] "
          variant="primary"
          onClick={handleDelete}
        >
          확인
        </Button>
      </Dialog.Footer>

      <Dialog.CloseButton onClose={onClose} />
    </Dialog>
  );
}

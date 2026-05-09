import Button from "@design-system/components/button/Button";
import { Dialog } from "@design-system/components/dialog/Dialog";

interface SuccessDialogProps {
  isOpen: boolean;
  titleId: string;
  descriptionId: string;
  onClose: () => void;
}

export default function SuccessDialog({
  isOpen,
  titleId,
  descriptionId,
  onClose,
}: SuccessDialogProps) {
  return (
    <Dialog
      isOpen={isOpen}
      titleId={titleId}
      descriptionId={descriptionId}
      onClose={onClose}
    >
      <Dialog.Header layout="center">
        <Dialog.Title id={titleId}>설정이 저장되었습니다.</Dialog.Title>
      </Dialog.Header>

      <Dialog.Body
        className="text-gray-500 text-body-lg text-center"
        id={descriptionId}
      >
        변경하신 정보가 시스템에 안전하게 반영되었습니다.
      </Dialog.Body>

      <Dialog.Footer>
        <Button className="w-[120px]" variant="primary" onClick={onClose}>
          확인
        </Button>
      </Dialog.Footer>

      <Dialog.CloseButton onClose={onClose} />
    </Dialog>
  );
}

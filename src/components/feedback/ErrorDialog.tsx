import Button from "@design-system/components/button/Button";
import { Dialog } from "@design-system/components/dialog/Dialog";

interface ErrorDialogProps {
  isOpen: boolean;
  titleId: string;
  descriptionId: string;
  title?: string;
  message: string;
  onClose: () => void;
}

export default function ErrorDialog({
  isOpen,
  titleId,
  descriptionId,
  title = "요청을 처리하지 못했습니다.",
  message,
  onClose,
}: ErrorDialogProps) {
  return (
    <Dialog
      isOpen={isOpen}
      titleId={titleId}
      descriptionId={descriptionId}
      onClose={onClose}
    >
      <Dialog.Header layout="center">
        <Dialog.Title id={titleId}>{title}</Dialog.Title>
      </Dialog.Header>

      <Dialog.Body
        className="text-gray-500 text-body-lg text-center"
        id={descriptionId}
      >
        {message}
      </Dialog.Body>

      <Dialog.Footer>
        <Button
          className="w-full md:w-[120px]"
          variant="primary"
          onClick={onClose}
        >
          확인
        </Button>
      </Dialog.Footer>

      <Dialog.CloseButton onClose={onClose} />
    </Dialog>
  );
}

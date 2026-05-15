import { useRef, type HTMLAttributes, type ReactNode } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

import { cn } from "@design-system/lib/cn";
import { XIcon } from "@design-system/icons/XIcon";
import { useFocusTrap } from "@design-system/hooks/useFocusTrap";
import { useBodyScrollLock } from "@design-system/hooks/useBodyScrollLock";
import IconButton from "../icon-button/IconButton";
import {
  dialogCloseButtonClass,
  dialogFooterClass,
  dialogHeaderClass,
  dialogOverlayClass,
  dialogPanelClass,
} from "./dialog.styles";

interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  children: ReactNode;
  titleId: string;
  onClose: () => void;
  descriptionId?: string;
  portalContainer?: HTMLElement | null;
  portalMode?: "viewport" | "container";
}

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      [
        "a[href]",
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        "select:not([disabled])",
        "[tabindex]:not([tabindex='-1'])",
      ].join(",")
    )
  );
}

function DialogRoot({
  isOpen,
  onClose,
  children,
  className,
  titleId,
  descriptionId,
  portalContainer,
  portalMode = "viewport",
  ...props
}: DialogProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useFocusTrap({
    isOpen,
    containerRef: panelRef,
    onClose,
  });

  useBodyScrollLock(isOpen);

  if (!isOpen || typeof document === "undefined") return null;

  const container = portalContainer ?? document.body;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={cn(
        portalMode === "container" ? "absolute inset-0" : "fixed inset-0",
        dialogOverlayClass
      )}
      role="presentation"
      onClick={handleOverlayClick}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId || undefined}
        tabIndex={-1}
        className={clsx(dialogPanelClass, className)}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>,
    container
  );
}

interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {
  layout?: "left" | "center";
}
function DialogHeader({
  className,
  layout = "left",
  ...props
}: DialogHeaderProps) {
  return (
    <header className={clsx(dialogHeaderClass[layout], className)} {...props} />
  );
}

interface DialogTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  id: string;
}
function DialogTitle({ id, className, ...props }: DialogTitleProps) {
  return <h2 id={id} className={className} {...props} />;
}

interface DialogBodyProps extends HTMLAttributes<HTMLDivElement> {
  id?: string;
}
function DialogBody({ className, id, ...props }: DialogBodyProps) {
  return <div id={id} className={className} {...props} />;
}

function DialogFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <footer className={clsx(dialogFooterClass, className)} {...props} />;
}

interface DialogCloseButtonProps {
  onClose: () => void;
}
function DialogCloseButton({ onClose }: DialogCloseButtonProps) {
  return (
    <IconButton
      type="button"
      className={dialogCloseButtonClass}
      label="Dialog 닫기"
      onClick={onClose}
    >
      <XIcon />
    </IconButton>
  );
}

export const Dialog = Object.assign(DialogRoot, {
  Header: DialogHeader,
  Title: DialogTitle,
  Body: DialogBody,
  Footer: DialogFooter,
  CloseButton: DialogCloseButton,
});

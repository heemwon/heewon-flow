import Button from "@design-system/components/button/Button";

interface InlineErrorProps {
  message: string;
  onRetry?: () => void;
}

export default function InlineError({ message, onRetry }: InlineErrorProps) {
  return (
    <div
      className="flex flex-col gap-xs rounded-sm border border-state-error bg-white px-sm py-sm text-body-md text-gray-700 md:flex-row md:items-center md:justify-between"
      role="alert"
    >
      <p>{message}</p>
      {onRetry && (
        <Button
          className="w-full md:w-[120px]"
          size="sm"
          variant="secondary"
          onClick={onRetry}
        >
          다시 시도
        </Button>
      )}
    </div>
  );
}

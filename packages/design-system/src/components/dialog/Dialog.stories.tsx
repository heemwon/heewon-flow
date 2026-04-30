import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Dialog } from "./Dialog";
import Button from "../button/Button";
import TextField from "../text-field/TextField";
import Dropdown from "../dropdown/Dropdown";
import { useRef } from "react";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "사용자에게 중요한 정보나 액션을 집중해서 전달하는 Dialog 컴포넌트입니다. confirm, detail, form 형태로 조합할 수 있으며 role='dialog', aria-modal, aria-labelledby, aria-describedby를 통해 접근성을 고려했습니다. ESC 닫기, focus trap, focus 복귀, body scroll lock을 지원합니다.",
      },
    },
  },
  args: {
    isOpen: false,
    titleId: "storybook-dialog-title",
  },
  argTypes: {
    isOpen: {
      control: "boolean",
    },
    titleId: {
      table: {
        disable: true,
      },
    },
    descriptionId: {
      table: {
        disable: true,
      },
    },
    onClose: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    ...meta.args,
    children: null,
    onClose: () => {},
    isOpen: false,
  },
  render: (args) => {
    const portalRef = useRef<HTMLDivElement>(null);

    return (
      <div className="relative h-[520px] overflow-hidden">
        <div ref={portalRef} />
        <Dialog {...args} descriptionId="storybook-dialog-description">
          <Dialog.Header layout="center">
            <Dialog.Title id={args.titleId}>타이틀</Dialog.Title>
          </Dialog.Header>

          <Dialog.Body
            className="text-gray-500 text-body-lg"
            id="storybook-dialog-description"
          >
            서브타이틀은 최대 세 줄까지 작성할 수 있습니다. 서브타이틀은 최대 세
            줄까지 작성할 수 있습니다.
          </Dialog.Body>

          <Dialog.Footer>
            <Button className="w-[120px]" variant="secondary">
              취소
            </Button>
            <Button className="w-[120px]" variant="primary">
              확인
            </Button>
          </Dialog.Footer>

          <Dialog.CloseButton onClose={args.onClose} />
        </Dialog>
      </div>
    );
  },
};

export const Form: Story = {
  args: {
    ...meta.args,
    children: null,
    onClose: () => {},
    isOpen: false,
  },
  render: (args) => (
    <Dialog {...args}>
      <Dialog.Header layout="left">
        <Dialog.Title id={args.titleId}>타이틀</Dialog.Title>
      </Dialog.Header>

      <Dialog.Body className="flex flex-col gap-sm">
        <TextField id="storybook-dialog-field1" label="이름" />
        <TextField id="storybook-dialog-field2" label="이메일" />
        <Dropdown
          id="storybook-dialog-dropdown1"
          label="권한"
          options={[{ label: "옵션 1", value: "1" }]}
        />
        <Dropdown id="storybook-dialog-dropdown2" label="상태" options={[]} />
      </Dialog.Body>

      <Dialog.Footer className="justify-end">
        <Button className="w-[120px]" variant="secondary">
          취소
        </Button>
        <Button className="w-[120px]" variant="primary">
          확인
        </Button>
      </Dialog.Footer>

      <Dialog.CloseButton onClose={args.onClose} />
    </Dialog>
  ),
};

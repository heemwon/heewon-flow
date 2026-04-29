import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import TextField from "./TextField";

const meta = {
  title: "Components/Textfield",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "사용자의 텍스트 입력을 받는 기본 입력 컴포넌트입니다. label, help message, error 상태를 지원하며 controlled / uncontrolled 방식 모두 사용할 수 있습니다. 입력값이 존재할 경우 clear button이 노출되며, disabled 및 readOnly 상태에서는 비활성화됩니다. 접근성을 위해 label 연결, aria-invalid, aria-describedby 속성을 제공합니다.",
      },
    },
  },
  args: {
    id: `storybook-textfield`,
    label: "레이블",
    disabled: false,
    helpMessage: "Help Message",
    isError: false,
    placeholder: "placeholder",
    srOnly: false,
  },
  argTypes: {
    id: {
      control: "text",
    },
    label: {
      control: "text",
    },
    helpMessage: {
      control: "text",
    },
    isError: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-md">
      <TextField
        id={`storybook-textfield-placeholder`}
        label="Default"
        placeholder="placeholder"
        helpMessage="Help Message"
      />
      <TextField
        id={`storybook-textfield-default`}
        label="hasValue"
        value="Value"
        helpMessage="Help Message"
      />
      <TextField
        id={`storybook-textfield-error`}
        label="Error"
        value="Value"
        isError
        helpMessage="Help Message"
      />
      <TextField
        id={`storybook-textfield-disabled`}
        label="Disabled"
        value="Value"
        disabled
        helpMessage="Help Message"
      />
    </div>
  ),
};

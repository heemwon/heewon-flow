import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { XIcon } from "@design-system/icons/XIcon";
import IconButton from "./IconButton";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "아이콘만 표시하는 보조 액션 버튼 컴포넌트입니다. 닫기, 삭제, 입력값 초기화, 메뉴 열기 등 공간이 제한된 UI에서 사용합니다. 시각적 텍스트가 없기 때문에 접근성을 위해 aria-label(label prop)을 반드시 제공해야 합니다.",
      },
    },
  },
  args: {
    children: <XIcon />,
    label: "label",
  },
  argTypes: {
    children: {
      control: "text",
      description: "Icon Component",
    },
    label: {
      control: "text",
      description: "aria-label",
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithCustomChildren: Story = {
  render: () => (
    <IconButton label="close button">
      <XIcon width={20} height={20} />
    </IconButton>
  ),
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Badge from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "상태(Status)나 카테고리(Label) 정보를 간결하게 표시하는 Badge 컴포넌트입니다. 비인터랙티브 요소로 사용되며 색상과 텍스트를 통해 의미를 전달합니다. 접근성을 위해 색상만으로 의미를 전달하지 않고 텍스트를 함께 제공하며, 필요 시 aria-label을 통해 보조 설명을 추가할 수 있습니다.",
      },
    },
  },
  args: {
    children: "Badge",
    variant: "primary",
  },
  argTypes: {
    ariaLabel: {
      control: "text",
      description:
        "보이는 텍스트와 의미가 다르거나 의미를 명확히 하기 위한 접근성용 Label",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-md">
      <Badge variant="primary">99+</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
};

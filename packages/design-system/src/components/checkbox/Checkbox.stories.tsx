import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Checkbox from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "사용자의 단일 선택 입력을 위한 Checkbox 컴포넌트입니다. native input[type='checkbox']를 기반으로 구현되어 controlled / uncontrolled 방식 모두 지원합니다. label 클릭 영역을 포함해 사용성을 높였으며, keyboard(Tab / Space) 조작과 focus-visible 상태를 고려했습니다. checked 상태는 peer 기반 스타일링으로 아이콘과 시각 상태를 동기화합니다.",
      },
    },
  },
  args: {
    id: "storybook-checkbox",
    label: "Label",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-md">
      <Checkbox id="storybook-checkbox-default" label="Default" />
      <Checkbox id="storybook-checkbox-checked" label="Checked" checked />
      <Checkbox
        id="storybook-checkbox-disabled"
        label="Disabled"
        checked
        disabled
      />
    </div>
  ),
};

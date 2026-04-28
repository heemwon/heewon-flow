import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const DemoButton = () => <button>Button</button>;

const meta = {
  title: "Components/Button",
  component: DemoButton,
} satisfies Meta<typeof DemoButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "주요 액션을 실행하는 Button 컴포넌트입니다. variant, size, disabled 상태를 지원합니다.",
      },
    },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-md">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-md">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex gap-md">
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

export const AsAnchor: Story = {
  args: {
    as: "a",
    href: "/",
    target: "_blank",
    rel: "noreferrer",
    children: "External Link",
  },
};

export const WithCustomChildren: Story = {
  render: (args) => (
    <Button {...args}>
      <span className="flex items-center gap-xs">
        <span>Custom</span>
        <strong>Child</strong>
      </span>
    </Button>
  ),
  args: {
    variant: "primary",
    size: "md",
  },
};

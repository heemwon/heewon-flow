import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Dropdown from "./Dropdown";

const dropdownOptions = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
];

const dropdownLongOptions = [
  {
    label:
      "긴 옵션을 사용합니다. 긴 옵션을 사용합니다. 긴 옵션을 사용합니다. 긴 옵션을 사용합니다. 긴 옵션을 사용합니다. 긴 옵션을 사용합니다. 긴 옵션을 사용합니다. 긴 옵션을 사용합니다. 긴 옵션을 사용합니다. 긴 옵션을 사용합니다. 긴 옵션을 사용합니다. 긴 옵션을 사용합니다. ",
    value: "option1",
  },
  {
    label: "긴 옵션을 사용합니다. 긴 옵션을 사용합니다. 긴 옵션을 사용합니다. ",
    value: "option2",
  },
];

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "단일 값을 선택하는 Dropdown 컴포넌트입니다. TextField와 동일한 Field 구조를 공유하며 label, help message, error, disabled 상태를 지원합니다. controlled / uncontrolled 방식 모두 사용할 수 있고, trigger에는 aria-haspopup, aria-expanded, aria-controls를 적용해 접근성을 고려했습니다.",
      },
    },
  },
  args: {
    id: "role",
    label: "권한",
    placeholder: "권한을 선택해주세요",
    options: dropdownOptions,
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-md">
      <Dropdown id="storybook-dropdown-default" label="Default" options={[]} />
      <Dropdown
        id="storybook-dropdown-disabled"
        label="Disabled"
        options={[]}
        disabled
      />
      <Dropdown
        id="storybook-dropdown-selected"
        label="Selected"
        options={dropdownOptions}
        value="admin"
      />
      <Dropdown
        id="storybook-dropdown-error"
        label="Error"
        options={[]}
        isError
        helpMessage="옵션을 선택해 주세요."
      />
    </div>
  ),
};

export const LongOptions: Story = {
  render: () => (
    <Dropdown
      id="storybook-dropdown-long"
      label="Long Options"
      options={dropdownLongOptions}
    />
  ),
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Table } from "./Table";
import Checkbox from "../checkbox/Checkbox";
import Badge from "../badge/Badge";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "행과 열 구조의 데이터를 표현하는 Table 컴포넌트입니다. native table 요소를 기반으로 구현해 컬럼 헤더와 셀의 관계를 시맨틱하게 전달합니다. caption과 colgroup을 지원해 접근성과 컬럼 레이아웃을 함께 관리할 수 있습니다.",
      },
    },
  },
  args: {
    caption: "사용자 목록",
  },
  argTypes: {
    caption: {
      control: "text",
      description: "스크린리더를 위한 테이블 설명",
    },
    columns: {
      table: {
        disable: true,
      },
    },
    isLoading: {
      control: "boolean",
      description: "로딩 중인 경우 skeleton 적용 및 aria-busy 적용을 위한 값",
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

const users = [
  {
    id: "example-user1",
    selected: false,
    disabled: true,
    name: "이희원",
    email: "heewon@example.com",
    status: "Active",
    date: "2026-04-25",
    role: "Admin",
  },
  {
    id: "example-user2",
    selected: true,
    disabled: false,
    name: "양정원",
    email: "jeongwon@example.com",
    status: "Pending",
    date: "2025-04-21",
    role: "Editor",
  },
  {
    id: "example-user3",
    selected: false,
    disabled: false,
    name: "박재찬",
    email: "jaechan@example.com",
    status: "Inactive",
    date: "2026-01-30",
    role: "Viewer",
  },
];

export const Playground: Story = {
  render: () => (
    <Table caption="기본 테이블">
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>이름</Table.HeaderCell>
          <Table.HeaderCell>이메일</Table.HeaderCell>
          <Table.HeaderCell>상태</Table.HeaderCell>
          <Table.HeaderCell>권한</Table.HeaderCell>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {users.map((user) => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.status}</Table.Cell>
            <Table.Cell>{user.role}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const States: Story = {
  render: () => (
    <Table caption="상태별 테이블">
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>이름</Table.HeaderCell>
          <Table.HeaderCell>이메일</Table.HeaderCell>
          <Table.HeaderCell>상태</Table.HeaderCell>
          <Table.HeaderCell>권한</Table.HeaderCell>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {users.map((user) => (
          <Table.Row
            key={user.id}
            variant={
              user.disabled
                ? "disabled"
                : user.selected
                ? "selected"
                : undefined
            }
          >
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.status}</Table.Cell>
            <Table.Cell>{user.role}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const WithColGroup: Story = {
  render: () => (
    <Table
      caption="컬럼 너비가 지정된 사용자 목록"
      columns={[
        { id: "table-name" },
        { id: "table-email" },
        { id: "table-state", width: "166px" },
        { id: "table-admin", width: "100px" },
      ]}
    >
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>이름</Table.HeaderCell>
          <Table.HeaderCell>이메일</Table.HeaderCell>
          <Table.HeaderCell>상태</Table.HeaderCell>
          <Table.HeaderCell>권한</Table.HeaderCell>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {users.map((user) => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.status}</Table.Cell>
            <Table.Cell>{user.role}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <Table caption="선택 가능한 사용자 목록">
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>
            <Checkbox id="select-all" label="전체 선택" srOnly />
          </Table.HeaderCell>
          <Table.HeaderCell>이름</Table.HeaderCell>
          <Table.HeaderCell>이메일</Table.HeaderCell>
          <Table.HeaderCell>상태</Table.HeaderCell>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {users.map((user) => (
          <Table.Row key={user.id}>
            <Table.Cell>
              <Checkbox
                id={`select-${user.id}`}
                label={`${user.name} 선택`}
                srOnly
              />
            </Table.Cell>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>
              <Badge
                variant={
                  user.status === "Active"
                    ? "success"
                    : user.status === "Pending"
                    ? "warning"
                    : "primary"
                }
              >
                {user.status}
              </Badge>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const Loading: Story = {
  render: (args) => (
    <Table caption="로딩 상태 테이블" isLoading>
      {args.isLoading ? (
        <Table.Skeleton columns={4} rows={5} />
      ) : (
        <>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>이름</Table.HeaderCell>
              <Table.HeaderCell>이메일</Table.HeaderCell>
              <Table.HeaderCell>상태</Table.HeaderCell>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.status}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </>
      )}
    </Table>
  ),
};

export const Empty: Story = {
  render: () => (
    <Table caption="데이터 없는 테이블">
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>이름</Table.HeaderCell>
          <Table.HeaderCell>이메일</Table.HeaderCell>
          <Table.HeaderCell>상태</Table.HeaderCell>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        <Table.Row>
          <Table.Cell colSpan={3} isEmpty />
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

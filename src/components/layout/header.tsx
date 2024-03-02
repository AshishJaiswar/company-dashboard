import { Layout, Space } from "antd";
import CurrentUser from "./current-user";

export function Header() {
  return (
    <Layout.Header className="header-container">
      <Space align="center" size="middle">
        <CurrentUser />
      </Space>
    </Layout.Header>
  );
}

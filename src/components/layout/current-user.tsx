import { useState } from "react";
import { Popover, Button } from "antd";
import { useGetIdentity } from "@refinedev/core";
import type { User } from "@/graphql/schema.types";
import CustomAvatar from "../custom-avatar";
import { Text } from "../text";
import { AccountSettings } from "./account-settings";
import { SettingOutlined } from "@ant-design/icons";

export default function CurrentUser() {
  const { data: user } = useGetIdentity<User>();
  const [isOpen, setIsOpen] = useState(false);

  const content = (
    <div className="menu-container">
      <Text strong className="menu-username">
        {user?.name}
      </Text>
      <div className="menu-items">
        <Button
          style={{ textAlign: "left" }}
          icon={<SettingOutlined />}
          type="text"
          block
          onClick={() => setIsOpen(true)}
        >
          Account Settings
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <Popover placement="bottomRight" trigger="click" content={content}>
        <CustomAvatar name={user?.name} />
      </Popover>
      {user && (
        <AccountSettings
          opened={isOpen}
          setOpened={setIsOpen}
          userId={user.id}
        />
      )}
    </>
  );
}

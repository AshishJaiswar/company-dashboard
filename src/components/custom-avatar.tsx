import { getNameInitials } from "@/utilities";
import { Avatar, AvatarProps } from "antd";

type Props = AvatarProps & {
  name?: string;
};

function CustomAvatar({ name, ...rest }: Props) {
  const nameInitials = getNameInitials(name || "");
  return (
    <Avatar alt="Ashish Jaiswar" className="avatar" {...rest}>
      {nameInitials}
    </Avatar>
  );
}

export default CustomAvatar;

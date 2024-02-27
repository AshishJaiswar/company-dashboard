import { AuthPage } from "@refinedev/antd";
import { authCredentials } from "../../providers/auth";

export function Login() {
  return (
    <AuthPage type="login" formProps={{ initialValues: authCredentials }} />
  );
}

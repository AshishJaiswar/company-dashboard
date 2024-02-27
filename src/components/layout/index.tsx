import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import { Header } from "./Header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Dashboard" />}
    >
      {children}
    </ThemedLayoutV2>
  );
}

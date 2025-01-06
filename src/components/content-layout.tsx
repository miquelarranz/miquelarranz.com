import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ContentLayout = ({ children }: Props) => {
  return (
    <main
      className="flex flex-col justify-center items-center p-14 h-full"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      {children}
    </main>
  );
};

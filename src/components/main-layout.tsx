import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  pageTitle: string;
  generatorContent: string;
};

export const MainLayout = ({
  children,
  pageTitle,
  generatorContent,
}: Props) => {
  return (
    <html lang="en" data-theme="night">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="../../public/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
        <meta name="generator" content={generatorContent} />
        <title>{pageTitle}</title>
      </head>
      <body className="w-lvw min-h-lvh">{children}</body>
    </html>
  );
};

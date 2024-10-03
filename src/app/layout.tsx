export const metadata = {
  title: "コーディング課題",
  description: "コーディング課題用のページです。",
};

import "./header.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header>
          <a href="/">
            <h2>コーディング課題</h2>
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}

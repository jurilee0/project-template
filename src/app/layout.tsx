import 'reset-css';
import './styles/globals.scss';
import type { Metadata } from "next";
import Header from './components/Header/Header';

export const metadata: Metadata = {
  title: "프로젝트명",
  description: "프로젝트 설명",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

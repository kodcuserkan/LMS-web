import "./globals.css";
import { Providers } from './providers'

export const metadata = {
  title: "LMS Sistemi",
  description: "Öğrenme Yönetim Sistemi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

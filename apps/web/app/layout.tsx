import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {children}
          </body>
        </MantineProvider>
      </body>
    </html>
  );
}

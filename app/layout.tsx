import type { Metadata } from "next";
import "./globals.css";
import Providers from './components/Providers'

export const metadata: Metadata = {
  title: "DJ Grunk",
  description: "bla bla bla bla bla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

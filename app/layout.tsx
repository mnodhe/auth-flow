import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'auth flow App',
  description: 'An app demonstrating authentication flow with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

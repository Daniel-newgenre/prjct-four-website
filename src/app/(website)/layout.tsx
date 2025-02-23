import { Metadata } from 'next'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to my website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"

import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "TypeSDK - The TypeScript SDK for Modern Development",
  description: "A powerful, type-safe library that makes building applications faster, safer, and more enjoyable.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

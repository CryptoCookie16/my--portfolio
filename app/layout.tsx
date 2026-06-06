import type { Metadata } from "next"
import { LangProvider } from "@/lib/lang-context"
import "@fontsource/cormorant-garamond/300.css"
import "@fontsource/cormorant-garamond/400.css"
import "@fontsource/cormorant-garamond/500.css"
import "@fontsource/cormorant-garamond/300-italic.css"
import "@fontsource/cormorant-garamond/400-italic.css"
import "@fontsource/cormorant-garamond/500-italic.css"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ziyun Qi",
  description: "Writer · Researcher · Photographer · Editor",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}

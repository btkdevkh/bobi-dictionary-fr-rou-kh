import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import SearchAppBar from "./components/SearchAppBar"
import MenuProvider from "./contexts/MenuContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dictionnaire FR . ROU . KH",
  description: "Dictionnaire FR . ROU . KH",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuProvider>
          <SearchAppBar />
          {children}
        </MenuProvider>
      </body>
    </html>
  )
}

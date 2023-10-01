import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import SearchAppBar from "./components/SearchAppBar"
import MenuProvider from "./contexts/MenuContext"
import Footer from "./components/Footer"
import SearchProvider from "./contexts/SearchContext"
import Container from "@mui/material/Container"

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dictionnaire Française | Roumain | Khmer",
  description: "Dictionnaire Française | Roumain | Khmer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MenuProvider>
          <SearchProvider>
            <SearchAppBar />

            <Container
              maxWidth="xl"
              sx={{
                mt: 2,
                mb: 2,
                minHeight: "100vh",
              }}
            >
              {children}
            </Container>

            <Footer />
          </SearchProvider>
        </MenuProvider>
      </body>
    </html>
  )
}

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import GradientBackground from "@/components/gradient-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Zia Vision",
  description: "A sleek website with rainbow colors",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="flex flex-col min-h-screen relative">
            <GradientBackground />
            <div className="relative z-10">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
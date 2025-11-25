import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

const _poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600", "700"],
})

import { Poppins, Source_Serif_4, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const _sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  // Updated metadata for scrollytelling site
  title: "The Architecture of a Lie - How Misinformation Spreads",
  description: "An interactive exploration of how false information propagates through digital networks and society",
  generator: "v0.app",
  // ... existing icons ...
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_poppins.variable} ${_sourceSerif.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}

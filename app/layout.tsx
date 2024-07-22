import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children}:any) {
  return (
    <html lang="en">
      <title>Protfolio</title>
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >

        <SpeedInsights/>
        <Analytics/>
        {children}
      </body>
    </html>
  )
}
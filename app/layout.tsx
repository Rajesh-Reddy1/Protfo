import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <SpeedInsights/>
        {children}
      </body>
    </html>
  )
}
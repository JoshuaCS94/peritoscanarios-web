import { PropsWithChildren } from 'react'
import { Inter } from '@next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

type RootLayoutProps = PropsWithChildren

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout

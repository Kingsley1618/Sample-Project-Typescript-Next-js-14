import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {ReduxProvider} from "@/provider"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo List',
  description: 'TodoList',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
        {children}
        </ReduxProvider>
        </body>
    </html>
  )
}

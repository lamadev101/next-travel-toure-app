import { ClientOnly, Navbar } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travel & Tourism',
  description: 'KDS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Navbar/>
        </ClientOnly>
        <div className="">
        {children}
        </div>
      </body>
    </html>
  )
}

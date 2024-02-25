import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Quzuu - Online Exam Platform',
  description: 'Created By Abdan HAfidz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>{children}
      
      
      <footer>
        
      </footer>
      </body>
    </html>
  )
}

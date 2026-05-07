import './globals.css'

export const metadata = {
  title: 'Reflax Software Solutions – Web, App & Software Development',
  description: 'We build exceptional web applications, mobile apps, and software solutions that drive your business forward.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

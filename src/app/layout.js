'use client'
import './global.css'
import Header from './layout/header'
import Footer from './layout/footer'
import { source_sans } from './fonts/fonts'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata = {
  title: 'Monica Cervantes',
  description: 'Front-end Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={source_sans.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}

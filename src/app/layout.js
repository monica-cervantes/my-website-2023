'use client'
import GlobalStyles from './globalStyles'
import SectionHeader from './header'
import SectionFooter from './footer'
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
      <GlobalStyles />
      <body className={source_sans.className}>
        <SectionHeader />
        {children}
        {/* <SectionFooter /> */}
      </body>
    </html>
  )
}

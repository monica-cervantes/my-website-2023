import './global.css'
import Header from './layout/header'
import Footer from './layout/footer'
import { source_sans } from './fonts/fonts'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata = {
  title: 'Home | Monica Cervantes',
  description: 'Welcome to My Site',
};

const RootLayout = ({ children }) => {
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

export default RootLayout;
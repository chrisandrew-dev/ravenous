import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
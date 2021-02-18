import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
	const styles = {
		minHeight: '100vh',
	}

  return (
    <div style={styles}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => (
  <div className={styles.navbar}>
    <nav>
      <div className={styles.logo}>
        <Image
          src='/logo.svg'
          height={66}
          width={80}
        />
        <h1>Ravenous.</h1>
      </div>
      <ul>
        <li>
          <Link href='/'>
            <a>Search</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Navbar;
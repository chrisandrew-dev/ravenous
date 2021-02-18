import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleActiveClass = () => {
    setIsActive(!isActive)
    console.log(isActive)
  }

  return (
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
              <a
              	className={isActive ? styles.active : ''}
              	onClick={toggleActiveClass}
              >Search</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a
              	className={isActive ? '' : styles.active}
              	onClick={toggleActiveClass}
              >About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;

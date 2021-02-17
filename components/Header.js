import styles from '../styles/Header.module.scss'

const Header = ({heading, desc}) => {
  return ( 
    <header className={styles.header}>
      <h1 className={styles.title}>{heading}</h1>
      <p className={styles.description}>{desc}</p>
    </header>
  );
}
 
export default Header;
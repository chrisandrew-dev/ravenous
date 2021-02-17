import styles from '../styles/Header.module.scss'

const Header = ({heading, desc}) => {
  return ( 
    <header className={styles.header}>
      <h1>{heading}</h1>
      <p>{desc}</p>
    </header>
  );
}
 
export default Header;
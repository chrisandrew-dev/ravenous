import styles from '../styles/Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      Powered by <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.vercel}
      >
        <img src="/vercel.svg" alt="Vercel Logo" />
      </a> and <a
        href="https://www.yelp.com/developers"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.yelp}
      >
        <img src="/yelp.png" alt="Yelp Logo" />
      </a>.
    </p>
  </footer>
)

export default Footer
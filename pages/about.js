import Header from '../components/Header'

const About = () => {
  const heading = 'About'
  const desc = ''

  return (
    <main>
      <Header heading={heading} desc={desc} />
      <p>
        This project is an iteration of an original completed as part of the Web Development Career Path at
        <a href='https://www.codecademy.com/catalog' target='_blank' rel="noopener noreferrer">Codecademy.com</a>
        . This example replaces
        <a
          href='https://www.npmjs.com/search?q=create-react-app'
          target='_blank'
          rel="noopener noreferrer"
        >
          create-react-app
        </a>
        with
        <a
          href='https://www.npmjs.com/package/create-next-app'
          target='_blank'
          rel="noopener noreferrer"
        >
          create-next-app
        </a>
        in order to deliver a more accessible, more performant UX; and a platform upon which to scale similar apps.
      </p>
      <p>
        Components and stylesheets have been adapted to take advantage of modern Javascript syntax and Next.js' built-in tools. Students can access starter files and the original brief directly at Codecademy.com.
      </p>
      <p>
        Thanks for stopping by,
        <br />
        <br />
        <em>
          <author>
            - @chrisandrew_dev
          </author>
        </em>
      </p>
    </main>
  )
}

export default About;

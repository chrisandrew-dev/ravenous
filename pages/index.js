import Header from '../components/Header'
import SearchForm from '../components/SearchForm'

const Home = () => {
  const heading = 'Welcome to ravenous.'
  const desc = 'Discover your new favourite restaurants and eateries.'

  return (
    <main>
      <Header heading={heading} desc={desc}/>
      <SearchForm />
    </main>
  )
}

export default Home
import HeroBanner from '../components/HeroBanner'
import SearchForm from '../components/SearchForm'

const Home = () => {
  // const heading = 'Welcome to ravenous.'
  // const desc = 'Discover your new favourite restaurants and eateries.'

  return (
    <main>
      <HeroBanner src='/background_search_desktop.jpg'>
        <SearchForm/>
      </HeroBanner>
    </main>
  )
}

export default Home

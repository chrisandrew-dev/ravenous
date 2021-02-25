import { useState } from 'react'
import { useCurrentLocation, useYelpBusinessSearch } from '../helpers'
import HeroBanner from '../components/HeroBanner'
import SearchForm from '../components/SearchForm'
import BusinessList from '../components/BusinessList'

const geolocationOptions = {
  timeout: 60000,
  maximumAge: 24 * 1000 * 3600
}

const Home = () => {
  const { geolocation, error } = useCurrentLocation(geolocationOptions)
  const { businesses, setBusinesses } = useState([])

  const handleSearch = (searchTerm, searchArea, sortMethod) => {
		const res = useYelpBusinessSearch(
		  geolocation, 
		  searchTerm, 
		  searchArea, 
		  sortMethod
		)
		console.log(res)
  }

  return (
    <main>
      <HeroBanner src='background_search_desktop.jpg'>
        <SearchForm geolocation={geolocation} search={handleSearch}/>
      </HeroBanner>
      <BusinessList businesses={businesses}/>
    </main>
  )
}

export default Home

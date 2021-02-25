import { useState, useEffect } from 'react'

const useCurrentLocation = (options = {}) => {
  const [geolocation, setGeolocation] = useState()
  const [error, setError] = useState()

  const handleSuccess = position => {
    const { latitude, longitude } = position.coords
    setGeolocation({ latitude, longitude })
  }

  const handleError = error => {
    setError(error.message)
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation unsupported.')
      return
    }

    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      options
    )
  }, [options])

  return { geolocation, error }
}

const useYelpBusinessSearch = async (location, searchTerm, searchArea, sortMethod) => {
	const API_KEY = process.env.API_KEY
	const baseUrl = 'https://api.yelp.com/v3/businesses/search'
	const baseQuery = `?searchTerm=${searchTerm}&sort_by=${sortMethod}&limit=50`
	const locationQuery = searchArea
	  ? `&location=${searchArea}`
	  : `&latitude=${location.latitude}&longitude=${location.longitude}&radius=10000`
	const headers = { Authorization: 'Bearer ${API_KEY}'}

	const res = await fetch(baseUrl + baseQuery + locationQuery, { headers: headers })
	const businesses = await res.json()
	return businesses
}

export { useCurrentLocation, useYelpBusinessSearch }

import { useState } from 'react'
import styles from '../styles/SearchForm.module.scss'

const geolocationOptions = {
	timeout: 60000,
	maximumAge: 24 * 3600 * 1000,
	enableHighAccuracy: true,
}

const SearchForm = ({geolocation, search}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchArea, setSearchArea] = useState('')
  const [sortMethod, setSortMethod] = useState('best_match')

  const handleChange = e => {
    switch (e.target.name) {
      case 'sort-method':
        setSortMethod(e.target.value)
        break
      case 'searchTerm':
        setSearchTerm(e.target.value)
        break
      case 'searchArea':
        setSearchArea(e.target.value)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    search(searchTerm, searchArea, sortMethod)
    setSearchTerm('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset>
        <input
          type='radio'
          id='best_match'
          value='best_match'
          name='sort-method'
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor='best_match'>Best match</label>

        <input
          type='radio'
          id='rating'
          value='rating'
          name='sort-method'
          onChange={handleChange}
        />
        <label htmlFor='rating'>Highest rated</label>

        <input
          type='radio'
          id='review_count'
          value='review_count'
          name='sort-method'
          onChange={handleChange}
        />
        <label htmlFor='review_count'>Most reviewed</label>
      </fieldset>

      <fieldset>
        <label htmlFor='searchTerm'>Search term:</label>
        <input
          required
          type='text'
          min='1'
          max='50'
          placeholder="What are you craving?"
          name='searchTerm'
          id='searchTerm'
          value={searchTerm}
          onChange={handleChange}
        />
        <label htmlFor='term'>Search location:</label>

        {geolocation
        ? (
          <>
            <br/>
            <p
              title='Click for more info'
             	onClick={() => {
             	  alert('Refresh or clear cache to reset location preferences.')
             	}}
            >
              <img
               	src='/location-arrow-50.png'
               	width='25'
               	height='25'
               	className={styles.arrow}
             />
             Using current location
            </p>
          </>
        )
        : (
          <input
            required
            type='text'
            min='1'
            max='50'
            placeholder='Where should we look?'
            name='searchArea'
            id='searchArea'
            title='Refresh or clear cache to change location settings.'
            value={searchArea}
            onChange={handleChange}
          />
        )}
      </fieldset>
      <input type='submit' value='Search' />
    </form>
  )
}

export default SearchForm;

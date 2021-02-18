import styles from '../styles/SearchForm.module.scss'

const SearchForm = () => {
  return (
    <form className={styles.form}>
      <fieldset>
        <input
          type='radio'
          id='best_match'
          value='best_match'
          name='sort-method'
          defaultChecked
        />
        <label htmlFor='best_match'>Best match</label>

        <input
          type='radio'
          id='rating'
          value='rating'
          name='sort-method'
        />
        <label htmlFor='rating'>Highest rated</label>

        <input
          type='radio'
          id='review_count'
          value='review_count'
          name='sort-method'
        />
        <label htmlFor='review_count'>Most reviewed</label>
      </fieldset>

      <fieldset>
        <label htmlFor='term'>Search term:</label>
        <input
          required
          type='text'
          min='1'
          max='50'
          placeholder="What are you craving?"
          name='term'
          id='term'
        ></input>

        <label htmlFor='term'>Search location:</label>
        <input
          required
          type='text'
          min='1'
          max='50'
          placeholder="Where should we look?"
          name='location'
          id='location'
        ></input>
      </fieldset>

      <input type='submit' value='Search' />
    </form>
  )
}

export default SearchForm;

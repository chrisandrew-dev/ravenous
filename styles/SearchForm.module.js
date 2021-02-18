.form {
  text-align: center;

  * {
    font-size: inherit;
    text-align: inherit;
  }
}

.form input {
  margin-inline: 0.5em;
  padding: 0.5em;
  border: 1px solid lightgrey;
  border-radius: 0.25em;
  cursor: pointer;

  &:focus, &:focus-within {
    outline: none;
    border: 1px solid darkslategrey;
    transition: border 0.3s;
  }

  &:focus-within::placeholder {
    color: transparent;
    transition: color 0.3s;
  }

  &[type='submit'] {
    padding-inline: 1.5em;
  }
}

.form fieldset {
  margin: 0;
  padding: 0;
  border: none;

  &:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;

    label {
      display: block;
      border-bottom: 1px solid lightgrey;
      padding-inline: 1em;
    }

    input {
      display: none;

      &:checked + label {
        cursor: none;
        pointer-events: none;
        border-bottom: 1px solid;
      }
    }
  }

  &:nth-child(2) {
    margin-block: 2em;

    label {
      display: none;
    }
  }
}

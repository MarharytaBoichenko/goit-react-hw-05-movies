import { useState } from 'react';
export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const onChangeHandler = e => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  const onFormSubmitHandler = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
      // сделать тостер нотифик
      // toast('Enter your  query');
    }
    console.log('got  query  pass query  to moviepage');
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={onFormSubmitHandler}>
      <label>
        <input
          type="text"
          //   name
          value={query}
          onChange={onChangeHandler}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

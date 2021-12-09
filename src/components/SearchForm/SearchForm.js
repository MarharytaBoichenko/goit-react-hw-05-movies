import { toast } from 'react-toastify';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from '../SearchForm/SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeHandler = e => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  const onFormSubmitHandler = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast('Enter your  query');
    }
    ////set  params  of search  to url
    const params = { query };
    // params.query = query;

    setSearchParams(params);
    /////[хук  ???????  на странице  списка поиска

    console.log('got  query  pass query  to moviepage');
    // onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={onFormSubmitHandler} className={s.form}>
      <label>
        <input
          type="text"
          value={query}
          placeholder="Enter  your query"
          onChange={onChangeHandler}
          className={s.input}
        />
      </label>
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
}
SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

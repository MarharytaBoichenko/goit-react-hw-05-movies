import { useState, useEffect } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import api from '../../hooks/useFetch';
import { mapper } from '../../components/../helpers/mapper';
import { toast } from 'react-toastify';
export default function MoviesPage() {
  const [queryFilms, setQueryFilms] = useState('');
  const [error, setError] = useState(null);

  const handleSearchSubmit = searchData => {
    setQueryFilms(searchData);
    console.log(searchData);
  };

  useEffect(() => {
    if (queryFilms === '') {
      return;
    }
    console.log(queryFilms);
    console.log('запрос изменился ');
    fetchImgOnQuery();
  }, [queryFilms]);

  const fetchImgOnQuery = () => {
    const { fetchFilms } = api;
    if (!queryFilms) {
      return;
    }
    fetchFilms(queryFilms)
      .then(data => {
        console.log(data);
        // const { results } = data;
        if (data.results.length === 0) {
          toast('No  films  found');
          return;
        }
        console.log(data.results);
        // const correctFilms = mapper(results);

        // console.log(correctFilms);
        //   setFilms(mapper(results));

        setQueryFilms(data.results);
      })
      .catch(error => setError(error));
  };
  return (
    <>
      {' '}
      <SearchForm onSubmit={handleSearchSubmit} />;
      {/* {queryFilms && (
        <ul>
          {queryFilms.map(({ id, named }) => (
            <li key={id}>{named}</li>
          ))}
        </ul>
      )} */}
    </>
  );
  // const [query, setQuery] = useState('');
  // const onChangeHandler = e => {
  //   console.log(e.target.value);
  //   setQuery(e.target.value);
  // };
  // const onFormSubmitHandler = e => {
  //   e.preventDefault();
  //   if (query.trim() === '') {
  //     return;
  //     // сделать тостер нотифик
  //     // toast('Enter your  query');
  //   }
  //   // onSubmit(query);
  //   setQuery('');
  // };
  // return (
  //   <form onSubmit={onFormSubmitHandler}>
  //     <label>
  //       <input
  //         type="text"
  //         //   name
  //         value={query}
  //         onChange={onChangeHandler}
  //       />
  //     </label>
  //     <button type="submit">Search</button>
  //   </form>
  // );
}

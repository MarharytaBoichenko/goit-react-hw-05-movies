import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import ListOnSearch from '../../components/ListOnSearch/ListOnSearch';
import api from '../../apiHelpers/api';
import { toast } from 'react-toastify';
import Loading from '../../components/Loader/Loading';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function MoviesPage() {
  // const [queryFilms, setQueryFilms] = useState('');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  // const handleSearchSubmit = searchData => {
  //   setQueryFilms(searchData);
  //   console.log(searchData);
  // };
  const searchQuery = searchParams.get('query') || '';

  // useEffect(() => {
  //   console.log(searchQuery);
  //   if (!searchQuery) {
  //     return;
  //   }
  //   fetchOnQuery(searchQuery);
  // }, []);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    console.log('запрос изменился ');
    fetchOnQuery(searchQuery);
  }, [searchQuery]);

  const fetchOnQuery = queryFilms => {
    const { fetchFilmsOnQuery } = api;
    if (!queryFilms) {
      return;
    }
    console.log('query  film for render');
    setLoading(true);
    fetchFilmsOnQuery(queryFilms)
      .then(data => {
        if (data.results.length === 0) {
          console.log('no  films');
          toast('No  films  found');
          return;
        }
        console.log(data.results);
        setFilms(data.results);
        setLoading(false);
        setSearchParams({ query: searchQuery });
      })
      .catch(error => setError(error));
  };

  return (
    <>
      <SearchForm />
      {loading && <Loading />}
      {films && <ListOnSearch films={films} />}
    </>
  );
}

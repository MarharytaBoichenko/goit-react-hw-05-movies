import { useState, useEffect } from 'react';
import api from '../../apiHelpers/api';
import { mapper } from '../../helpers/mapper';
import ListOnSearch from '../../components/ListOnSearch/ListOnSearch';

export default function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    api.fetchTrendFilms().then(data => {
      const { results } = data;
      console.log(results);
      const correctFilms = mapper(results);

      // console.log(correctFilms);
      //   setFilms(mapper(results));
      setFilms(results);
    });
  }, []);
  //делает  запрос на трендовые фильмы  и рендерит список

  return <>{films && <ListOnSearch films={films} />}</>;
}

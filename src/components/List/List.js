import api from '../../hooks/useFetch';
import { useState, useEffect } from 'react';
import { mapper } from '../../components/../helpers/mapper';
export default function List() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    api.fetchFilms().then(data => {
      const { results } = data;
      console.log(results);
      const correctFilms = mapper(results);

      console.log(correctFilms);
      //   setFilms(mapper(results));
      setFilms(results);
    });
  }, []);
  //делает  запрос на трендовые фильмы  и рендерит список
  console.log(films);
  return (
    <>
      <p></p>
      {films && (
        <ul>
          {films.map(({ id, named }) => (
            <li key={id}>{named}</li>
          ))}
        </ul>
      )}
    </>
  );
}

import api from '../../apiHelpers/api';
import { useState, useEffect, useLocation } from 'react';
import { useParams } from 'react-router-dom';
import s from './Cast.module.css';

export default function Cast() {
  const [actors, setActors] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  // const location = useLocation();
  // console.log(location.state);
  // console.log(location.state.from);

  useEffect(() => {
    if (id === '') {
      return;
    }
    setLoading(true);
    api.fetchFilmCredits(id).then(data => {
      console.log(data.cast);
      setActors(data.cast);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {actors && (
        <ul>
          {actors.map(actor => (
            <li key={actor.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt=""
                className={s.castImg}
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

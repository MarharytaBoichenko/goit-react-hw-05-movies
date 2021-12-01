import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import api from '../../apiHelpers/api';
import Loading from '../../components/Loader/Loading';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const [film, setFilm] = useState('');
  const [loading, setLoading] = useState(false);
  const { fetchFilmById } = api;

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  console.log(id);
  const goBack = () => {
    console.log(location.pathname);
    location.pathname.includes(`/movies/${id}/`) ? navigate(-2) : navigate(-1);
  };

  useEffect(() => {
    if (id === '') {
      return;
    }
    fetchFilmDetails();
  }, [id]);

  const fetchFilmDetails = () => {
    setLoading(true);
    fetchFilmById(id).then(data => {
      console.log(data);
      setFilm(data);
      setLoading(false);
    });
  };

  return (
    <div>
      <button type="button" className={s.button} onClick={goBack}>
        Go back
      </button>
      {loading && <Loading />}

      {film && (
        <>
          <div className={s.filmThumb}>
            {(
              <img
                src="https://i.ibb.co/8mnHvb2/no-poster.jpg"
                alt="no_poster"
                className={s.image}
              />
            ) && (
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
                className={s.image}
              />
            )}
            <h2 className={s.title}>{film.title}</h2>
            <p>Rating {film.vote_average}</p>
            <h3>Overview</h3>
            <p className={s.overview}>{film.overview}</p>
            <h4>Genres</h4>
            <p className={s.genres}>
              {film.genres.map(genre => genre.name).join(' ')}
            </p>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`/movies/${id}/cast`}>Cast</Link>
              </li>

              <li>
                <Link to={`/movies/${id}/reviews`}>Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
}

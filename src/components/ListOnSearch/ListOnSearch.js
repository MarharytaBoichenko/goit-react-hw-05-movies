import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './ListOnSearch.module.css';

export default function ListOnSearch({ films }) {
  console.log(films);

  const location = useLocation();
  console.log(location);
  return (
    <ul className={s.list}>
      {films.map(({ id, name, title }) => (
        <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
          {name ? (
            <li className={s.item}>{name}</li>
          ) : (
            <li className={s.item}>{title}</li>
          )}
        </Link>
      ))}
    </ul>
  );
}

ListOnSearch.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
};

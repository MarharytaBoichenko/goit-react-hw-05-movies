import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './ListOnSearch.module.css';

export default function ListOnSearch({ films }) {
  console.log(films);
  return (
    <ul className={s.list}>
      {films.map(({ id, named }) => (
        <Link key={id} to={`/movies/${id}`}>
          <li className={s.item}>{named}</li>
        </Link>
      ))}
    </ul>
  );
}

ListOnSearch.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
};

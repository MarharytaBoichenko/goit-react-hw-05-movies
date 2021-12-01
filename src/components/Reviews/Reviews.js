import api from '../../apiHelpers/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id === '') {
      return;
    }
    setLoading(true);
    api.fetchFilmReviews(id).then(data => {
      console.log(data.results);
      setReviews(data.results);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p className={s.author}>{review.author}</p>
              <p className={s.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We do not have any reviews for this movie</p>
      )}
    </>
  );
}

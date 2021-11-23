import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container/Container';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';

export default function App() {
  const onSearchSubmitHandler = searchData => {
    console.log(searchData);
    // сюда приходит  query  из формы поиска
  };
  return (
    <Container>
      {/* <HomePage /> */}
      <ToastContainer />
      <MoviesPage onSubmit={onSearchSubmitHandler} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/movies" element={<MoviesPage />} /> */}
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        {/* <Route path="/movies/:movieId/cast" element={<Cast />} /> */}
        {/* вынести в MovieDetailsPage */}

        {/* <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
        {/* вынести в MovieDetailsPage */}

        {/* <Route path="/authors//*" element={<AuthorsView />} />
      <Route path="/books" element={<BooksView />} />
      <Route path="//books/:bookId" element={<BookDetailsView />} />
      <Route path="*" element={<NotFoundView />} /> */}
      </Routes>
    </Container>
  );
}

import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from './components/Loader/Loading';

const Layout = lazy(() =>
  import('./components/Layout/Layout.js' /* webpackChunkName: "Layout" */),
);
const HomePage = lazy(() =>
  import('./views/HomePage/HomePage.js' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import(
    './views/MoviesPage/MoviesPage.js' /* webpackChunkName: "MoviesPage" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const Cast = lazy(() =>
  import('./components/Cast/Cast.js' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('./components/Reviews/Reviews.js' /* webpackChunkName: "Reviews" */),
);
const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView /NotFoundView .js' /* webpackChunkName: "NotFoundView" */
  ),
);

export default function App() {
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:id" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
          {/* <Route path="*" element={<NotFoundView />} /> */}
        </Routes>
      </Suspense>
    </>
  );
}

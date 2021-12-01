const URL = 'https://api.themoviedb.org/3/';
const KEY = '3235240fde1a44b4e45cd09b4117d7e1';

function fetchTrendFilms(query) {
  return fetch(`${URL}trending/all/day?api_key=${KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Film  not found`));
  });
}

function fetchFilmsOnQuery(query) {
  return fetch(
    `${URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}&page=1`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Film  not found`));
  });
}
function fetchFilmById(movieId) {
  return fetch(`
${URL}movie/${movieId}?api_key=${KEY}&language=en-US`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Film  not found`));
  });
}
function fetchFilmCredits(movieId) {
  return fetch(`
${URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`No data  found`));
    },
  );
}
function fetchFilmReviews(movieId) {
  return fetch(
    `${URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No data  found`));
  });
}
const api = {
  fetchTrendFilms,
  fetchFilmsOnQuery,
  fetchFilmById,
  fetchFilmCredits,
  fetchFilmReviews,
};

export default api;

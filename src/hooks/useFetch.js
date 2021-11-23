function fetchFilms(query) {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=3235240fde1a44b4e45cd09b4117d7e1`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Film  not found`));
  });
}

const api = {
  fetchFilms,
};

export default api;

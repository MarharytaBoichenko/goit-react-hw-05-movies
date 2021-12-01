export const mapper = films => {
  films.map(film => {
    film.named = film.name ? film.name : film.title;

    // console.log(film.named);
    return film.named;
  });
};

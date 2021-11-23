export const mapper = films => {
  films.map(film => {
    film.named = film.name ? film.name : film.title;
    console.log(film);
    console.log(film.name);
    console.log(film.title);
    // if (film.name === 'undefined') {
    //   return film.name === film.title;
    // } else {
    //   return film.name;
    // }
    // return film.name && film.title;
    console.log(film.named);
    return film.named;
  });
};

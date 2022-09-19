let numbersOfFilms = +prompt('Сколько фильмоы вы уже посмотрели?', '');

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const a = prompt('Один из последниз просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените фильм?', ''),
      c = prompt('Один из последниз просмотренных фильмов?', ''),
      d = +prompt('На сколько оцените фильм?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
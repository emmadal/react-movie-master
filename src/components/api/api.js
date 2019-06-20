const API =
  "https://api.themoviedb.org/3/movie/550?api_key=f18e966ce46365c9c78d821a876bf83e";

const popularmovies = {
  method: "GET",
  hostname: "api.themoviedb.org",
  port: null,
  path:
    "/3/movie/popular?page=1&language=en-US&api_key=f18e966ce46365c9c78d821a876bf83e",
  headers: {}
};

const latestmovies = {
  method: "GET",
  hostname: "api.themoviedb.org",
  port: null,
  path:
    "/3/movie/latest?language=en-US&api_key=f18e966ce46365c9c78d821a876bf83e",
  headers: {}
};

const populartvshows = {
  method: "GET",
  hostname: "api.themoviedb.org",
  port: null,
  path:
    "/3/tv/popular?page=1&language=en-US&api_key=f18e966ce46365c9c78d821a876bf83e",
  headers: {}
};

const genremovies = {
  method: "GET",
  hostname: "api.themoviedb.org",
  port: null,
  path:
    "/3/genre/movie/list?language=en-US&api_key=f18e966ce46365c9c78d821a876bf83e",
  headers: {}
};

export { latestmovies, popularmovies, populartvshows, genremovies };

const test  = 'backdrop_path - poster_path'
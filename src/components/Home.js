import React, { useEffect, useState } from "react";
/* import PresentationPage from "./PresentationPage"; */
import PopularMovies from "./PopularMovies";
import PopularTvShows from "./PopularTvShows";
import UpcomingMovies from "./UpcomingMovies";
import Genres from "./Genres";
import axios from "axios";

export default function Home() {
  const [popularmovies, setPopularData] = useState([]);
  const [populartvshows, setPopularDataTvShows] = useState([]);
  const [genresmovies, setGenresMovies] = useState([]);
  const [upcomingmovies, setUpcomingMovies] = useState([]);

  /* console.log(popularmovies);
  console.log(populartvshows); */
  //console.log(popularmovies);

  async function fetchDataMovies() {
    const remoteurl = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=f18e966ce46365c9c78d821a876bf83e"
    );
    setPopularData(remoteurl.data.results);
  }

  async function fetchDataTvShows() {
    const remoteurl = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?page=1&language=en-US&api_key=f18e966ce46365c9c78d821a876bf83e"
    );
    setPopularDataTvShows(remoteurl.data.results);
  }

  async function genresMovies() {
    const remoteurl = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=f18e966ce46365c9c78d821a876bf83e&language=en-US"
    );
    setGenresMovies(remoteurl.data.genres);
  }

  async function upcomingMovies() {
    const remoteurl = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=f18e966ce46365c9c78d821a876bf83e&language=en-US&page=1"
    );
    setUpcomingMovies(remoteurl.data.results);
  }

  useEffect(() => {
    fetchDataMovies();
  }, []);
  useEffect(() => {
    fetchDataTvShows();
  }, []);
  useEffect(() => {
    upcomingMovies();
  }, []);
  useEffect(() => {
    genresMovies();
  }, []);
  

  return (
    <div>
      {/* <PresentationPage /> */}
      <PopularMovies title="Popular Movies" movies={popularmovies} />
      <PopularTvShows title="Popular TV Shows" tvshows={populartvshows} />
      <UpcomingMovies title="Upcoming Movies" upcoming={upcomingmovies} />
      <Genres title="Genres" genres={genresmovies} />
    </div>
  );
}

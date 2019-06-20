import React from "react";
import Menu from "./Menu";
import PresentationPage from "./PresentationPage";
import PopularMovies from "./PopularMovies";
import PopularTvShows from "./PopularTvShows";
import LatestMovies from "./LatestMovies";
import Genres from "./Genres";

export default function Home() {
  return (
    <div>
      <Menu items={["Favorites", "Get started", "Genres", "Tv Shows"]} />
      <PresentationPage />
      <PopularMovies title="Popular Movies" />
      <PopularTvShows title="Popular TV Shows" />
      <LatestMovies title="Latest Movies" />
      <Genres title="Genres" />
    </div>
  );
}

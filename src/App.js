import React from "react";
import Home from "./components/Home";
import FooterPage from "./components/FooterPage";
import PopularMoviesPage from "./components/pages/PopularMoviesPage";
import Menu from './components/Menu'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App-header">
      <BrowserRouter>
        <div>
          <Menu items={["Top Rated", "Now Playing", "Recommandations", "Tv Shows"]} />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route
              path="/popular-movies"
              render={() => <PopularMoviesPage />}
            />
          </Switch>
          <FooterPage />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

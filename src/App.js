import React from "react";
import Home from "./components/Home";
import FooterPage from "./components/FooterPage";

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App-header">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
          <FooterPage />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

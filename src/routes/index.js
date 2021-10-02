import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PokemonPage, PokemonDetailsPage } from "../pages";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonPage />
        </Route>
        <Route path="/pokemon-details">
          <PokemonDetailsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;

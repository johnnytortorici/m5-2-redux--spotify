import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ArtistRoute from "./ArtistRoute";
import GlobalStyles from "./GlobalStyles";

const DEFAULT_ARTIST_ID = "7CIW23FQUXPc1zebnO1TDG";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/artists/${DEFAULT_ARTIST_ID}`} />
        </Route>
        <Route path="/artists/:id">
          <ArtistRoute />
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
};

export default App;

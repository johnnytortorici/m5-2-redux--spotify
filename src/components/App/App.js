import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from "../../actions";

import ArtistRoute from "./ArtistRoute";
import GlobalStyles from "./GlobalStyles";

const DEFAULT_ARTIST_ID = "7CIW23FQUXPc1zebnO1TDG";

const App = () => {
  const dispatch = useDispatch();

  dispatch(requestAccessToken());
  useEffect(() => {
    fetch("/spotify_access_token")
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveAccessToken(json.access_token));
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveAccessTokenError());
      });
  }, []);

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

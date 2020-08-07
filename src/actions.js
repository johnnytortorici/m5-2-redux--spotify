export const requestAccessToken = () => {
  return {
    type: "REQUEST_ACTION_TOKEN",
  };
};

export const receiveAccessToken = (token) => {
  return {
    type: "RECEIVE_ACCESS_TOKEN",
    token,
  };
};

export const receiveAccessTokenError = () => {
  return {
    type: "RECEIVE_ACCESS_TOKEN_ERROR",
  };
};

export const requestArtistProfile = () => {
  return {
    type: "REQUEST_ARTIST_PROFILE",
  };
};

export const receiveArtistProfile = (profile) => {
  return {
    type: "RECEIVE_ARTIST_PROFILE",
    profile,
  };
};

export const receiveArtistProfileError = () => {
  return {
    type: "RECEIVE_ARTIST_PROFILE_ERROR",
  };
};

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

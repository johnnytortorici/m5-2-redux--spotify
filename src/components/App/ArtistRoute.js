import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import numeral from "numeral";

import {
  requestArtistProfile,
  receiveArtistProfile,
  receiveArtistProfileError,
} from "../../actions";
import { fetchArtistProfile } from "../../helpers/api-helpers";

const ArtistRoute = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.token);
  const artistId = useParams().id;

  const currentArtist = useSelector((state) => state.artists.currentArtist);
  const status = useSelector((state) => state.artists.status);

  dispatch(requestArtistProfile());
  useEffect(() => {
    if (accessToken)
      fetchArtistProfile(accessToken, artistId)
        .then((json) => dispatch(receiveArtistProfile(json)))
        .catch((err) => {
          console.log(err);
          dispatch(receiveArtistProfileError());
        });
  }, [accessToken]);

  if (!currentArtist)
    return (
      <Wrapper>
        <p>Loading...</p>
      </Wrapper>
    );
  else
    return (
      <Wrapper>
        <ArtistImage
          src={currentArtist.profile.images[0].url}
          alt={currentArtist.profile.name}
        />
        <ArtistName>{currentArtist.profile.name}</ArtistName>
        <p>
          <Stat>
            {numeral(currentArtist.profile.followers.total).format("0a")}
          </Stat>{" "}
          followers
        </p>
        <TagsHeading>Tags</TagsHeading>
        <Genres>
          <li>{currentArtist.profile.genres[0]}</li>
          <li>{currentArtist.profile.genres[1]}</li>
        </Genres>
      </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
  font-size: 1.8em;
`;

const ArtistImage = styled.img`
  width: 300px;
  border-radius: 50%;
`;

const ArtistName = styled.h1`
  font-size: 2em;
  font-weight: 400;
`;

const Stat = styled.span`
  font-weight: 800;
`;

const TagsHeading = styled.h2`
  font-size: 1.5em;
  font-weight: 400;
  padding: 10px 0;
`;

const Genres = styled.ul`
  list-style-type: none;
  font-size: 0.8em;
`;

export default ArtistRoute;

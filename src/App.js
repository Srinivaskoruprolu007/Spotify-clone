import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

  // Run a code based on a condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getMyTopTracks().then((response)=>{
        dispatch({
          type:'SET_TOP_SONGS',
          top_songs:response
        })
      })

      spotify.getPlaylist("37i9dQZF1E38ix18dXn4sl").then((response) => {
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response
        })
      });
    }
  }, []);
  console.log("Playlists:", playlists);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

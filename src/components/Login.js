import React from "react";
import "../styles/Login.css";
import logo from "../Assets/Images/spotify2019-830x350.jpg";
import { loginUrl } from "../utils/spotify";

function Login() {
  return (
    <div className="login">
      <img src={logo} alt="spotify-logo" />
      {/* Spotify Logo */}
      {/* Login with spotify button */}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;

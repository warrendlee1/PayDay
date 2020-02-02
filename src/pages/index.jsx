import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const MainPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [name, setName] = useState("");

  const responseGoogle = response => {
    setName(response.profileObj.name);
    setIsSignedIn(true);
    console.log(response);
  };

  const logout = () => {
      setIsSignedIn(false);
  }

  const getContent = () => {
    if (isSignedIn) {
      return (
        <div>
          <p>Hello {name}, you're signed in </p>
          <Link to="/Form">Input Financial Data</Link>
          <GoogleLogout
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          ></GoogleLogout>
        </div>
      );
    } else {
      return (
        <div>
          <GoogleLogin
            clientId="665020432658-kkkff7kt0622jn4uai6vkmim8lctife9.apps.googleusercontent.com"
            buttonText="Sign in With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      );
    }
  };

  return (
    <div>
      <h3> Welcome </h3>
      <small> Let's get your finances in order. </small>
      <h2>{getContent()}</h2>
    </div>
  );
};

export default MainPage;
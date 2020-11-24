import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

export class Login extends Component {
  state = {
    isloggedInFacebook: false,
    isloggedInGoogle: false,
    userIDfb: "",
    namefb: "",
    emailfb: "",
    picturefb: "",
    userIDg: "",
    nameg: "",
    emailg: "",
    pictureg: "",
  };

  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      isloggedInFacebook: true,
      userIDfb: response.userID,
      namefb: response.name,
      emailfb: response.email,
      picturefb: response.picture.data.url,
    });
  };

  componentClicked = () => console.log("clicked");

  onSuccess = (response) => {
    console.log(response.profileObj.name);
    this.setState({
      isloggedInFacebook: true,
      userIDg: response.googleId,
      nameg: response.profileObj.name,
      emailg: response.profileObj.email,
      pictureg: response.profileObj.imageUrl,
    });
  };

  onFailure = (response) => {
    console.log(response);
  };

  render() {
    let fbContent;
    let google;

    
    if (this.state.isloggedInFacebook) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px",
          }}
        >
          <img src={this.state.picturefb} alt={this.state.namefb} />
          <h2>welcome {this.state.namefb}</h2>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="296865951539040"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    if (this.state.isloggedInGoogle) {
      google = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px",
          }}
        >
          <img src={this.state.pictureg} alt={this.state.nameg} />
          <h2>welcome {this.state.nameg}</h2>
        </div>
      );
    } else {
      google = (
        <GoogleLogin
          clientId="321323735309-hh8l8p6i3k626m2a3o3cd4r6ksrvhbav.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      );
    }

    return (
      <div>
        {fbContent}
        <br />
        {google}
      </div>
    );
  }
}

export default Login;

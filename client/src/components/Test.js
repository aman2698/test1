import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
function Test() {
  const onSuccess = (res) => {
    console.log(res);
    axios.post(`http://localhost:5000/users/register`, res).then((res) => {
      console.log(res);
    });

    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const componentClicked = () => console.log("clicked");

  return (
    <div style={{ marginLeft: "250px", marginRight: "50px" }}>
      <GoogleLogin
        clientId="321323735309-hh8l8p6i3k626m2a3o3cd4r6ksrvhbav.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={false}
      />
      <br />
      <br />
      <br />
      <br />
      <FacebookLogin
        appId="296865951539040"
        autoLoad={false}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
}

export default Test;

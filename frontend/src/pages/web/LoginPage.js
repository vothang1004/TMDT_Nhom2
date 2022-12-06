import React, { useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';
import { MdFacebook } from 'react-icons/md';
import { GoogleLogin } from 'react-google-login';
import { loadGapiInsideDOM } from 'gapi-script';

function LoginPage() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };
  useEffect(() => {
    const loginGoogle = async () => {
      const gapi = await loadGapiInsideDOM();
      function start() {
        gapi.client.init({
          clientId: '257874017469-m2maogal65g8qnuch8t9h54k6rt6ffuu.apps.googleusercontent.com',
          scope: 'email',
        });
      }
      gapi.load('client.auth2', start);
    };
    loginGoogle();
  });
  return (
    <>
      <FacebookLogin
        appId="519822053435491"
        autoLoad={true}
        fields="name,email,picture"
        onClick={() => {}}
        callback={responseFacebook}
        render={(renderProps) => <button onClick={renderProps.onClick}>Login facebook</button>}
        cssClass="btn-facebook-login"
        icon={<MdFacebook size={16} />}
      />
      <GoogleLogin
        clientId="257874017469-m2maogal65g8qnuch8t9h54k6rt6ffuu.apps.googleusercontent.com"
        buttonText="Login with google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </>
  );
}

export default LoginPage;

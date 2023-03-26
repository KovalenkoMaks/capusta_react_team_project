import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { ReactComponent as GoogleIcon } from 'images/google.svg';
import { SignButton } from './GoogleLogin.styled';
import axios from 'axios';
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
function GoogleLogin() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: codeResponse => setUser(codeResponse),
    onError: error => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (!user || !user?.access_token) {
      return;
    }

    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        }
      )
      .then(res => {
        setProfile(res.data);
      })
      .catch(err => console.log(err));
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  // const logOut = () => {
  //     googleLogout();
  //     setProfile(null);
  // };
  console.log(profile);
  return (
    <div>
      {/* {profile ? (
                <div>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : ( */}
      <SignButton onClick={() => login()}>
        <GoogleIcon />
        Google
      </SignButton>
      {/* )} */}
    </div>
  );
}
export default GoogleLogin;

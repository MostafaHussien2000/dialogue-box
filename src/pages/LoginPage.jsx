/* Firebase Imports
=================== */
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";

/* Import React Icons
===================== */
import { FaGoogle } from "react-icons/fa";

/* Import React Hooks
========================== */
import { useState } from "react";

/* Import Images
================ */
import logo from "../logo.png";

function LoginPage() {
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser({
          userName: result.user.auth.currentUser.displayName,
          email: result.user.auth.currentUser.email,
          uid: result.user.auth.currentUser.uid,
          photoURL: result.user.auth.currentUser.photoURL,
        });
      })
      .then(() => {
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <main className="login-page" id="login-page">
      <center className="login-page__container">
        <img src={logo} alt="Dialogue Box logo" className="login-page__logo" />
        <p className="login-page__welcome">Welcome to</p>
        <h1 className="login-page__heading">Dialogue Box</h1>
        <h4 className="login-page__sub-heading">Login</h4>
        <button
          onClick={handleGoogleSignIn}
          className="login-page__google-button"
          id="login-with-google"
        >
          <FaGoogle /> Continue with Google
        </button>
      </center>
    </main>
  );
}

export default LoginPage;

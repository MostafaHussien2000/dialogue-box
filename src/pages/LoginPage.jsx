/* Import React Icons
===================== */
import { FaGoogle } from "react-icons/fa";

/* Import React Components
========================== */

/* Import Images
================ */
import logo from "../logo.png";

function LoginPage() {
  return (
    <main className="login-page" id="login-page">
      <center className="login-page__container">
        <img src={logo} alt="Dialogue Box logo" className="login-page__logo" />
        <p className="login-page__welcome">Welcome to</p>
        <h1 className="login-page__heading">Dialogue Box</h1>
        <h4 className="login-page__sub-heading">Login</h4>
        <button className="login-page__google-button" id="login-with-google">
          <FaGoogle /> Continue with Google
        </button>
      </center>
    </main>
  );
}

export default LoginPage;

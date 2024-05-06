/* Import Images
================ */
import logo from "../logo.png";

function HomePage() {
  return (
    <main className="home-page">
      <center className="home-page_container">
        <nav>
          <div className="logo">
            <img
              src={logo}
              alt="Dialogue Box logo"
              className="login-page__logo"
            />
          </div>
          <div className="action"></div>
        </nav>
        <header>
          <h1 className="home-page__heading">
            Where every word <br />
            sparks a{" "}
            <span>
              Connection
              <svg
                className="w-10 h-10"
                viewBox="0 0 157 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 26.8298C7.44354 26.328 16.2416 27.5975 20.8503 22.0732C22.0876 20.5901 22.6449 18.9933 24.3788 17.9413C27.4099 16.1023 30.27 14.6808 33.0187 12.3153C36.3879 9.41581 36.8687 14.1745 39.6031 15.8563C44.7959 19.0503 45.887 12.1235 50.2226 12.4715C56.6596 12.988 56.3685 20.2201 64.5732 15.4512C70.945 11.7476 74.107 3.67351 78.9153 12.8724C84.6188 23.7837 89.9668 25.5201 99.5717 17.4602C105.586 12.4136 113.464 11.6847 120.996 10.6988C133.192 9.10277 143.792 5.60782 155.151 1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <button type="button" className="home-page__button">
            <span>
              <em>Wanna try it?</em>
            </span>
            <span>
              <em>Sign Up Now!</em>
            </span>
          </button>
        </header>
      </center>
    </main>
  );
}

export default HomePage;

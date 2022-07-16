import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/metricks-logo.png";


import "./navigation.styles.css";

const Navigation = () => {
  // Handles contact open and close.
  const onHandleContactToggle = () => {
    const contactCont = document.querySelector(".contact-container");
    const overlay = document.querySelector(".overlay");
    const navLinkContainer = document.querySelector(".nav-links-container");

    overlay.classList.remove("hidden");
    contactCont.classList.remove("hidden");
    navLinkContainer.classList.add("hidden-nav");
  };

  // Handles closing of the nav container on smaller screens.
  const onHandleNavToggleClose = () => {
    const navLinkContainer = document.querySelector(".nav-links-container");
    navLinkContainer.classList.add("hidden-nav");
  };

  // Handles opening of the nav container.
  const onHandleNavToggleOpen = () => {
    const navLinkContainer = document.querySelector(".nav-links-container");
    navLinkContainer.classList.remove("hidden-nav");
    // console.log("good");
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link
          onClick={onHandleNavToggleClose}
          className="logo-container"
          to="/"
        >
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav-links-container hidden-nav">
          <button onClick={onHandleNavToggleClose} className="btn--close-nav">
            &times;
          </button>
          <Link
            onClick={onHandleNavToggleClose}
            className="nav-link"
            to="/about"
          >
            About Us
          </Link>
          <Link
            onClick={onHandleNavToggleClose}
            className="nav-link"
            to="/github"
          >
            Github
          </Link>

          <Link
            onClick={onHandleNavToggleClose}
            className="nav-link"
            to="/blog   "
          >
            Blog
          </Link>

          <button onClick={onHandleContactToggle} className="btn nav-link">
            <p>Contact Us</p>
          </button>

          <div className="overlay hidden"></div>
        </div>

        {/* Hamburger button */}
        <button onClick={onHandleNavToggleOpen} className="hamburger">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

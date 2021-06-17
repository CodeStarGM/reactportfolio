//npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
//! the upper link is for installing font awesome
import React from "react";
import {
  faHeart,
  faLaptop,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFoursquare,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className="footer mt-auto py-3 ">
        <div className="container gamer">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a
                className="nav-link colorize"
                href="https://www.linkedin.com/in/ghous-muhammad-4730041a3/"
              >
                <FontAwesomeIcon icon={faHeart} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="https://www.linkedin.com/in/ghous-muhammad-4730041a3/"
              >
                Linked <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://twitter.com/CodeStar_Tweets"
              >
                Twitter
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.fiverr.com/codestargm?up_rollout=true"
              >
                Fiverr <FontAwesomeIcon icon={faFoursquare} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.upwork.com/freelancers/~012c788a3642826144"
              >
                Upwork <FontAwesomeIcon icon={faUserCircle} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link colorize"
                href="https://www.linkedin.com/in/ghous-muhammad-4730041a3/"
              >
                <FontAwesomeIcon icon={faHeart} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;

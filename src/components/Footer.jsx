import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeartCircleBolt } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="container-fluid pt-3 "
      style={{ backgroundColor: "#1a2238" }}
    >
      <footer className="text-center text-lg-start">
        <div className="container d-flex justify-content-center py-1">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg btn-floating mx-2"
          >
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </button>
          <Link href="https://github.com/williamgyamfik">
            <button
              type="button"
              className="btn btn-light btn-lg btn-floating mx-2"
            >
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </button>
          </Link>
        </div>

        <div className="text-center text-white  p-3">
          <h4>E-kaubanduse pood </h4>
          <p>
            Made with
            <span>
              <FontAwesomeIcon
                style={{ color: "red" }}
                icon={faHeartCircleBolt}
                size="2x"
              ></FontAwesomeIcon>
            </span>
            by dev William
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="prefooter pt-5 pb-5">
        <div className="row text-center">
          <div className="col-2 fw-bold footMain" />
          <div className="col-2 fw-bold footMain">MAIN</div>
          <div className="col-2 fw-bold footMain">LEARN MORE</div>
          <div className="col-2 fw-bold footMain">RESOURCES</div>
          <div className="col-2 fw-bold">
            <a
              className="sm px-2"
              href="https://twitter.com/?lang=en"
              target="_blank"
            >
              <i className="fab fa-twitter socialMedia fa-2x" />
            </a>
          </div>
          <div className="col-2 fw-bold" />
        </div>
        <div className="row text-center">
          <div className="col-2 fw-bold footsies" />
          <div className="col-2 footsm footsies">
            <a className="sm" href="#">
              Urgent Causes
            </a>
          </div>
          <div className="col-2 footsm footsies">
            <a className="sm" href="#">
              Our Mission
            </a>
          </div>
          <div className="col-2 footsm footsies">
            <a className="sm" href="#">
              Help
            </a>
          </div>
          <div className="col-2 footsm footsies">
            <a
              className="sm px-2"
              href="https://www.pinterest.com/"
              target="_blank"
            >
              <i className="fab fa-pinterest-p socialMedia fa-2x" />
            </a>
          </div>
          <div className="col-2 fw-bold footsies" />
        </div>
        <div className="row text-center">
          <div className="col-2 fw-bold footsies" />
          <div className="col-2 footsm footsies">
            <a className="sm" href="#">
              Feed
            </a>
          </div>
          <div className="col-2 footsm footsies">
            <a className="sm" href="#">
              Fundraise
            </a>
          </div>
          <div className="col-2 footsm footsies">
            <a className="sm" href="#">
              Terms
            </a>
          </div>
          <div className="col-2 footsm footsies">
            <a
              className="sm px-2"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <i className="fab fa-facebook-square socialMedia fa-2x" />
            </a>
          </div>
          <div className="col-2 fw-bold footsies" />
        </div>
        <div className="row text-center">
          <div className="col-2 fw-bold footsies" />
          <div className="col-2 footsm footsies">
            <a className="sm" href="#">
              Sign Up
            </a>
          </div>
          <div className="col-2 footsm footsies">
            <a className="sm" href="#">
              Volunteer
            </a>
          </div>
          <div className="col-2 footsm footsies">
            <a className="sm" href="#">
              Contact Us
            </a>
          </div>
          <div className="col-2 footsm footsies">
            <a
              className="sm px-2"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <i className="fab fa-instagram socialMedia fa-2x" />
            </a>
          </div>
          <div className="col-2 fw-bold footsies" />
        </div>
        <div className="row text-center">
          <div className="col-2 fw-bold footsies" />
          <div className="col-2 footsm footsies">
            <a className="sm" href="#">
              Log In
            </a>
          </div>
          <div className="col-2 footsm footsies">
            <a className="sm" href="#" />
          </div>
          <div className="col-2 footsm footsies">
            <a className="sm" href="#">
              FAQs
            </a>
          </div>
          <div className="col-2 footsm footsies" />
          <div className="col-2 fw-bold footsies" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

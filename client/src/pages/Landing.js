import React from "react";
import Auth from "../utils/auth";
import PrelogHeader from "../components/PrelogHeader";
import SignupForm from "../components/SignupForm";
import saveChild from "../assets/savethechildren.jpg"
import communityImg from "../assets/community2.jpg"
import volunteerImg from "../assets/volunteerhero.jpg"
import animalImg from "../assets/animalrights1.jpg"
import protectAfghanImg from "../assets/protectafgans2.jpg"
import wildfireImg from "../assets/wilefire.jpg"

const Landing = () => {
  return (
    <>
      <PrelogHeader />
      <div>
        {/* LANDING */}
        <div className="mainJumbo mb-5">
          <div className="container jumbo-container">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-6">
                      <h1 className="display-3">
                        <span className="jumboHead">Beyond Us</span>
                      </h1>
                      <hr className="my-4" />
                      <p>
                        Connecting remarkable humans to extraordinary
                        organizations with one goal in mind, to help those
                        beyond ourselves. Beyond Us brings forth real world
                        issues that require your help today.
                      </p>
                      <p className="lead">
                        <button
                          type="button"
                          className="btn btn-danger joinCause btn-med"
                        >
                          <a
                            className="nav-link text-light fw-bold"
                            href="#jointhecause"
                          >
                            Join the Cause
                          </a>
                        </button>
                      </p>
                    </div>
                    <div className="col-4">
                      <img
                        src={saveChild}
                        className="img-fluid"
                        alt="Responsive image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="col-1"></div> */}
            </div>
          </div>
        </div>
        {/* empty */}
        {/* <div class="empty">
      <div class="container">
        <div class="row">
          <div class="col-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam dolore unde sit, aut iusto voluptatum, deleniti tempora laudantium adipisci ratione obcaecati officia dolorum accusantium deserunt? Pariatur iste distinctio suscipit!</div>
        </div>
      </div>
    </div> */}
        {/* Our Mission Statement */}
        <div className="missionStatement mt-5 mb-5" id="ourmission">
          <div className="container mission">
            <div className="row">
              <div className="col-2" />
              <div className="col-3">
                <img
                  src={communityImg}
                  className="img-fluid"
                  alt="Responsive image"
                />
              </div>
              {/* <div class="d-flex align-items-center"> */}
              <div className="col-5 d-flex align-items-center">
                {/* <h2>Our Mission</h2> */}
                <p>
                  <span className="fs-2">Our Mission</span>
                  <br />
                  Climate change, women's rights, poverty, animal cruelty, and
                  more. These issues we face are affecting people around the
                  world and future generations to come if we don't start to make
                  a change. Our platform provides access to hundreds of
                  non-profits and volunteer organizations in defense of the
                  greater good. Together we can make waves that can impact lives
                  and change the world.
                </p>
              </div>
              {/* </div> */}
              <div className="col-1" />
            </div>
          </div>
        </div>
        {/* What you can do */}
        <div className="actions mt-5 mb-5" id="howtohelp">
          <div className="container actionContainer mt-2 py-4 rounded">
            <div className="row">
              <div className="col-2" />
              <div className="col-5 d-flex align-items-center">
                <p>
                  <span className="fs-2">How to Help</span>
                  <br />
                  Donate. Volunteer. Spread awareness. Be informed. There are
                  many ways to help whether it is big or small. You're making a
                  difference in the world and someone's life.
                </p>
              </div>
              <div className="col-3">
                <img
                  src={volunteerImg}
                  className="img-fluid"
                  alt="Responsive image"
                />
              </div>
              <div className="col-1" />
            </div>
          </div>
        </div>
        {/* Landing closing statement */}
        <div className="landClose mb-5">
          <h1 className="landCloseStatement text-center">
            Speak up. Reach out. Make an impact.
          </h1>
        </div>
        {/* Discover causes */}
        <div className="discover mb-5 mt-5">
          <div className="container disco">
            <div className="row">
              <div className="col-2" />
              <div className="col-8">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  {/* <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div> */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={animalImg}
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Protect Animals lives</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={protectAfghanImg}
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Help Save Afghans</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={wildfireImg}
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Preserve our Planet</h5>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-2" />
          </div>
        </div>
      </div>

      {/* Sign Up*/}
      <div className="joinUs mt-5 mb-5" id="jointhecause">
        <div className="container joinUsTitle">
          <div className="row">
            <div className="col-1" />
            <div className="col-6">            
              <h2>Join the Cause</h2>
              <p>Sign up and join everyday heroes around the world to keep up with what is happening on our planet and how we can help combat and protect the future. You will gain access to our feed filled with trending topics that need your help today. Access non-profits and see where you can make a difference. <br /> <br />Today is a good day to start making a postive impact on lives that needs a helping hand and a world that needs us to save.  <br /><br /><span className="fw-bold">Together we can.</span></p>
            </div>
            <div className="col-1" />
            <SignupForm />
            <div className="col-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;

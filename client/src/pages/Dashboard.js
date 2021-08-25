import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import PostlogHeader from "../components/PostlogHeader";
import PostForm from "./PostForm";

import { QUERY_POSTS } from "../utils/queries";

import afghan1Img from "../assets/protextafgans.jpg";
import covidImg1 from "../assets/covid3.jpg";
import haitiImg from "../assets/haiti1.jpg";
import climateChangeImg from "../assets/climatechange3.jpg";
import afghanImg2 from "../assets/afghan.jpg";
import covidImg2 from "../assets/covid2.jpg";
import haitiImg3 from "../assets/haiti4.jpg";
import donate from "../assets/donateSeed";
import postSeed from "../assets/postSeed";

function Dashboard() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);
  return (
    <>
      <PostlogHeader />
      {/* <PostForm /> */}
      <div>
        {/* DASHBOARD */}
        <div>
          <div className="container postTitles pt-3 pb-3 mb-2 rounded">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-7">
                <h3 className=" text-center fw-bolder" id="happeningnow">
                  Happening Now
                </h3>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
        {/* Discover */}
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="container">
                <h3 className="causes text-center fw-bolder">Discover</h3>
                <p className="fs-6">Other efforts that require your help</p>
              </div>
              <hr />
              <p className="animals fs-5">
                {" "}
                <i className="fas fa-paw" /> Animal Rescue / Rights
              </p>
              <ul>
                <li>
                  <a className="sm" href="https://www.aspca.org/">
                    American Society for the Prevention of Cruelty to Animals
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://bestfriends.org/">
                    Best Friends
                  </a>
                </li>
                <li>
                  <a
                    className="sm"
                    href="https://globalgiftguide.org/collections/animals"
                  >
                    Global Gift Guide
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://www.humanesociety.org/">
                    Humane Society
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://www.peta.org/">
                    PETA
                  </a>
                </li>
              </ul>
              <p className="children fs-5">
                <i className="fas fa-child" /> Children's rights &amp; welfare
              </p>
              <ul>
                <li>
                  <a className="sm" href="https://www.casey.org/">
                    Casey Family Programs
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://www.cwla.org/">
                    Child Welfare League of America
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://www.childrensdefense.org/">
                    Children's Defense Fund
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://defenceforchildren.org/">
                    Defence For Children International
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://www.humanium.org/en/">
                    Humaninum
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://www.nccp.org/">
                    National Center for Children in Poverty
                  </a>
                </li>
              </ul>
              <p className="animals fs-5">
                <i className="fas fa-globe-americas" /> Environmental
              </p>
              <ul>
                <li>
                  <a
                    className="sm"
                    href="hhttps://www.actionagainsthunger.org/"
                  >
                    Actions Against Hunger
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://www.edf.org/">
                    Environmental Defense Fund
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://www.nature.org/en-us/">
                    {" "}
                    Nature Org
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://www.nrdc.org/">
                    Natural Resources Defense Council
                  </a>
                </li>
                <li>
                  <a
                    className="sm"
                    href="https://www.sierraclubfoundation.org/"
                  >
                    Sierra Club Foundation
                  </a>
                </li>
              </ul>
              <p className="humanitarian fs-5">
                <i className="fas fa-fingerprint" /> Humanitarian
              </p>
              <ul>
                <li>
                  <a
                    className="sm"
                    href="hhttps://www.actionagainsthunger.org/"
                  >
                    Action Against Hunger
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://www.habitat.org/">
                    Habitat
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://ptpi.org/">
                    People to People International
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://www.savethechildren.org/">
                    Save the Children
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://www.unicef.org/">
                    Unicef
                  </a>
                </li>
              </ul>
              <p className="women fs-5">
                <i className="fas fa-female" /> Women's Rights
              </p>
              <ul>
                <li>
                  <a className="sm" href="https://dressforsuccess.org">
                    Dress for Success
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://everymothercounts.org/">
                    Every Mother Counts
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://forthegood.org/">
                    For the Good
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://www.globalfundforwomen.org/">
                    Global Fund for Women
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://shareandcare.org/">
                    Share and Care
                  </a>
                </li>
                <li>
                  <a className="sm" href="https://www.womenforwomen.org/">
                    Women for Women
                  </a>
                </li>
              </ul>
            </div>

            {/* ==============POSTS============== */}

            <div className="col-7 pl-2 pr-2">
              {posts.map((post) => (
                <div key={post._id}>
                  <div className="card" style={{ width: "100%" }}>
                    {post.image && (
                      <img
                        src={post.image}
                        className="card-img-top"
                        alt={post.title}
                      />
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.subtitle}</p>
                      <div className="text-end">
                        <Link
                          to={`/post/${post._id}`}
                          className="btn btn-danger"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {postSeed.map((post) => (
                <div key={post._id}>
                  <div className="card" style={{ width: "100%" }}>
                    {post.image && (
                      <img
                        src={post.image}
                        className="card-img-top"
                        alt={post.title}
                      />
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.subtitle}</p>
                      <div className="text-end">
                        <Link
                          to={`/post/${post._id}`}
                          className="btn btn-danger"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {donate.map((donate) => (
                <div key={donate._id}>
                  <div className="card" style={{ width: "100%" }}>
                    <img
                      src={donate.image}
                      className="card-img-top"
                      alt={donate.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{donate.title}</h5>
                      <p className="card-text">{donate.subtitle}</p>
                      <div className="text-end">
                        {/* <Link to={donate.orgLink}>Donate</Link> */}
                        <a
                          href={donate.orgLink}
                          className="btn btn-danger"
                          target="_blank"
                        >
                          Donate now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-2">
              <br />
              <h3 className="causes text-center fw-bolder">Trending</h3>
              <hr />
              <p className="text-center">Twitter</p>
              <p className="text-center">
                <a href="https://twitter.com/search?q=%23saveAfghans">
                  #saveAfghans
                </a>
                <br />
                <a href="https://twitter.com/search?q=%23Kabul">#Kabul</a>
                <br />
                <a href="https://twitter.com/search?q=%23Afghanistan">
                  #Afghanistan
                </a>
                <br />
                <a href="https://twitter.com/search?q=%23taliban">#taliban</a>
                <br />
                <a href="https://twitter.com/search?q=%23support">#support</a>
                <br />
                <a href="https://twitter.com/search?q=%23america">#america</a>
                <br />
                <a href="https://twitter.com/search?q=%23saveAfghans">
                  #saveAfghans
                </a>
                <br />
                <a href="https://twitter.com/search?q=%23kabulafghanistan">
                  #kabulafghanistan
                </a>
                <br />
                <a href="https://twitter.com/search?q=%23peace">#peace</a>
                <br />
                <a href="https://twitter.com/search?q=%23covid19">#Covid19</a>
                <br />
                <a href="https://twitter.com/search?q=%23Coronavirus">
                  #Coronavirus
                </a>
                <br />
                <a href="https://twitter.com/search?q=%23Covid">#covid</a>
                <br />
                <a href="https://twitter.com/search?q=%23ClimateStrike">
                  #ClimateStrike
                </a>
                <br />
                <a href="https://twitter.com/search?q=%23ClimateCrisis">
                  #ClimateCrisis
                </a>
                <br />
                <a href="https://twitter.com/search?q=%23climatechange">
                  #climatechange
                </a>
                <br />
              </p>
              <br />
              <h3 className="news text-center fw-bolder">News</h3>
              <hr />
              <div className="my-3">
                <div className="card" style={{ width: "15rem" }}>
                  <img src={afghanImg2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text text-center text-uppercase">
                      <a
                        href="https://www.nytimes.com/live/2021/08/17/world/taliban-afghanistan-news"
                        className="sm"
                      >
                        Fearful people of Afghanistan in search of a way out
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <div className="card mt=3" style={{ width: "15rem" }}>
                  <img src={covidImg2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text text-center text-uppercase">
                      <a
                        href="https://www.nytimes.com/live/2021/08/20/world/covid-delta-variant-vaccine"
                        className="sm"
                      >
                        F.D.A approved Pfizer on the way
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <div className="card mt=3" style={{ width: "15rem" }}>
                  <img src={haitiImg3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text text-center text-uppercase">
                      <a
                        href="https://www.npr.org/2021/08/20/1029921352/haitian-quake-victims-rush-aid-sites-and-take-food-and-supplies"
                        className="sm"
                      >
                        Haitian quake survivors in need of aid
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="discoImages">
              {/* <img src="./assets/img/community2.jpg" alt="Avatar" class="roundImg"> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

{
  /* <div class="card" style="width: 100%;">
                              <img src="./assets/img/protextafgans.jpg" class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 class="card-title">Help save Afghans</h5>
                                <p class="card-text">As the Taliban has breached the capital city of Kabul, thousands of Afghans are fighting to find a way out. Humanitarians and soldiers on the ground are doing what they can, but here is our oppurtunity to help save hundreds of lives. Read more on the efforts to get planes on the ground to bring Afghans to safety. 
                                </p>
                                <div class="text-end">
                                  <a href="#" class="btn btn-danger">Read more</a>
                                </div>
                              </div> */
}
{
  /* <div className="my-4">
                <div className="card mt-3" style={{ width: "100%" }}>
                  <img src={covidImg1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">COVID-19: Global Pandemic</h5>
                    <p className="card-text">
                      As we battle our everyday stresses, we are also at war
                      with a contagion that has sweep across the globe. Medical
                      workers are working endless hours to help protect us.
                      Here's how we can help prevent the spread.
                    </p>
                    <div className="text-end">
                      <a href="#" className="btn btn-danger">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div> */
}
{
  /* <div className="my-4">
                <div className="card mt-3" style={{ width: "100%" }}>
                  <img src={haitiImg} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      Catostophic earthquake struck Haiti
                    </h5>
                    <p className="card-text">
                      Haiti was recently hit by a 7.2 magnitude earthquake
                      leaving over a thousand Haitians and counting dead. As
                      rescue efforts are in progress, survivors, many left
                      without homes and any possesions, are in search of aid,
                      food, and supplies.
                    </p>
                    <div className="text-end">
                      <a
                        href="https://www.unicefusa.org/?form=FUNZZFVXQHV"
                        className="btn btn-danger"
                      >
                        Donate now
                      </a>
                    </div>
                  </div>
                </div>
              </div> */
}
{
  /* <div class="card mt-3" style="width: 100%;">
                              <img src="./assets/img/covid3.jpg" class="card-img-top" alt="...">
                              <div class="card-body">
                                  <h5 class="card-title">COVID-19: Global Pandemic</h5>
                                  <p class="card-text">As we battle our everyday stresses, we are also at war with a contagion that has sweep across the globe. Medical workers are working endless hours to help protect us. Here's how we can help prevent the spread.</p>
                                  <div class="text-end">
                                      <a href="#" class="btn btn-danger">Read more</a>
                                  </div>
                              </div>
                          </div> */
}
{
  /* <div className="my-4">
                <div className="card mt-3" style={{ width: "100%" }}>
                  <img
                    src={climateChangeImg}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Climate Change</h5>
                    <p className="card-text">
                      Our world is telling us that things are changing for the
                      worst. As ice caps melts, deforestation continues, and the
                      heat level around the world rise, we must find way to help
                      planet Earth.
                    </p>
                    <div className="text-end">
                      <a
                        href="https://www.rainforestcoalition.org/"
                        className="btn btn-danger"
                      >
                        Donate now
                      </a>
                    </div>
                  </div>
                </div>
              </div> */
}
{
  /* <div class="card mt-3" style="width: 100%;">
                              <img src="./assets/img/climatechange3.jpg" class="card-img-top" alt="...">
                              <div class="card-body">
                                  <h5 class="card-title">Climate Change</h5>
                                  <p class="card-text">Our world is telling us that things are changing for the worst. As ice caps melt and the heat level around the world rise, we must find way to help planet Earth.</p>
                                  <div class="text-end">
                                      <a href="#" class="btn btn-danger">Donate now</a>
                                  </div>
                              </div>
                          </div> */
}

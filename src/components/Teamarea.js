import React, { Fragment } from 'react'
import team1 from "../assets/images/team/t3.jpg";
import team2 from "../assets/images/team/t4.jpg";
const Teamarea = () => {

  return (
    <Fragment>
        <div className="team-area pb-100 pt-90">
            <div className="container">
              <div className="row team-column">
                <div className="col-lg-4 col-12">
                  <div className="team-info">
                    <div className="team-box">
                      <h2>Meet our team</h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                      <div className="Button-Widget-genesis">
                        <a href="#" className="Button-Widget">
                          <div className="Button-Content">
                            <span>View All</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="team-info">
                    <div className="team-img">
                      <img src={team1} alt="" />
                      <div className="hover-area">
                        <div className="profile-icon">
                          <ul className="ekit-team-social-list">
                            <li>
                              <a>
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i
                                  className="fa fa-twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="team-text text-center">
                      <h4>Maximus Holden </h4>
                      <p>Interior Designer</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="team-info">
                    <div className="team-img">
                      <img src={team2} alt="" />
                      <div className="hover-area">
                        <div className="profile-icon">
                          <ul className="ekit-team-social-list">
                            <li>
                              <a>
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i
                                  className="fa fa-twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="team-text text-center">
                      <h4>Bryn Mccormick </h4>
                      <p>Project Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default Teamarea
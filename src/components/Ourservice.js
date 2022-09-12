import React, { Fragment } from 'react'
import service from "../assets/images/service/01.jpg";
import service2 from "../assets/images/service/02.jpg";
import service3 from "../assets/images/service/03.jpg";
import service4 from "../assets/images/service/04.jpg";
import service5 from "../assets/images/service/05.jpg";
import service6 from "../assets/images/service/06.png";

const Ourservice = () => {

  return (
    <Fragment>

     <div className="our-Services-area pb-100 pt-100">
            <div className="container">
              <div className="row our-Services-cover mb-30">
                <div className="col-lg-4 col-md-4">
                  <div className="our-Services">
                    <h2>Our Services</h2>
                    <p>
                      Far far away behind the word mountains far from the
                      countries Vokalia and Consonantia there live the blind
                      texts.
                    </p>
                    <div className="Button-Widget-genesis">
                      <a
                        href="https://www.youtube.com/"
                        className="Button-Widget"
                      >
                        <div className="Button-Content">
                          <span>View All</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="our-Services-info">
                    <div className="our-Services-img">
                      <img src={service} alt="" />
                    </div>
                    <div className="our-Services-icon">
                      <i className="fa fa-home" aria-hidden="true"></i>
                    </div>
                    <div className="our-Services-text">
                      <h4>Residential Design </h4>
                      <p>
                        We bring the right people together to challenge
                        established thinking and drive transform in 2021
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="our-Services-info">
                    <div className="our-Services-icon">
                      <i
                        className="fa fa-glass"
                        aria-hidden="true"
                        style={{ color: "#fff" }}
                      ></i>
                    </div>
                    <div className="our-Services-text">
                      <h4 style={{ color: "#fff" }}>Restaurant Design </h4>
                      <p style={{ color: "#ffff" }}>
                        We bring the right people together to challenge
                        established thinking and drive transform in 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row our-Services-cover">
                <div className="col-lg-4 col-md-4">
                  <div className="our-Services-info">
                    <div className="our-Services-img">
                      <img src={service2} alt="" />
                    </div>
                    <div className="our-Services-icon">
                      <i className="fa fa-desktop" aria-hidden="true"></i>
                    </div>
                    <div className="our-Services-text">
                      <h4>Corporate Design</h4>
                      <p>
                        We bring the right people together to challenge
                        established thinking and drive transform in 2021
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="our-Services-info">
                    <div className="our-Services-img">
                      <img src={service4} alt="" />
                    </div>
                    <div className="our-Services-icon">
                      <i className="fa fa-money" aria-hidden="true"></i>
                    </div>
                    <div className="our-Services-text">
                      <h4>Commercial Design </h4>
                      <p>
                        We bring the right people together to challenge
                        established thinking and drive transform in 2021
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="our-Services-info">
                    <div className="our-Services-img">
                      <img src={service5} alt="" />
                    </div>
                    <div className="our-Services-icon">
                      <i className="fa fa-wrench" aria-hidden="true"></i>
                    </div>
                    <div className="our-Services-text">
                      <h4>Industrial Design </h4>
                      <p>
                        We bring the right people together to challenge
                        established thinking and drive transform in 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default Ourservice;
import React from 'react'
import testi from "../assets/images/testimonial/t-01.jpg";
import cl from "../assets/images/testimonial/client-1.png";

const Testimonals = () => {
    const left = -1194;
    const an = "translate3d(" + left + "px, " + 0 + "px," + 0 + "+px);";
    const dur = 1;
    const anime = {
        transform: an,
        transition: `all ${dur}s ease ${dur}s`,
        width: "4081px",
      };
  return (
    <div className="testimonials-area">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="testimonials col-12 p-0">
                  <div className="col-lg-6 col-md-12 p-0">
                    <a href="#">
                      <img src={testi} alt="" />
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="testimonials-elementor">
                      <h2>Testimonials</h2>
                      <p>
                        Far far away behind the word mountains far from the
                        countries Vokalia and Consonantia there live the blind
                        texts.
                      </p>
                    </div>
                    <div class="testimonials-active-1 owl-carousel owl-loaded owl-drag">
                      <div class="owl-stage-outer">
                        <div class="owl-stage" style={anime}>
                          <div
                            class="owl-item cloned"
                            style={{ width: "597.2px;" }}
                          >
                            <div class="single-testimonials d-flex col-12">
                              <div class="client-info">
                                <p>
                                  A wonderful serenity has taken possession of
                                  my entire soul, like these sweet mornings of
                                  spring which I enjoy with my whole heart.
                                </p>
                                <div class="testimonials-details">
                                  <div class="testimonials-img">
                                    <a href="#">
                                      <img src={cl} alt="" />
                                    </a>
                                  </div>
                                  <div class="testimonials-text">
                                    <h3>Albert Junior</h3>
                                    <p>Designer</p>
                                  </div>
                                </div>
                                <div class="testimonials-icon">
                                  <i
                                    class="fa fa-quote-left"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="owl-nav">
                        <div class="owl-prev"></div>
                        <div class="owl-next"></div>
                      </div>
                      <div class="owl-dots">
                        <div class="owl-dot active">
                          <span></span>
                        </div>
                        <div class="owl-dot">
                          <span></span>
                        </div>
                        <div class="owl-dot">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Testimonals
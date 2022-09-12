import React, { Fragment,useState} from 'react'
import ReactPlayer from "react-player";
import img from "../assets/images/product/a-02.jpg";

const Main = (props) => {
  const [isplay, setPlay] = useState(false);
  
  const handlervideo = (event) => {
    setPlay(true);
  };
  
  console.log("selam");
  const handlertog = (event) => {
    setPlay(false);
    console.log("tog");
  };

    
    

  return (
    <Fragment>
        <div
        className="toggleVideocon"
        style={{ display: isplay ? "flex" : "none" }}
        onClick={handlertog}
      >
        <div>
          <ReactPlayer
            config={{ file: { attributes: { poster: "v1.jpg" } } }}
            height="100%"
            width="100%"
            playing={isplay}
            muted={false}
            controls={true}
            url="drone.mp4"
          />
        </div>
      </div>

       <div className="innovative-ideas-area pt-100 pb-100">
            <div className="container">
              <div className="row">
                <div className="innovative-ideas col-12 p-0">
                  <div className="col-lg-6 col-12 in_col">
                    <div
                      className="innovative-ideas-info"
                      style={{ height: "100%" }}
                    >
                      <div
                        className="innovative-ideas-img"
                        style={{ height: "100%" }}
                      >
                        <img src={img} />
                      </div>
                      <div
                        className="video-btn-3 video-btn-3-yellow "
                        style={{ padding: "0", borderRadius: "50%" }}
                      >
                        <div className="video-popup" onClick={handlervideo}>
                          <i className="fa fa-play"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="innovative-ideas-elementor">
                      <h3>Welcome to Inner</h3>
                      <h2>Innovative ideas stylish designs</h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                      <div className="Button-Widget-genesis">
                        <a
                          href="product-details.html"
                          className="Button-Widget"
                        >
                          <div className="Button-Content">
                            <span>Shop now</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <section
                      id="counter-stats"
                      className="wow fadeInRight"
                      data-wow-duration="1.4s"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 stats text-center">
                            <div className="count">25</div>
                            <h5>Years of Experience</h5>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 stats text-center">
                            <div className="count">1250</div>
                            <h5>Projects Completed</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 stats text-center">
                            <div className="count">15</div>
                            <h5>Separate Villas</h5>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 stats text-center">
                            <div className="count">20</div>
                            <h5>Miles from the City</h5>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default Main
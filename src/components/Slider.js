import React, { Fragment } from 'react'
import './_slider.scss'
import slide from "../assets/images/slider/slider-6.jpg";

const Slider = (props) => {

    const backImage = {
        backgroundImage: "url(" + slide + ")",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
      };


      const handlerClassName=()=>{
          // House componenti içierisinde  bu metot
            props.handlerClassName()
      }

  return (
    
    <Fragment>

    <div className="slider-area" >
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="main-slider-active-2 owl-carousel slider-nav-position-2 slider-nav-style-2 owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div className="owl-stage" style={{ width: "100%" }}>
                        <div
                          className="owl-item cloned"
                          style={{ width: "100%" }}
                        >
                          <div
                            className="single-main-slider slider-animated-2 bg-img slider-height-2"
                            style={backImage}
                          >
                            <div className="container height-100-percent">
                              <div className="main-slider-content-2">
                                <h1 className="animated">
                                  Housing Block Building
                                </h1>
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default Slider
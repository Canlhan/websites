import React from "react";
import './_slider.scss'

import  "./slider.css"


const Couresel = (props) => {

  return (
    <>
      <div className="single-main-slider slider-animated-2 bg-img slider-height-2">
        <div className="container height-100-percent">
          <div className="main-slider-content-2">
            <h1 className="animated">{props.text}</h1>
            
            <div className="Button-Widget-genesis">
              <a href="product-details.html" className="Button-Widget">
                <div className="Button-Content">

                  <span>Shop now</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Couresel;

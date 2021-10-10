import React from "react";
import "./style.module.css"

const App = (props) => {
  return <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-12 col-md-10 col-sm-12 col-lg-7">
        <div className="main p-5">
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>
          <h1>Coming Soon...</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="stay-connected">
            <p>Stay Connected, Stay Updated</p>

            <label htmlFor="Email Address"></label>
            <div className="input-group subscribe" >
              <input className="form-control" type="text" placeholder="Email Address" />
              <button type="button" className="button">Button</button>
            </div>
          </div>
          <div className="line"></div>
          <div className="row align-items-center">
            <div className="col-md-12 col-sm-12 col-12 col-lg-6 col-xl-5 col-xxl-4 ps-0 pe-0">
              <div className="contact">
                <a href="https://www.facebook.com/AMCSDI/?ref=page_internal"><img src="/icons/Facebook-square.png"
                  alt="Facebook" /></a>
                <a href="tel:+61450371202" id="phone-number"><img src="/icons/phone.png" alt="Phone"
                  id="phone-icon" />1234567890</a>
              </div>
            </div>
            <div className="col"></div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12 col-sm-12 col-12 col-lg-6 col-xl-5 col-xxl-3 ">
              <div className="copyright">
                <img src="/icons/copyright.png" alt="copyright" />
                          2021 Aus-Mon. All rights reserved.
                      </div>
            </div>
            <div className="col"></div>
          </div>

        </div>
      </div>
      <div className="col"></div>
    </div>
  </div>;
};

export default App;

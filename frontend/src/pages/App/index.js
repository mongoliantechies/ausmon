import React from "react";
import "./style.module.css"

const App = (props) => {
  return <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-12 col-md-10 col-sm-12 col-lg-7">
        <div className="main p-5">
          <header className="col-11 col-md-11 col-sm-10 col-lg-11">
            <div className="logo">
              <img src="/logo.png" alt="logo" />
            </div>
            <div className="language">
              <a href="" id="eng" style={{fontSize:25}}>🇬🇧</a>
              <a href="" id="mon" style={{fontSize:25}}>🇲🇳</a>
            </div>
          </header>
          <h1>Тун Удахгүй...</h1>
          <p>“Австрали дахь Монголчуудын нийгмийн үйлчилгээ, хөгжлийн нийгэмлэг” ашгийн бус байгууллагын албан ёсны вэб сайт тун удахгүй нээгдэнэ.</p>
          <div className="stay-connected">
            <p>Та манай вэб сайтаас мэдээлэл авахыг хүсвэл э-мэйл хаягаа энд бичиж үлдээнэ үү.</p>

            <form htmlFor="Email Address" action="" method="POST">
            <div className="input-group subscribe" >
              <input name="email" className="form-control" type="text" placeholder="Email Address" />
              <button type="submit" id="eng" className="button eng-button">Subscribe</button>
              <button type="submit" id="mon" className="button">ДАГАХ</button>
            </div>
            </form>
          </div>
          <div className="line"></div>
          <div className="row align-items-center">
            <div className="col-md-12 col-sm-12 col-12 col-lg-6 col-xl-6 col-xxl-5 ps-0 pe-0">
              <div className="contact">
                <a href="https://www.facebook.com/AMCSDI"><img src="/icons/Facebook-square.png"
                  alt="Facebook" /></a>
                <div className="email">
                  <img src="/icons/email.png" alt="email"></img>
                  <a href="mailto:ausmon.csdi@gmail.com" id="email-contact">ausmon.csdi@gmail.com</a>
                </div>
                
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

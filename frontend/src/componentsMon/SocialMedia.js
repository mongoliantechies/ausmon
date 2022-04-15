import React from "react";

export const SocialMedia = () => {
  return (
    <div className="footer-social-links col-2 col-xxl-2 col-sm-6 col-md-6 col-lg-2">
      <button id="facebook">
        {/* <section> */}
        <img
          src={process.env.PUBLIC_URL + "/social-media-icons/facebook-icon.png"}
          alt="faceBook"
        />
        {/* </section>
        <section>
          <p>FOLLOW US ON</p>
          <h2>FACEBOOK</h2>
        </section> */}
      </button>
      <button id="instagram">
        {/* <section> */}
        <img
          src={
            process.env.PUBLIC_URL + "/social-media-icons/instagram-icon.png"
          }
          alt="instagram"
        />
        {/* </section>
        <section>
          <p>FOLLOW US ON</p>
          <h2>LINKEDIN</h2>
        </section> */}
      </button>
      <button id="tel">
        <img
          src={process.env.PUBLIC_URL + "/social-media-icons/phone-icon.png"}
          alt="telephone"
        />
        123456789
      </button>
    </div>
  );
};

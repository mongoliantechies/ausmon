import React from "react";
// import { Link } from "react-router-dom";

export const SocialMedia = () => {
  return (
    <div className="footer-social-links col-2 col-sm-6 col-md-6 col-lg-2">
      <a href="https://www.facebook.com/AMCSDI/">
        <button type="button" id="facebook">
          <img
            width={28}
            height={38}
            src={
              process.env.PUBLIC_URL + "/social-media-icons/facebook-icon.webp"
            }
            alt="faceBook"
          />
        </button>
      </a>

      {/* <button type="button" id="instagram">
        <img
          src={
            process.env.PUBLIC_URL + "/social-media-icons/instagram-icon.webp"
          }
          alt="instagram"
        />
        
      </button> */}
      <div>
        <button type="button" className="tel">
          <img
            width={15}
            height={15}
            src={process.env.PUBLIC_URL + "/social-media-icons/phone-icon.webp"}
            alt="telephone"
          />
          0415 674 556
        </button>

        <button type="button" className="tel">
          <img
            width={15}
            height={15}
            src={process.env.PUBLIC_URL + "/social-media-icons/phone-icon.webp"}
            alt="telephone"
          />
          0451 441 085
        </button>
      </div>
    </div>
  );
};

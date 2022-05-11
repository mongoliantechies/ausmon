import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import "../../styles/subscribe.css";
// import { addUser } from "./subscribesSlice";
// import mailchimp from "@mailchimp/mailchimp_marketing";
// const mailchimp = require("@mailchimp/mailchimp_marketing");

// const listID = "207e1c0c90";

export const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const dispatch = useDispatch();
  // const handleSubscribe = async () => {
  //   const userDetail = await mailchimp.lists.addListMember(listID, {
  //     email_address: email,
  //     status: "subscribed",
  //     merge_fields: {
  //       FNAME: firstName,
  //       LNAME: lastName,
  //     },
  //   });
  //   console.log("userId", userDetail.id);
  //   dispatch(
  //     addUser({
  //       email: email,
  //       firstName: firstName,
  //       lastName: lastName,
  //       userId: userDetail.id,
  //     })
  //   );
  // };
  return (
    <div className="row text-center">
      <div className="subscribe-container col-12 mx-auto">
        <h1>Newsletter</h1>
        <hr></hr>
        <p className="text-center">
          Subscribe and stay up to date our latest updates.
        </p>
        <form>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email address"
            required
          />
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="First name"
            required
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last name"
            required
          />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

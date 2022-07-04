import React, { useState } from "react";
// import { Link } from "react-router-dom";

export const SendEmail = ({ language, emailTo }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = (e) => {
    // window.location.href = "mailto:" + "emailTo";
    // e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <form className="col-lg-12 col-md-8 mx-auto">
      <p>
        {language === "mon"
          ? "Та манайх руу мэссэж илгээхийг хүсвэл доорх формыг бөглөнө үү."
          : ""}
      </p>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder={language === "mon" ? "Таны нэр" : "name"}
        required
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        type="tel"
        placeholder={language === "mon" ? "Утасны дугаар" : "phone number"}
        required
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder={language === "mon" ? "И-майл хаяг" : "email address"}
        required
      />
      <input
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        id="message"
        type="text"
        placeholder={language === "mon" ? "Захиа" : "message"}
        required
      />
      <button type="submit" onSubmit={(e) => handleSendEmail(e.target)}>
        {language === "mon" ? "Илгээх" : "Submit"}
      </button>
    </form>
  );
};

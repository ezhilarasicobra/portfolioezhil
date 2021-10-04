import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={"About Me"} span={"About Me"} />
      </div>
      <div className="ContactPage">
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+91 8148215010"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"tezzhilarasi@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"No 5,Dhandapani Nagar,Kumarapettai,Cuddalore"}
            text2={"TamilNadu, INDIA"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

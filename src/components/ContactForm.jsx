import { useState } from "react";
import { Form } from "react-router-dom";
import sale from "../images/sale.jpg";

const ContactForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-8" style={{ backgroundColor: "#FF6A3D" }}>
          <h2>
            Not yet a user? Sign up and get 10% discount on your first order
          </h2>
          <form className="signUpForm">
            <div>
              <label htmlFor="full-name">Full name</label>
              <input
                id="full-name"
                name="full-name"
                type="text"
                placeholder="Your full name"
                required
              ></input>
            </div>

            <div>
              <label htmlFor="full-name">E-mail address</label>
              <input
                id="full-email"
                name="full-email"
                type="email"
                placeholder="Your email"
                required
              ></input>
            </div>

            <div>
              <label htmlFor="info">How did you hear about us?</label>
              <select name="advert" id="advert">
                <option value="option">Please choose one option</option>
                <option value="facebook">Facebook</option>
                <option value="linkedin">LinkedIn</option>
                <option value="friends">Friends</option>
                <option value="google">Google</option>
              </select>
            </div>
            <button className="btn btn-danger">Sign up</button>
          </form>
        </div>
        <div className="col bg-primary">
          <img src={sale} alt="" style={{ width: "200px" }} />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

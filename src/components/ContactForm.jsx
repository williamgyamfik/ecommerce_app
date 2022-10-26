import { useState } from "react";
import { Form } from "react-router-dom";
import sale from "../images/sale.jpg";

const ContactForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="form-section">
      <div className="form-container ">
        <div className="form-box-container">
          <div className="form-box-text">
            <h2 className="form-box-heading">
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
              <div>
                <button className="btn-form"> Sign up</button>
              </div>
            </form>
          </div>
          <div>
            <img
              src={sale}
              alt=""
              style={{ width: "500px", height: "400px" }}
              className="form-image-box"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

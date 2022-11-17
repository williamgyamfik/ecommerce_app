import React from "react";

import { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const fullNameHandler = (event) => {
    setFullName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    setFullName("");
    setEmail("");
    setPhoneNumber("");
  };
  return (
    <>
      <div className="text-center pt-5">
        {" "}
        //put for card
        <h1>
          Not yet a user? Sign up and get{" "}
          <span style={{ color: "red" }}> 10%</span> discount on your first
          order
        </h1>
      </div>
      {/* <div className="container d-flex justify-content-center pt-5"> */}
      <div className="d-flex justify-content-center p-5">
        <form className="w-75 pt-5 rounded-3" onSubmit={submitFormHandler}>
          <div className="row mb-3 pb-4 pt-2  d-flex justify-content-center align-items-center">
            <label
              htmlFor="full-name"
              className=" col-sm-2 col-form-label label_size"
            >
              Full name*
            </label>

            <div className="col-sm-3">
              <input
                type="text"
                id="full-name"
                className="form-control rounded-3 shadow-lg input_size"
                onChange={fullNameHandler}
                value={fullName}
                required
              />
            </div>
          </div>

          <div className="row mb-3 pb-4 pt-2 d-flex justify-content-center align-items-center">
            <label
              htmlFor="e-mail"
              className=" col-sm-2 col-form-label label_size"
            >
              E-mail*
            </label>
            <div className="col-sm-3">
              <input
                type="email"
                id="e-mail"
                className="form-control rounded-3 shadow-lg input_size"
                onChange={emailHandler}
                value={email}
                required
              />
            </div>
          </div>
          <div className="row mb-3 pb-4 pt-2 d-flex justify-content-center align-items-center label_size">
            <label htmlFor="phone-number" className="col-sm-2 col-form-label">
              Phone number*
            </label>
            <div className="col-sm-3">
              <input
                type="text"
                id="phone-number"
                className="form-control rounded-3 shadow-lg input_size"
                onChange={phoneNumberHandler}
                value={phoneNumber}
                required
              />
            </div>
          </div>

          <div className=" d-flex justify-content-center pb-4 pt-2">
            <button className="fw-bold btn btn-success rounded-5">
              Sign up
            </button>
          </div>
        </form>
      </div>
      {/* </div> */}
    </>
  );
};

export default Form;

import React from "react";

// import { useState } from "react";

// import signUpImage from "../images/signup.jpg";

const Form = () => {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");

  // const fullNameHandler = (event) => {
  //   setFullName(event.target.value);
  // };

  // const emailHandler = (event) => {
  //   setEmail(event.target.value);
  // };

  // const phoneNumberHandler = (event) => {
  //   setPhoneNumber(event.target.value);
  // };

  // const submitFormHandler = (e) => {
  //   e.preventDefault();

  //   setFullName("");
  //   setEmail("");
  //   setPhoneNumber("");
  // };
  return (
    <>
      <div className="text-center pt-5">
        <h1>
          Not yet a user? Sign up and get{" "}
          <span style={{ color: "red" }}> 10%</span> discount on your first
          order
        </h1>
      </div>
      {/* <div className="container d-flex justify-content-center pt-5"> */}
      {/* <div className="d-flex justify-content-center p-5 ">
        <div className="d-flex justify-content-center">
          <img src={signUpImage} alt="" style={{ width: "20rem" }} />
        </div>
        <form className=" pt-5 card formCard" onSubmit={submitFormHandler}>
          <div className="row mb-3 pb-4 pt-2  d-flex justify-content-center align-items-center">
            <label
              htmlFor="full-name"
              className=" col-sm-2 col-form-label label_size fw-bold"
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
              className=" col-sm-2 col-form-label label_size fw-bold"
            >
              E-mail*
            </label>
            <div className="col-sm-3">
              <input
                type="email"
                id="e-mail"
                className="form-control rounded-3 shadow-lg input_size "
                onChange={emailHandler}
                value={email}
                required
              />
            </div>
          </div>
          <div className="row mb-3 pb-4 pt-2 d-flex justify-content-center align-items-center label_size">
            <div></div>
            <label
              htmlFor="phone-number"
              className="col-sm-2 col-form-label fw-bold"
            >
              Phone number*
            </label>
            <div className="col-sm-3 ">
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
        </form> */}
      {/* </div> */}
      {/* </div> */}
      <div className="container-md w-75 d-flex justify-content-center bg-light rounded-5 border border-3 shadow-lg  px-5">
        <div className="row">
          {/* <div className="d-flex justify-content-center align-items-center col-md-6 pt-5 pb-5 ">
            <img
              className="formImage img-fluid border border-1 border-warning "
              src={signUpImage}
              alt=""
            />
          </div> */}
          <div className="d-flex justify-content-center align-items-center col-md-6 pt-5 pb-5 col-md-12 ">
            <form className="bg-light pt-3 pb-5 text-center ">
              <div className="row mb-3 justify-content-center ">
                <div className="col-sm-12 col-md-12 pb-3 pt-3 col-lg-12">
                  <input
                    type="text"
                    className="form-control form-control-lg  text-dark input-group input-group-sm "
                    id="inputEmail3"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-sm-12 col-md-12 col-lg-12 pb-3 ">
                  <input
                    type="email"
                    className="form-control form-control-lg  text-dark input-group input-group-sm "
                    id="inputEmail3"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <input
                    type="password"
                    className="form-control form-control-lg   text-dark"
                    id="inputPassword3"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <button className="btn btn-success col-sm-12 col-md-12">
                  Sign up!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

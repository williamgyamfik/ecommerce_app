import React from "react";
import { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fullNameHandler = (event) => {
    setFullName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    setFullName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="text-center pt-5">
        <h1>
          Not yet a user? Sign up and get{" "}
          <span style={{ color: "green" }}> 10%</span> discount on your first
          order
        </h1>
      </div>

      <div className="container w-75 d-flex justify-content-center bg-light rounded-5 border border-3 shadow-lg px-5 mb-5">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center pb-5 col-md-6 pt-5 col-md-12 ">
            <form
              className="bg-light pt-3 pb-5 text-center "
              onSubmit={submitFormHandler}
            >
              <div className="row mb-3 justify-content-center ">
                <div className="col-sm-12 col-md-12 pb-3 pt-3 col-lg-12">
                  <input
                    type="text"
                    className="form-control form-control-lg  text-dark input-group input-group-sm "
                    id="formGroupExampleInput"
                    placeholder="Full Name"
                    min="2"
                    max="60"
                    value={fullName}
                    onChange={fullNameHandler}
                    required
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
                    onChange={emailHandler}
                    value={email}
                    required
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
                    onChange={passwordHandler}
                    value={password}
                    required
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

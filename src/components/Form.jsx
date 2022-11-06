const Form = () => {
  return (
    <div className=" pt-5 h-100 bg-light">
      <div className="text-center">
        <h1>
          Not yet a user? Sign up and get{" "}
          <span style={{ color: "red" }}> 10%</span> discount on your first
          order
        </h1>
      </div>
      <div className="container  d-flex justify-content-center pt-5">
        <div
          className=" w-50 text-center"
          style={{ backgroundColor: "#e67e22" }}
        >
          <form className="bg-secondary pt-5 ">
            <div className="pb-4 pt-2 d-flex justify-content-evenly">
              <label htmlFor="full-name" className="fw-bold">
                Full name*
              </label>
              <input
                type="text"
                id="full-name"
                className="rounded-3 shadow-lg"
                required
              />
            </div>

            <div className="pb-4 pt-2 d-flex justify-content-evenly">
              <label htmlFor="e-mail" className="fw-bold">
                E-mail*
              </label>
              <input
                type="email"
                id="e-mail"
                className="rounded-3 shadow-lg"
                required
              />
            </div>
            <div className="pb-4 pt-2 d-flex justify-content-evenly">
              <label htmlFor="phone-number" className="fw-bold">
                Phone number*
              </label>
              <input
                type="text"
                id="phone-number"
                className="rounded-3 shadow-lg"
                required
              />
            </div>

            <div className="pb-4 pt-2">
              <button className="fw-bold btn btn-info rounded-5">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

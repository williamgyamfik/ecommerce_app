const Form = () => {
  return (
    <section className="formSection">
      <div className="formSectionBox">
        <div className="formContainer">
          <div className="formdetails">
            <h2>
              Not yet a user? Signup and get 10% discount on your first order
            </h2>
            <form className="signup-form">
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
              <div className="btn ">
                <button>Signup</button>
              </div>
            </form>
          </div>
          <div className="formImage" role="img" label="salesWomen"></div>
        </div>
      </div>
    </section>
  );
};

export default Form;

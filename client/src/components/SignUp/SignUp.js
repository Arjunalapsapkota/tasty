import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import HeaderLogin from "../Global/HeaderLogin";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <Fragment>
        <HeaderLogin />
        <div className="login-form">
          <section className="signUp-with">
            <button className="facebook-button">SIGNUP WITH FACEBOOK</button>
            <button className="instagram-button">SIGNUP WITH INSTAGRAM</button>
            <button className="gmail-button">
              <Link to="/auth/google">SIGNUP WITH GMAIL</Link>
            </button>
          </section>
          <strong className="line-thru">or</strong>

          <form>
            <h2>
              <strong>Sign up with your email address</strong>
            </h2>

            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Confirm Email"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Password"
              />
            </div>
            <div className="form-row signUpButtonWrap">
              <div className="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>

              <button type="submit" className="btn btn-primary login-btn">
                SignUp
              </button>
            </div>
          </form>

          <h2 className="leadToSignUp">Already have an account?</h2>
          <Link to="/auth/login">
            <button className="btn btn-primary signUp-btn">LOG IN</button>
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default LogIn;

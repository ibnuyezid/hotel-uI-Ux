import "./sign";
import React from "react";
import "./signup.css";

import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const [loginc, setLoginc] = useState({
    username: undefined,

    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handlelogin = (e) => {
    setLoginc((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const [signin, setSignin] = useState(false);
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://hotel-api-production-630c.up.railway.app/api/auth/register",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      setSignin(true);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  const handleClickl = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://hotel-api-production-630c.up.railway.app/api/auth/login",
        loginc
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="cont">
      <section className="section">
        <article className="half">
          <h1>Addis Hotel Booking</h1>
          <div className="tabs">
            <span
              onClick={() => setSignin(false)}
              className={signin ? "tab signup" : "tab signup active"}
            >
              <a href="#signup">Sign up</a>
            </span>
            <span
              className={signin ? "tab signin active" : "tab signin"}
              onClick={() => setSignin(true)}
            >
              <a href="#signin">Sign in</a>
            </span>
          </div>
          <div className="content">
            {signin && (
              <div className="signin-cont cont">
                <input
                  type="email"
                  name="email"
                  id="username"
                  onChange={handlelogin}
                  className="inpt"
                  required="required"
                  placeholder="Your email"
                ></input>
                <label for="email">Your email</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handlelogin}
                  className="inpt"
                  required="required"
                  placeholder="Your password"
                ></input>
                <label for="password">Your password</label>
                {error && <span>{error.message}</span>}
                <input
                  type="checkbox"
                  id="remember"
                  className="checkbox"
                ></input>
                <label for="remember">Remember me</label>
                <div className="submit-wrap">
                  <input
                    type="submit"
                    value="Sign in"
                    onClick={handleClickl}
                    className="submit"
                  ></input>
                  <a href="#" className="more">
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}
            {!signin && (
              <div className="signin-cont cont">
                <input
                  type="name"
                  name="name"
                  id="username"
                  onChange={handleChange}
                  className="inpt"
                  required="required"
                  placeholder="Your name"
                ></input>
                <label for="name">Your name</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  className="inpt"
                  required="required"
                  placeholder="Your email"
                ></input>
                <label for="email">Your email</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  className="inpt"
                  required="required"
                  placeholder="Your password"
                ></input>
                {error && <span>{error.message}</span>}
                <label for="password">Your password</label>

                <div className="submit-wrap">
                  {" "}
                  <input
                    type="submit"
                    value="Sign up"
                    disabled={loading}
                    onClick={handleClick}
                    className="submit"
                  />
                  <a href="#" className="more">
                    Terms and conditions
                  </a>
                </div>
              </div>
            )}
          </div>
        </article>
        <div className="hbg">
          <img src="data:image/jpeg;base64,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"></img>
        </div>
      </section>
    </div>
  );
};

export default Signup;

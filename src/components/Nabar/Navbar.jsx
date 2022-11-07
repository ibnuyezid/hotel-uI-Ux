import "./navbar.css";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import videobg from "../../videos/Hotel.mp4";
const Navbar = ({ type }) => {
  const { user, dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const signup = () => {
    navigate("/register");
  };
  return (
    <>
      <video
        autoPlay
        loop
        muted
        id={type === "home" ? "background-video" : "background-video2"}
      >
        <source src={videobg} typeof="video/mp4" type="video/mp4" />
      </video>
      <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="logo">mamebooking</span>
          </Link>

          {user ? (
            <div className="pctn">
              <div className="circle">
                <img
                  className="circleimg"
                  src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
                ></img>
                <div>{user.username}</div>
              </div>
              <button onClick={handleLogout}>Log Out </button>
            </div>
          ) : (
            <div className="navItems">
              <button className="navButton" onClick={signup}>
                Register
              </button>
              <button className="navButton" onClick={login}>
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

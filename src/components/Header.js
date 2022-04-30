//Importing react library and hooks.

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//importing service to get informations from db.
import AuthService from "../services/auth.services";
import "./Header.css";

//This component includes data inside navigation bar and its functionalities.
function Header() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const LogOut = () => {
    AuthService.logout();
  };
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark mx-auto">
        <Link
          to={"/"}
          className="navbar navbar-expand-sm bg-dark navbar-dark"
          style={{
            paddingTop: "20px",
            paddingLeft: "20px",
            paddingRight: "400px",
          }}
        >
          <b>
            <span class="half-color" attribute="I">
              I
            </span>
            <span class="half-color" attribute="M">
              M
            </span>
            <span class="half-color" attribute="G">
              G
            </span>
            <span class="half-color" attribute="U">
              U
            </span>
            <span class="half-color" attribute="R">
              R
            </span>
          </b>
        </Link>
        <div className="navbar-nav mr-auto ">
          <li className="nav-item">
            <Link
              to={"/"}
              className="nav-link"
              style={{
                fontSize: "26px",
                paddingLeft: "550px",
                paddingRight: "30px",
              }}
            >
              Home
            </Link>
          </li>
          {currentUser && ( //Only if user present it will display.
            <li className="nav-item">
              <Link
                to={"/user"}
                className="nav-link"
                style={{
                  fontSize: "25px",
                  paddingRight: "30px",
                }}
              >
                User
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link
                to={"/profile"}
                className="nav-link"
                style={{ fontSize: "25px", paddingRight: "30px" }}
              >
                {currentUser.data.fullName}
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <a
                href="/login"
                className="nav-link "
                onClick={LogOut}
                style={{ fontSize: "25px", paddingRight: "10px" }}
              >
                Logout
              </a>
            </li>
          )}
        </div>
        {!currentUser && (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to={"/register"}
                className="nav-link"
                style={{ fontSize: "25px", paddingRight: "15px" }}
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/login"}
                className="nav-link"
                style={{ fontSize: "25px", paddingRight: "30px" }}
              >
                Sign In
              </Link>
            </li>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;

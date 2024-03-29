import React, { useState, useEffect } from "react";
import "./Url.css";
import burger from "../Assets/icon-hamburger.svg";
const Navurl = () => {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible((isVisible) => !isVisible);
  }
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isVisible]);

  let toggle = isVisible ? "active" : "";
  return (
    <div className="navwrapper">
      <header>
        <div className="logo">
          {" "}
          <h2>Shortly</h2>
        </div>

        <nav className={`navbars ${toggle}`}>
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>

          <div className="nav-btn">
            <button id="login-btn">Login</button>
            <button id="register-btn">Sign up</button>
          </div>
        </nav>
        <div className="buger">
          <img src={burger} alt="" onClick={handleClick} />
        </div>
      </header>
    </div>
  );
};

export default Navurl;

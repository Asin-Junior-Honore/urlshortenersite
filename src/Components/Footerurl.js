import React from "react";
import "./Url.css";

const Footerurl = () => {
  return (
    <div className="base-wrapper">
      <div className="link-boost">
        <h2>Boost your links today</h2>
        <button id="boost-btn"> Get started</button>
      </div>

      <footer>
        <h1>Shortly</h1>

        <div className="dark-links">
          <p>Features</p>
          <ul>
            <li>Link sharing</li>
            <li>Branded links</li>
            <li>Analytics</li>
          </ul>
        </div>


        <div className="dark-links">
          <p>Resources</p>
          <ul>
            <li>Blog</li>
            <li>Developer</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="dark-links">
          <p>Company</p>
          <ul>
            <li>About</li>
            <li>Our team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footerurl;

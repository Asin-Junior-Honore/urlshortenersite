import React from "react";
import "./Url.css";
import pic1 from "../Assets/pic1.svg";
const Introurl = () => {
  return (
    <div className="introwrapper">
      <section className="firstsection">
        <div className="write-ups">
          <h1>
            More than just <br />
            shorter links
          </h1>
          <p>
            Build your brand's recognition and get detailed <br />
            insights on how your are performing
          </p>

          <button id="start-btn">Get started</button>
        </div>

        <div className="big-picture">
          <img className="big-pic1" src={pic1} />
        </div>
      </section>
    </div>
  );
};

export default Introurl;

import React from "react";
import "./Url.css";
import brand from "../Assets/icon-brand-recognition.svg";
import records from "../Assets/icon-detailed-records.svg";
import fully from "../Assets/icon-fully-customizable.svg";
const Cardsurl = () => {
  return (
    <div className="cardswrapper">
      <div className="headlines">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are perfomming accross the web with <br />
          our adavanced statistics dashboard.
        </p>
      </div>

      <div className="cards-container">
        <div className="cards-display">
          <img className="box-icons" src={brand} />

          <h3>Brand Recognition</h3>

          <p>
            Boost your brand recognition with <br />
            each click .Generic links don't mean a <br />
            thing.Branded links help instil <br />
            confidence in your content.
          </p>
        </div>

        <div className="cards-display" id="box2">
          <img className="box-icons" src={records} />

          <h3>Detailed Records</h3>

          <p>
            Gain insights into who is <br />
            your links.Knowing when and
            <br />
            where people engage with your
            <br />
            content help inform better <br />
            decisions.
          </p>
        </div>

        <div className="cards-display" id="box3">
          <img className="box-icons" src={fully} />

          <h3>Fully Customizable</h3>

          <p>
            Improve-brand awareness and
            <br />
            content discoverability through
            <br />
            customizable links.superchanging
            <br />
            audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cardsurl;

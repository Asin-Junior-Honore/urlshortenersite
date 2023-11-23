import React from "react";
import Navurl from "./Navurl";
import Introurl from "./Introurl";
import Linkurl from "./Linkurl";
import Cardsurl from "./Cardsurl";
import Footerurl from "./Footerurl";

const Urlwrapper = () => {
  return (
    <div className="urlwrapper">
      <Navurl />
      <Introurl/>
      <Linkurl/>
      <Cardsurl/>
      <Footerurl/>
    </div>
  );
};

export default Urlwrapper;

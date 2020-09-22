import React from "react";
import "../../../sass/_specification.scss";
import ComputerSide from "../../../img/ComputerSide.png";

export default function Specification() {
  return (
    <div className="spec">
      <div className=" header-spec">
        <h1>Specyfikacja</h1>
      </div>
      <div className="photo">
        <img className="img" src={ComputerSide} alt="computer" />
      </div>
      <div className='list'>
          <ul>
              <li>Zasilanie</li>
              <li>USB 3.1 (Gen 2, zawsze aktywny)</li>
              <li>USB-C (USB + DisplayPort + zasilanie + Thunderbolt™ 3)</li>
              <li>Gniazdo słuchawek/mikrofonu</li>
              <li>USB 3.1 (Gen 2)</li>
          </ul>
      </div>
    </div>
  );
}

import React from "react";
import "../../../sass/utils/_all.scss";
import "../../../sass/_outstandingIntelligence.scss";
import Logo from "../../../img/lenovo-logo-01.svg";
import Computer from "../../../img/Bitmap.png";

export default function OutstandingIntelligence() {
  return (
    <div className="outstanding col-lg-12">
      <div className="logo space col-lg-1">
        <img src={Logo} alt="logo"/>
      </div>
      <div className="content col-lg-10">
        <div className="text col-lg-6">
          <div className="square">
            <div className="header product-desc">
              <h1 className="header-main">
                Yoga S740 (14) 
              </h1>
              <div className='undertitle'>
              <p >Wyróżniająca inteligencja</p>
              </div>
              
            </div>
            <div className="description">
              <p className="desc">
                {" "}
                Z komputerem Yoga S740 możesz pracować i korzystać z rozrywki w
                eleganckim stylu. Ten imponujący laptop w całkowicie metalowej
                obudowie działa z pełną mocą procesora Intel® Core™ 10.
                generacji i oferuje inteligentne, przydatne na co dzień funkcje.
                Lekki, ale wydajny, zapewnia wysokiej klasy funkcje rozrywkowe
                dzięki baterii wystarczającej na nawet 15 godzin, efektownemu
                wyświetlaczowi 4K VESA400 HDR oraz fantastycznemu dźwiękowi z
                technologią Dolby Atmos®.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="computer col-lg-6">
          <div className="square">
            <img className='img' src={Computer} alt="computer" />
          </div>
        </div>
      </div>
      <div className="space col-lg-1"></div>
    </div>
  );
}

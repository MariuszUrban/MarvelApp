import React from "react";
import "../../../sass/_textAndPhoto.scss";
import CompHome from "../../../img/CompHome.png";

export default function TextAndPhoto() {
  return (
    <div className="text-photo">
      <div className="photo">
        <img className="img" src={CompHome} alt="computer" />
      </div>
      <div className="text-desc">
        <div className="header-desc">
          <h1>Potrzebujesz czegoś? Wystarczy poprosić.</h1>
        </div>
        <div className="about">
          <p className='divide'>
            Yoga S740 ma mikrofony dalekiego zasięgu i inteligentne asystentki
            głosowe Alexę oraz Cortanę. Pomogą Ci złożyć zamówienie, ustawić
            przypomnienie czy odtworzyć muzykę — wystarczy poprosić z odległości
            do 4 metrów. To kolejny przykład przewagi, jaką daje Ci Yoga S740.
          </p>
          <p>
            Aby uzyskać więcej informacji o Cortanie, kliknij <a href='/'>tutaj</a>, a w celu
            uzyskania dodatkowych informacji o Alexie, kliknij <a href='/'>tutaj</a>.
          </p>
        </div>
      </div>
      <div className="text-desc">
        <div className="header-desc">
          <h1>Mobilne kino</h1>
        </div>
        <div className="about">
          <p>
            Wyświetlacz o przekątnej 14 cali w wąskiej jak brzytwa ramce
            prezentuje imponującą gamę kolorów i szczegółów. Ekran do poziomu 4K
            VESA400 HDR z jasnością 500 nitów i spektakularną technologią Dolby
            Vision™ oraz bogaty, wielowarstwowy dźwięk 3D z głośników z Dolby
            Atmos® oferują niezwykle realistyczną i wciągającą rozrywkę.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../../../sass/_textAndPhoto.scss";
import Computers from "../../../img/Computers.png";

export default function TextAndPhoto() {
  return (
    <div className="text-photo">
      <div className="photo">
        <img className="img" src={Computers} alt="computer" />
      </div>
      <div className="text-desc">
        <div className="header-desc">
          <h1>Elegancki styl i mobilność</h1>
        </div>
        <div className="about">
          <p className="divide">
            Yoga S740 ma obudowę z piaskowanego aluminium z wykończeniem
            wysokiej klasy i łączy w sobie wysoką wydajność z wygodną
            mobilnością. Ma jedynie 14,9 mm grubości, a waży zaledwie 1,4 kg i
            jest dostępny w kolorze żelaznoszarym lub z ciepłym, metalicznym
            mikowym wykończeniem.
          </p>
        </div>
      </div>
      <div className="text-desc">
        <div className="header-desc">
          <h1>Szybki i elastyczny</h1>
        </div>
        <div className="about">
          <p>
            Yoga S740 ma port Thunderbolt™ 3. Pod względem szybkości przewyższa
            on port USB 3.0 aż 8 razy, dlatego stanowi najszybszy i najbardziej
            uniwersalny sposób łączenia z monitorami, stacjami dokującymi i
            pamięcią masową. Co więcej, służy też jako źródło zasilania. Laptop
            ma też szybką łączność Wi-Fi 6, dlatego możesz teraz wyświetlać
            strumieniowe wideo i przeglądać strony internetowe bez porównania
            płynniej.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../../../sass/_textAndPhoto.scss";
import CompPerson2 from "../../../img/CompPerson2.png";

export default function TextAndPhoto() {
  return (
    <div className="text-photo">
      <div className="photo">
        <img className="img" src={CompPerson2} alt="computer" />
      </div>
      <div className="text-desc">
        <div className="header-desc">
          <h1>Intuicyjnie i interaktywnie</h1>
        </div>
        <div className="about">
          <p className="divide">
            Kamera na podczerwień ułatwia życie. Wystarczy, że się oddalisz, a
            oglądany film zostanie automatycznie wstrzymany. Zawartość
            wyświetlacza laptopa możesz przenieść na dodatkowy monitor ruchem
            głowy. A to jeszcze nie wszystko. Laptop Yoga S740 reaguje na Twój
            styl użytkowania, dlatego możesz skupić się na tym, co ważne.
          </p>
        </div>
      </div>
      <div className="text-desc">
        <div className="header-desc">
          <h1>Zna Cię lepiej</h1>
        </div>
        <div className="about">
          <p>
            Możesz na przykład logować się do niego samym uśmiechem. Dzięki
            kamerze na podczerwień i funkcji rozpoznawania twarzy Windows Hello
            możesz zacząć pracę trzy razy szybciej niż wpisując hasło. Jest też
            świetnie zabezpieczony.
          </p>
        </div>
      </div>
    </div>
  );
}

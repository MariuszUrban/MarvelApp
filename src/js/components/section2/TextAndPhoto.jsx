import React from "react";
import "../../../sass/_textAndPhoto.scss";
import Comp from "../../../img/Comp.png";

export default function TextAndPhoto() {
  return (
    <div className="text-photo">
      <div className="photo square">
        <img className="img" src={Comp} alt="computer" />
      </div>
      <div className="text-desc">
        <div className="header-desc">
          <h1>Pomysłowe technologie dla wszystkich</h1>
        </div>
        <div className="about">
          <p>
            Lenovo poszerza zakres możliwości w nowych laptopach Yoga
            opracowanych wspólnie z firmą Intel® i wyposażonych w funkcje
            sztucznej inteligencji. Teraz możesz mówić do urządzenia i nim
            sterować z drugiego końca pokoju. Oglądać wideo o podwyższonej
            jakości w programie Windows Media Player. Unikać zmęczenia oczu
            dzięki wyświetlaczowi, który automatycznie zmniejsza natężenie
            światła niebieskiego odpowiednio do pory dnia. A to jeszcze nie
            wszystko.
          </p>
        </div>
      </div>
      <div className="text-desc">
        <div className="header-desc">
          <h1>Sztuczna inteligencja i zdrowy rozsądek</h1>
        </div>
        <div className="about">
          <p>
            Zaawansowany procesor Intel® Core™ 10. generacji do urządzeń
            mobilnych i utraprzenośny laptop Yoga S740 dostosowują się do Twoich
            potrzeb i stylu użytkowania. Razem tworzą rozwiązanie bardziej
            intuicyjne i osobiste, którego sztuczna inteligencja dynamicznie
            reaguje na Twoje działania i optymalizuje żywotność baterii.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../../../sass/_textAndPhoto.scss";
import CompPerson from "../../../img/CompPerson.png";

export default function TextAndPhoto() {
  return (
    <div className="text-photo">
      <div className="photo">
        <img className="img" src={CompPerson} alt="computer" />
      </div>
      <div className="text-desc">
        <div className="header-desc">
          <h1>Nie ma gniazdka? Nie ma problemu.</h1>
        </div>
        <div className="about">
          <p className="divide">
            Niezależnie od tego, czy pracujesz w terenie, czy też urządzasz
            sobie serialową noc na sofie, bateria eleganckiego i smukłego Yoga
            S740 ma w sobie wystarczająco dużo energii — na nawet 15 godzin
            działania.
          </p>
        </div>
      </div>
      <div className="text-desc">
        <div className="header-desc">
          <h1>Nowy poziom wydajności</h1>
        </div>
        <div className="about">
          <p>
            Opcjonalna dedykowana karta graficzna NVIDIA® GeForce® MX250
            zwiększa dodatkowo możliwości laptopa w zastosowaniach służbowych i
            rozrywkowych. Korzystaj z nawet 3,5-krotnie większej wydajności w
            porównaniu ze zintegrowaną kartą graficzną w aplikacjach do edycji
            zdjęć i wideo, a także z szybszej i płynniejszej gry.
          </p>
        </div>
      </div>
    </div>
  );
}

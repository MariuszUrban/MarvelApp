import React from "react";
import "../../../sass/_specification.scss";
export default function Specification() {
  return (
    <div className="spec">
      <div className=" header-spec">
        <h1>Specyfikacja</h1>
      </div>
      <div className="table-spec">
        <table className="table">
          <thead></thead>
          <tbody>
            <tr className="thread">
              <td className="cell1">Procesor</td>
              <td className="cell2">Do Intel® Core™ i7 10. generacji </td>
            </tr>
            <tr className="thread">
              <td className="cell1">System operacyjny</td>
              <td className="cell2">Windows 10 Home </td>
            </tr>
            <tr className="thread">
              <td className="cell1">Wyświetlacz</td>
              <td className="cell2 ">
                <span>
                  {" "}
                  14” UHD (3840 x 2160) HDR IPS, 500 nitów z Dolby Vision‡{" "}
                </span>
                <span>
                  14” FHD (1920 x 1080) IPS, 400 nitów z Dolby Vision{" "}
                </span>
                <span>
                  Wąskie ramki ekranu: lewa/prawa: 3,4 mm, górna 6,7 mm, dolna:
                  11,8 mm
                </span>
                <span>
                  ‡ Spodziewana dostępność w modelu HDR z końcem 2019 r.
                </span>
              </td>
            </tr>
            <tr className="thread">
              <td className="cell1">Pamięć</td>
              <td className="cell2">Do 16 GB pamięci LPDDR4X</td>
            </tr>
            <tr className="thread">
              <td className="cell1">Bateria</td>
              <td className="cell2">
                <span>Do 15 godzin z wyświetlaczem FHD</span>{" "}
                <span>Do 10 godzin z wyświetlaczem UHD</span>
                <span className="small">
                  * Na podstawie testu MobileMark 2014. Czas działania baterii
                  znacznie się różni w zależności od ustawień, sposobu
                  wykorzystania i innych czynników.
                </span>
              </td>
            </tr>
            <tr className="thread">
              <td className="cell1">Pamięć masowa</td>
              <td className="cell2">Do 1 TB PCIe SSD</td>
            </tr>
            <tr className="thread">
              <td className="cell1">Grafika</td>
              <td className="cell2">
                Intel® HD Iris Opcjonalnie: NVIDIA® GeForce® MX250 2GB
              </td>
            </tr>
            <tr className="thread">
              <td className="cell1">Zabezpieczenia</td>
              <td className="cell2">
                Kamera na podczerwień do logowania się bez użycia rąk{" "}
              </td>
            </tr>
            <tr className="thread">
              <td className="cell1">Dźwięk</td>
              <td className="cell2">
                {" "}
                <span>Dolby Atmos® Speaker System </span>
                <span>Mikrofony dalekiego zasięgu</span>{" "}
              </td>
            </tr>
            <tr className="thread">
              <td className="cell1">Asystenci cyfrowi</td>
              <td className="cell2">
                <span>Cortana</span>
                <span>Alexa† </span>
                <span className="small">
                  † Spodziewana dostępność z końcem 2019 r. Tylko na wybranych
                  rynkach.
                </span>{" "}
              </td>
            </tr>
            <tr className="thread">
              <td className="cell1">Kamera</td>
              <td className="cell2">720p</td>
            </tr>
            <tr className="thread">
              <td className="cell1">Wymiary (szer. x wys. x głęb.)</td>
              <td className="cell2">
                322,3 mm x 212 x 14,9 mm krawędź przednia i 18,1 mm krawędź
                tylna
              </td>
            </tr>
            <tr className="thread">
              <td className="cell1">Waga</td>
              <td className="cell2">Od 1,4 kg</td>
            </tr>
            <tr className="thread">
              <td className="cell1">Opcje kolorystyczne</td>
              <td className="cell2">
                <span>Iron Grey (żelaznoszary)</span>
                <span>Mika</span>
              </td>
            </tr>
            <tr className="thread">
              <td className="cell1">Łączność</td>
              <td className="cell2">
                <span>Intel® Wireless-AC 2x2</span>
                <span>Wi-Fi 6 (dostępność z końcem 2019 r.)</span>{" "}
              </td>
            </tr>
            <tr className="thread">
              <td className="cell1">Klawiatura</td>
              <td className="cell2">Podświetlana klawiatura</td>
            </tr>
            <tr className="thread">
              <td className="cell1">Gniazda</td>
              <td className="cell2">
                <span>
                  USB-C (USB + DisplayPort + zasilanie + Thunderbolt™ 3)
                </span>
                <span>2 x USB 3.1 (2. generacji, jedno zawsze aktywne)</span>
                <span>Gniazdo słuchawek/mikrofonu</span>
                <span>Zasilanie</span>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <div className='technical-data'>
            <p> Dane techniczne mogą zależeć od regionu</p>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
import universal from "../../assets/images/joylashgan.png";

const Location = () => {
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">

          <div className="location_card1" data-aos="fade-right" data-aos-offset="-200">
            <h3 className="location_title">Joylashgan o`rni</h3>
            <p className="location_text">
              Navruz Avenue turar-joy majmuasi Jizzax shahrining rivojlanayotgan, strategik jihatdan muhim hududida joylashgan. Majmua shahar markaziga yaqin, asosiy transport yoʻllariga qulay kirish imkoniyati bilan ajralib turadi.              </p>
            <p className="location_text">
              Majmua shaharning shovqin-suronidan biroz yiroqda, osoyishta va ekologik jihatdan toza hududda joylashgan. Bu yerda yashovchilar tabiatning goʻzalligidan bahramand boʻlishi mumkin.            </p>
          </div>
          <div className="location_card_left" data-aos="fade-left" data-aos-offset="-200">
            <img src={universal} alt="" className="location_img" />
          </div>
          <div className="location_card2" data-aos="fade-right" data-aos-offset="-200">
            <p className="location_text2">
              Navruz Avenue manfaatli sarmoya kiritish imkoniyati sifatida ham muhim
              hisoblanadi. Jizzaxda bir necha yil ichida uy-joylar narxi
              oshishi kutilmoqda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

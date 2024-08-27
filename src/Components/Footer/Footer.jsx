/* eslint-disable react/no-unescaped-entities */
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiClock } from "react-icons/fi";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_box">
        <div className="footer_card2">
          <div className="map_box" >
            <iframe className="map_container" src="https://yandex.com/map-widget/v1/?um=constructor%3A40dcab2051e75669b535c6289acb8f7e513d5dba1dc1581daeb27820963256aa&amp;source=constructor" width="599" height="450" frameborder="0"></iframe>
          </div>
        </div>
        <div className="footer_card1">
          <div className="container">
            <h2 className="footer_title">Bog‘lanish</h2>
            <div className="footer_location">
              <div className="footer_location_title">
                <FiClock className="footer_location_icon" />

                Ish vaqti
              </div>
              <p className="footer_location_text">
                Har kun <br /> soat 09:00 dan 18:00 gacha
              </p>
            </div>
            <div className="footer_location">
              <div className="footer_location_title">
                <MdOutlineLocationOn className="footer_location_icon" />

                Sotuv bo‘limi
              </div>
              <p className="footer_location_text">
                Jizzax viloyati Jizzax shahri
                <br />
                Sharof Rashidov koʻchasi 115-uy
              </p>
            </div>
            <div className="footer_social">
              <div className="footer_phone">
                <p className="footer_phone_text">Telefon</p>
                <a href="tel:1361" className="footer_phone_number">
                  <BiSolidPhoneCall />
                  1361
                </a>
              </div>
              <div className="footer_icons">
                <a href="https://www.instagram.com/txtgroup.uzb" className="footer_icon">
                  <FaInstagram />
                </a>
                <a href="https://t.me/txtgroupuzb" className="footer_icon">
                  <FaTelegramPlane />
                </a>
                <a href="https://www.facebook.com/txtgroup.uzb" className="footer_icon">
                  <FaFacebookF />
                </a>
                <a href="#!" className="footer_icon">
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="footer_card3">
              <p className="footer_card3_text">
                © 2024 TXT Group. Barcha huquqlar himoyalangan. Saytda nashr etilgan har qanday material kompaniya intellektual mulki hisoblanib, foydalanuvchilar bundan xabardor boʻlishi kerak. Ushbu saytdagi rasm va renderlar majmua loyihasi, xonadonlar joylashuvi va hovli maydoni bilan yaqindan tanishish maqsadida yuklangan. Tayyor binolar dizayni va koʻrinishi saytdagi tasvirlardan farq qilishi mumkin. Shu sababli bu maʼlumotlar ommaviy oferta hisoblanmaydi.
              </p>

            </div>
          </div>

        </div>

        {/* <div className="footer_card3">
            <p className="footer_card3_text">
              Loyiha arxitekturasi, obodonlashtirish, fasadlar, interyer
              tasvirlari, qo'llaniladigan materiallar, ularni raqamlashtirish
              tartibi, majmua infratuzilmasi shartli bo'lib, loyihalashtirish,
              qurilish ishlari va foydalanishda.
            </p>
            <p className="footer_card3_text">
              TM tog'risidagi ma'lumotlar ko'rsatib o' tilgan mahsulotga bolgan
              talabni aniqlash magsadida chop etilgan. Ushbu buklet ommaviy
              oferta sanalmaydi.
            </p>
          </div> */}
      </div>
    </footer>
  );
};

export default Footer;

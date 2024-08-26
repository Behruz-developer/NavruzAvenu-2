import { useState } from "react";
import houses1 from '../../assets/images/1-xonali1.jpg'
import houses2 from '../../assets/images/1-xonali2.jpg'
import houses3 from '../../assets/images/1-xonali3.jpg'
import houses4 from '../../assets/images/2-xonali1.jpg'
import houses5 from '../../assets/images/2-xonali2.jpg'
import houses6 from '../../assets/images/2-xonali3.jpg'
import houses7 from '../../assets/images/3-xonali1.jpg'
import houses8 from '../../assets/images/3-xonali2.jpg'
import houses9 from '../../assets/images/4-xonali1.jpg'


const Houses_plan = () => {
  const [activeNumber, setActiveNumber] = useState("Hammasi");

  const handleNumberClick = (number) => {
    setActiveNumber(number);
  };

  return (
    <div className="houses">
      <div className="container">
        <div className="houses_box">
          <div className="houses_card_top">
            <h2 className="houses_title">Xonadonlarning o‘ylangan rejalari</h2>
            <div className="houses_card_number">
              {["Hammasi", "1-xonali", "2-xonali", "3-xonali", "4-xonali",].map(
                (number) => (
                  <p
                    key={number}
                    className={`houses_number ${activeNumber === number ? "active" : ""
                      }`}
                    onClick={() => handleNumberClick(number)}
                  >
                    {number}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Showing corresponding content based on activeNumber */}
          {activeNumber === "Hammasi" && (
            <div className="houses_card_bottom">
              <img src={houses3} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses7} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses9} alt="" className="houses_img" />
            </div>
          )}

          {activeNumber === "1-xonali" && (
            <div className="houses_card_bottom1">
              <img src={houses1} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses2} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses3} alt="" className="houses_img" />
            </div>
          )}
          {activeNumber === "2-xonali" && (
            <div className="houses_card_bottom2">
              <img src={houses4} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses5} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses6} alt="" className="houses_img" />
            </div>
          )}
          {activeNumber === "3-xonali" && (
            <div className="houses_card_bottom2">
              <img src={houses7} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses8} alt="" className="houses_img" />

            </div>
          )}
          {activeNumber === "4-xonali" && (
            <div className="houses_card_bottom2">
              <img src={houses9} alt="" className="houses_img" />

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Houses_plan;



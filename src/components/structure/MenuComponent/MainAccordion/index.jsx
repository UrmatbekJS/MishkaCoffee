import { useState } from "react";
import PropTypes from "prop-types";
import "./MainAccordion.scss";

const MainAccordion = ({ sections }) => {
  const [openedAccordions, setOpenedAccordions] = useState([]);

  const toggleAccordion = (sectionDescription) => {
    if (openedAccordions.includes(sectionDescription)) {
      // Если раздел уже открыт, закрыть его
      setOpenedAccordions(
        openedAccordions.filter((section) => section !== sectionDescription)
      );
    } else {
      // Иначе открыть его, добавив в массив открытых разделов
      setOpenedAccordions([...openedAccordions, sectionDescription]);
    }
  };

  return (
    <div className="MainAccordion">
      {sections.map((section) => (
        <div className="MenuAccordion" key={section.sectionDescription}>
          <div
            className={`MenuAccordion__Title ${
              openedAccordions.includes(section.sectionDescription)
                ? "MenuTitle__Opened"
                : "MenuTitle__Closed"
            }`}
            onClick={() => toggleAccordion(section.sectionDescription)}
          >
            <p className="SectionDescription">{section.sectionDescription}</p>
            <p
              className={`MenuAccordion__Title_Plus ${
                openedAccordions.includes(section.sectionDescription)
                  ? "MenuPlus__Opened"
                  : "MenuPlus__Closed"
              }`}
            >
              +
            </p>
          </div>
          <div
            className={`MenuAccordion__Answer ${
              openedAccordions.includes(section.sectionDescription)
                ? "MenuAnswer__Opened"
                : "MenuAnswer__Closed"
            }`}
          >
            {section.data.map((item) => (
              <div className="MenuAccordion__List" key={item.id}>
                <div className="MenuAccordion__List_Left">{item.name}</div>
                <div className="MenuAccordion__List_Right">
                  {item.price} сом
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

MainAccordion.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      sectionDescription: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default MainAccordion;

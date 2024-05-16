import PropTypes from "prop-types";
import { useState } from "react";
import "./MilkCocktailsAccordion.scss";

const MilkCocktailsAccordion = ({
  data,
  setOpenedAccordion,
  openedAccordion,
}) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
    if (data.name === openedAccordion) {
      setOpenedAccordion("");
    } else {
      setOpenedAccordion(data.name);
    }
  };

  return (
    <div className="MenuAccordion">
      <div
        className={`MenuAccordion__Title ${
          isContentVisible ? "MenuTitle__Opened" : "MenuTitle__Closed"
        }`}
        onClick={toggleContent}
      >
        <p className="SectionDescription">Молочные Коктейли</p>
        <p
          className={`MenuAccordion__Title_Plus ${
            openedAccordion === data.name
              ? "MenuPlus__Opened"
              : "MenuPlus__Closed"
          }`}
        >
          +
        </p>
      </div>
      <div
        className={`MenuAccordion__Answer ${
          openedAccordion === data.name
            ? "MenuAnswer__Opened"
            : "MenuAnswer__Closed"
        }`}
      >
        {data.map((item) => (
          <div className="MenuAccordion__List" key={item.id}>
            <div className="MenuAccordion__List_Left">{item.name}</div>
            <div className="MenuAccordion__List_Right">{item.price} сом</div>
          </div>
        ))}
      </div>
    </div>
  );
};

MilkCocktailsAccordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  setOpenedAccordion: PropTypes.func.isRequired,
  openedAccordion: PropTypes.string.isRequired,
};

export default MilkCocktailsAccordion;

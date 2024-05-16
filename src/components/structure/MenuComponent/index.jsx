import { useState } from "react";
import "./MenuComponent.scss";
import { classicTea } from "../../data/classicTea";
import ClassicTeaAccordion from "./Accordions/ClassicTeaAccordion";
import FirmTeaAccordion from "./Accordions/FirmTeaAccordion";
import { firmTea } from "../../data/firmTea";
import CoffeeDrinksAccordion from "./Accordions/CoffeeDrinksAccordion";
import { coffeeDrinks } from "../../data/coffeeDrinks";
import { noAlcoholicCocktails } from "../../data/noAlcoholicCocktails";
import SmoothieAccordion from "./Accordions/SmoothieAccordion";
import { smoothie } from "../../data/smoothie";
import FreshAccordion from "./Accordions/FreshAccordion";
import { fresh } from "../../data/fresh";
import NoAlcoholicCocktailsAccordion from "./Accordions/NoAlcoholicCocktails";
import BubbleTeaAccordion from "./Accordions/BubbleTeaAccordion";
import { bubbleTea } from "../../data/bubbleTea";
import MilkCocktailsAccordion from "./Accordions/MilkCocktailsaccordion";
import { milkCocktails } from "../../data/milkCocktails";
import HotDrinksAccordion from "./Accordions/HotDrinksAccordion";
import { hotDrinks } from "../../data/hotDrinks";
import ColdDrinksAccordion from "./Accordions/ColdDrinks";
import { coldDrinks } from "../../data/coldDrinks";
import DessertsAccordion from "./Accordions/DessertsAccordion";
import { desserts } from "../../data/desserts";
import ChocolateFountainAccordion from "./Accordions/ChocolateFountainAccordion";
import { chocolateFountain } from "../../data/chocolateFountain";

const MenuComponent = () => {
  const [openedAccordion, setOpenedAccordion] = useState(false);

  return (
    <div className="MenuComponent" id="menu">
      <h1>Меню</h1>
      <div className="MenuComponent__List">
        <ClassicTeaAccordion
          data={classicTea}
          setOpenedAccordion={setOpenedAccordion}
          openedAccordion={openedAccordion}
        />

        <FirmTeaAccordion
          data={firmTea}
          setOpenedAccordion={setOpenedAccordion}
          openedAccordion={openedAccordion}
        />
        <CoffeeDrinksAccordion
          data={coffeeDrinks}
          setOpenedAccordion={setOpenedAccordion}
          openedAccordion={openedAccordion}
        />
        <NoAlcoholicCocktailsAccordion
          data={noAlcoholicCocktails}
          setOpenedAccordion={setOpenedAccordion}
          openedAccordion={openedAccordion}
        />
        <SmoothieAccordion
          data={smoothie}
          setOpenedAccordion={setOpenedAccordion}
          openedAccordion={openedAccordion}
        />
        <FreshAccordion
          data={fresh}
          setOpenedAccordion={setOpenedAccordion}
          openedAccordion={openedAccordion}
        />
        <BubbleTeaAccordion
          data={bubbleTea}
          setOpenedAccordion={setOpenedAccordion}
          openedAccordion={openedAccordion}
        />
        <MilkCocktailsAccordion
          data={milkCocktails}
          setOpenedAccordion={setOpenedAccordion}
          openedAccordion={openedAccordion}
        />
        <HotDrinksAccordion
          data={hotDrinks}
          setOpenedAccordion={setOpenedAccordion}
          openedAccordion={openedAccordion}
        />
        <ColdDrinksAccordion
          data={coldDrinks}
          setOpenedAccordion={setOpenedAccordion}
          openedAccordion={openedAccordion}
        />
        <DessertsAccordion
          data={desserts}
          setOpenedAccordion={setOpenedAccordion}
          openedAccordion={openedAccordion}
        />
        <ChocolateFountainAccordion
          data={chocolateFountain}
          setOpenedAccordion={setOpenedAccordion}
          openedAccordion={openedAccordion}
        />
      </div>
    </div>
  );
};

export default MenuComponent;

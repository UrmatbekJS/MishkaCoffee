import "./MenuComponent.scss";
import { classicTea } from "../../data/classicTea";
import { firmTea } from "../../data/firmTea";
import { coffeeDrinks } from "../../data/coffeeDrinks";
import { noAlcoholicCocktails } from "../../data/noAlcoholicCocktails";
import { smoothie } from "../../data/smoothie";
import { fresh } from "../../data/fresh";
import { milkCocktails } from "../../data/milkCocktails";
import { hotDrinks } from "../../data/hotDrinks";
import { coldDrinks } from "../../data/coldDrinks";
import { desserts } from "../../data/desserts";
import { chocolateFountain } from "../../data/chocolateFountain";
import MainAccordion from "./MainAccordion";

const MenuComponent = () => {
  const sections = [
    { sectionDescription: "Классические чаи", data: classicTea },
    { sectionDescription: "Фирменные Чаи", data: firmTea },
    { sectionDescription: "Кофейные напитки", data: coffeeDrinks },
    {
      sectionDescription: "Безалкогольные коктейли",
      data: noAlcoholicCocktails,
    },
    { sectionDescription: "Смузи", data: smoothie },
    { sectionDescription: "Фреш", data: fresh },
    { sectionDescription: "Молочные коктейли", data: milkCocktails },
    { sectionDescription: "Согревающие напитки", data: hotDrinks },
    { sectionDescription: "Холодные напитки", data: coldDrinks },
    { sectionDescription: "Десерты", data: desserts },
    { sectionDescription: "Шоколадный фонтан", data: chocolateFountain },
  ];

  // const accordionStyles = {
  //   display: "flex",
  //   flexWrap: "wrap",
  // };

  return (
    <div className="MenuComponent" id="menu">
      <h1>Меню</h1>
      <MainAccordion sections={sections} />
    </div>
  );
};

export default MenuComponent;

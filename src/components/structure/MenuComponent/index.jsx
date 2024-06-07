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
import { bubbleTea } from "../../data/bubbleTea";
import { milkBubbleTea } from "../../data/milkBubbleTea";
import { fruitTea } from "../../data/fruitTea";

const MenuComponent = () => {
  const sections = [
    { sectionDescription: "Классические чаи", data: classicTea },
    { sectionDescription: "Фирменные чаи", data: firmTea },
    { sectionDescription: "Фруктовые чаи", data: fruitTea },
    { sectionDescription: "Кофейные напитки", data: coffeeDrinks },
    {
      sectionDescription: "Безалкогольные коктейли",
      data: noAlcoholicCocktails,
    },
    { sectionDescription: "Смузи", data: smoothie },
    { sectionDescription: "Фреш", data: fresh },
    { sectionDescription: "Молочные коктейли", data: milkCocktails },
    { sectionDescription: "Согревающие напитки", data: hotDrinks },
    { sectionDescription: "Прохладные напитки", data: coldDrinks },
    { sectionDescription: "Десерты", data: desserts },
    { sectionDescription: "Бабл-Ти", data: bubbleTea },
    { sectionDescription: "Молочные Бабл-Ти", data: milkBubbleTea },
    { sectionDescription: "Шоколадный фонтан", data: chocolateFountain },
  ];

  return (
    <div className="MenuComponent">
      <h2>Mishka Coffee - Меню</h2>
      <MainAccordion sections={sections} />
    </div>
  );
};

export default MenuComponent;

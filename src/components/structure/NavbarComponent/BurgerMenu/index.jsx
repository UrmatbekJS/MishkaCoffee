import { useState } from "react";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false); // Закрываем бургер меню при клике на ссылку
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="NavbarComponent__Left">
      {/* Бургер-меню */}
      <div className="NavbarComponent__BurgerMenu" onClick={toggleMenu}>
        <div className={`BurgerMenuLine ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`BurgerMenuLine ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`BurgerMenuLine ${isMenuOpen ? "open" : ""}`}></div>
      </div>

      {/* Список ссылок */}
      <div className={`NavbarComponent__Links ${isMenuOpen ? "open" : ""}`}>
        <a href="#header" onClick={(e) => handleClick(e, "header")}>
          Главная
        </a>
        <a href="#menu" onClick={(e) => handleClick(e, "menu")}>
          Меню
        </a>
        <a href="#footer" onClick={(e) => handleClick(e, "footer")}>
          Контакты
        </a>
      </div>
    </div>
  );
};

export default BurgerMenu;

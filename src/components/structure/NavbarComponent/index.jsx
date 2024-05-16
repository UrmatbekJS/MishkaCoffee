import { useState, useEffect } from "react";
import "./NavbarComponent.scss";
import VideoComponent from "./VideoComponent";

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const phoneNumber = "+996755557312"; // Замените на ваш номер телефона

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className={`NavbarComponent ${scrolled ? "scrolled" : ""}`}>
        <div className="NavbarComponent__Left">
          <img src="/img/MishkaCoffee-Logo.png" alt="Logo" />
        </div>
        <div className="NavbarComponent__Center">
          <a href="#header" onClick={(e) => handleClick(e, "header")}>
            <p>Главная</p>
          </a>
          <a href="#menu" onClick={(e) => handleClick(e, "menu")}>
            <p>Меню</p>
          </a>
          <a href="#footer" onClick={(e) => handleClick(e, "footer")}>
            <p>Контакты</p>
          </a>
        </div>
        <div className="NavbarComponent__Right" onClick={handleCall}>
          Позвонить
        </div>
      </div>
      <VideoComponent />
    </>
  );
};

export default NavbarComponent;

import { useState, useEffect } from "react";
import "./NavbarComponent.scss";
import VideoComponent from "./VideoComponent";
import BurgerMenu from "./BurgerMenu";

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

  const phoneNumber = "+996755557312";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <div className={`NavbarComponent ${scrolled ? "scrolled" : ""}`}>
        <BurgerMenu />
        <div className="NavbarComponent__Center">
          <a href="#header" onClick={(e) => handleClick(e, "header")}>
            <img src="/img/MishkaCoffee-Logo.png" alt="Logo" />
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

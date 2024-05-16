import { useEffect, useRef, useState } from "react";
import "./HeaderComponent.scss"; // Подключите ваши стили

const HeaderComponent = () => {
  const drinksRef = useRef(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const elementOffsetTop = drinksRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const isElementInView = currentScrollY > elementOffsetTop - windowHeight;

      setIsScrollingDown((prevScrollY) => currentScrollY > prevScrollY);

      if (isElementInView && isScrollingDown) {
        drinksRef.current.classList.add("fadeIn");
        drinksRef.current
          .querySelector(".HeaderComponent__Drinks_Left")
          .classList.add("slideInLeft");
        drinksRef.current
          .querySelector(".HeaderComponent__Drinks_Right")
          .classList.add("slideInRight");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollingDown]);

  return (
    <div className="HeaderComponent" id="header">
      <div className="HeaderComponent__Img">
        <img src="/img/MishkaCoffee-Logo.png" alt="Мишка Кофе" />
      </div>
      <div className="HeaderComponent__Name">
        <h1>Mishka Coffee</h1>
      </div>
      <div className="HeaderComponent__About">
        <p>
          Добро пожаловать в нашу уютную кофейню! <br />
          Здесь каждый гость находит свой уголок тепла и вкуса. Мы гордимся
          предлагаемым ассортиментом кофейных напитков, созданных с любовью и
          заботой о каждом клиенте.
        </p>
        <p>
          Погрузитесь в атмосферу ароматного кофе и приятных разговоров в
          компании друзей или насладитесь моментом уединения с чашечкой вашего
          любимого напитка.
        </p>
      </div>

      <div className="HeaderComponent__Drinks" ref={drinksRef}>
        <div className="HeaderComponent__Drinks_Left">
          <img src="/img/MishkaCoffee-drinks.png" alt="Drinks" />
        </div>
        <div className="HeaderComponent__Drinks_Right">
          <p>
            Наша кофейня - это место, где рождаются новые идеи, где друзья
            встречаются, чтобы поделиться впечатлениями, и где каждый гость -
            это часть нашей большой кофейной семьи.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

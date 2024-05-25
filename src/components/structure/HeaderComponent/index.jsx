import { useEffect, useRef } from "react";
import "./HeaderComponent.scss";

const HeaderComponent = () => {
  const aboutRef = useRef(null);
  const drinksRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeIn");
        } else {
          entry.target.classList.remove("fadeIn");
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const elementOffsetTop = drinksRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const isElementInView = currentScrollY > elementOffsetTop - windowHeight;

      if (isElementInView) {
        drinksRef.current.classList.add("fadeIn");
        drinksRef.current
          .querySelector(".HeaderComponent__Drinks_Left")
          .classList.add("slideInLeft");
        drinksRef.current
          .querySelector(".HeaderComponent__Drinks_Right")
          .classList.add("slideInRight");
      } else {
        drinksRef.current.classList.remove("fadeIn");
        drinksRef.current
          .querySelector(".HeaderComponent__Drinks_Left")
          .classList.remove("slideInLeft");
        drinksRef.current
          .querySelector(".HeaderComponent__Drinks_Right")
          .classList.remove("slideInRight");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="HeaderComponent">
      <div className="HeaderComponent__Img">
        <img src="/img/MishkaCoffee-Logo.png" alt="Мишка Кофе" />
      </div>
      <div className="HeaderComponent__Name">
        <h1>Mishka Coffee</h1>
      </div>
      <div className="HeaderComponent__About" ref={aboutRef}>
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

import FooterComponent from "./components/structure/FooterComponent";
import HeaderComponent from "./components/structure/HeaderComponent";
import MenuComponent from "./components/structure/MenuComponent";
import NavbarComponent from "./components/structure/NavbarComponent";

const App = () => {
  return (
    <>
      <NavbarComponent />
      <HeaderComponent />
      <MenuComponent />
      <FooterComponent />
    </>
  );
};

export default App;

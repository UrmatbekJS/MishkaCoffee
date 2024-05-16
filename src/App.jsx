import HeaderComponent from "./components/structure/HeaderComponent";
import MenuComponent from "./components/structure/MenuComponent";
import "./App.scss";
import Layout from "./components/layout";

const App = () => {
  return (
    <Layout>
      <HeaderComponent />
      <MenuComponent />
    </Layout>
  );
};

export default App;

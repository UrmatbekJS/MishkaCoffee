import Layout from "./components/layout";
import HeaderComponent from "./components/structure/HeaderComponent";
import MenuComponent from "./components/structure/MenuComponent";

const App = () => {
  return (
    <Layout>
      <HeaderComponent />
      <MenuComponent />
    </Layout>
  );
};

export default App;

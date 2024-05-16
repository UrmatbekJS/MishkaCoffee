import "./FooterComponent.scss";

const FooterComponent = () => {
  return (
    <div className="FooterComponent" id="footer">
      <h1>Наше расположение</h1>
      <h2>Город Бишкек, ул. Ибраимова 115</h2>
      <div>
        <a href="https://2gis.kg/bishkek/geo/70000001088229471 ">Нажми сюда</a>
        <span>Чтобы найти нас в 2GIS</span>
      </div>
      <h1>+996 755 557 312</h1>
    </div>
  );
};

export default FooterComponent;

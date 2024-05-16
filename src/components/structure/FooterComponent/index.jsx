import "./FooterComponent.scss";

const FooterComponent = () => {
  return (
    <div className="FooterComponent" id="footer">
      <h2>Наше местоположение</h2>
      <h3>Город Бишкек, ул. Ибраимова 115</h3>
      <div>
        <a href="https://2gis.kg/bishkek/geo/70000001088229471 ">Нажми сюда</a>
        <span>Чтобы найти нас в 2GIS</span>
      </div>
      <h2>+996 755 557 312</h2>
    </div>
  );
};

export default FooterComponent;

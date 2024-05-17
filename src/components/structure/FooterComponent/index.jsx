import "./FooterComponent.scss";

const FooterComponent = () => {
  const phoneNumber = "+996755557312"; // Замените на ваш номер телефона

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="FooterComponent" id="footer">
      <h2>Наше местоположение</h2>
      <h3>Город Бишкек, ул. Ибраимова 115</h3>
      <p>Вы можете найти нас в</p>

      <div className="FooterComponent__Img">
        <a
          href="https://2gis.kg/bishkek/geo/70000001088229471"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/2gis-icon.png" alt="2GIS" id="twogis" />
        </a>
        <a
          href="https://www.instagram.com/mishka.coffee.kg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/instagram-icon.png" alt="Instagram" id="instagram" />
        </a>
        <a
          href="https://www.tiktok.com/@mishka.coffee.kg?_t=8mQSWVeT50y&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/tiktok-icon.png" alt="TikTok" id="tiktok" />
        </a>
        <a
          href="https://Wa.me/996705557312"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/whatsapp-icon.png" alt="Whatsapp" id="whatsapp" />
        </a>
      </div>
      <h2 className="FooterComponent__Call" onClick={handleCall}>
        +996 755 557 312
      </h2>
    </div>
  );
};

export default FooterComponent;

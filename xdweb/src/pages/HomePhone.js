import "./HomePhone.css";
const HomePhone = () => {
  return (
    <div className="home-phone">
      <img
        className="viber-image-2023-05-03-12-28-3-icon"
        alt=""
        src="/viber-image-20230503-122830477-1@2x.png"
      />
      <img className="menu-icon" alt="" src="/menu.svg" />
      <div className="authenticate-showcase-and">
        Authenticate, Showcase, and Trade
      </div>
      <div className="categories">{`<Categories>`}</div>
      <div className="the-premier-collectible">
        The premier collectible haven.
      </div>
      <div className="home-phone-child" />
    </div>
  );
};

export default HomePhone;

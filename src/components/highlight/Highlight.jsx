import IphoneIcon from "../../assets/highlight/Iphone.png";
import "./Highlight.css";

const Highlight = () => {
  return (
    <section className="highlight">
      <div className="highlight-content">
        <h1 className="highlight-title">
          <span>New</span> Arrivals
        </h1>

        <p className="highlight-subtitle">New Collection 2023</p>

        <h3 className="highlight-product">
          Apple Watch Series 8 <img src={IphoneIcon} alt="Apple Watch" />
        </h3>

        <p className="highlight-desc">
          Fine workmanship is waterproof and dustproof.<br />
          The watch is improved with many features to<br />
          ensure accuracy when monitoring user's health.
        </p>

        <div className="highlight-price">
          <div className="price">
            <span className="old">$350.00</span>
            <strong>$259.00</strong>
          </div>
        </div>

        <button className="highlight-btn">Shop Now</button>
      </div>
    </section>
  );
};

export default Highlight;

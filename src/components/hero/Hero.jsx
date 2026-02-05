import IphoneIcon from "../../assets/hero/Iphone.png";
import ButtonIcon from "../../assets/hero/button.png";
import BatteryIcon from "../../assets/hero/Battery.png";
import BluetoothIcon from "../../assets/hero/Bluetooth.png";
import ChipIcon from "../../assets/hero/Chip.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-brand"><img src={IphoneIcon} alt="Iphone Icon" /></div>
        <span className="hero-category">Bluetooth headphone</span>

        <h1>
          AirPods Pro <br /> 2023
        </h1>

        <p className="hero-desc">
          Delivers vivid sound quality with outstanding 3-D sound reproduction
        </p>
        <div className="hero-features">
          <div> <img src={BatteryIcon} alt="Battery Icon" /> Battery capacity 6 hours · charging box 30 hours</div>
          <div> <img src={BluetoothIcon} alt="Bluetooth Icon" /> Bluetooth 5.3</div>
          <div><img src={ChipIcon} alt="Chip Icon" /> Chip H2</div>
        </div>
        <div className="hero-actions">
          <button className="btn primary">Shop Now</button>
          <button className="btn secondary">▶ Video</button>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={ButtonIcon} alt='Button Icon' className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;

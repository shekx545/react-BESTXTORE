import keyboardIcon from "../../assets/cover/keyboard.png";
import RightIcon from "../../assets/Right.png";
import LeftIcon from "../../assets/Left.png";
import "./Cover.css";

const Cover = () => {
  return (
    <section className="flash-sale">
      <div className="flash-header">
        <h2>Flash Sale</h2>
        <div className="arrows">
          <span><img src={RightIcon} alt="Right Arrow" /></span>
          <span><img src={LeftIcon} alt="Left Arrow" /></span>
        </div>
      </div>

      <div className="flash-cards">
        <div className="flash-card">
          <div className="card-image">
            <span className="badge new">New</span>
            <span className="badge sale">10%</span>
          </div>

          <div className="card-content">
            <h3>MX MASTER 3S Performance Wireless Mouse</h3>

            <div className="price">
              <span className="current">$29.99</span>
              <span className="old">$49.99</span>
            </div>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>12 Reviews</span>
            </div>

            <div className="stock">
              <span>Sold: 16</span>
              <span>Available: 64</span>
            </div>

            <div className="timer">
              <div><b>02</b><span>Days</span></div>
              <div><b>23</b><span>Hour</span></div>
              <div><b>14</b><span>Mins</span></div>
              <div><b>56</b><span>Secs</span></div>
            </div>

            <button className="add-cart">🛒 Add To Cart</button>
          </div>
        </div>
        <div className="flash-card">
          <div className="card-image">
            <span className="badge sale">10%</span>
            <img src={keyboardIcon} alt="Keyboard" />
          </div>

          <div className="card-content">
            <h3>Sony DualSense Edge Wireless Controller</h3>

            <div className="price">
              <span className="current">$29.99</span>
              <span className="old">$49.99</span>
            </div>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>12 Reviews</span>
            </div>

            <div className="stock">
              <span>Sold: 16</span>
              <span>Available: 64</span>
            </div>

            <div className="timer">
              <div><b>02</b><span>Days</span></div>
              <div><b>23</b><span>Hour</span></div>
              <div><b>14</b><span>Mins</span></div>
              <div><b>56</b><span>Secs</span></div>
            </div>

            <button className="add-cart">🛒 Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;

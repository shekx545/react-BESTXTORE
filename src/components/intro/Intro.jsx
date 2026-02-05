import RightIcon from "../../assets/Right.png";
import LeftIcon from "../../assets/Left.png";
import "./Intro.css";

const Intro = ({ data }) => {
  return (
    <section className="intro">
      <div className="intro-header">
        <h2>New Arrivals</h2>
        <div className="intro-arrows">
          <button><img src={RightIcon} alt="Right Arrow" /></button>
          <button><img src={LeftIcon} alt="Left Arrow" /></button>
        </div>
      </div>
      <div className="intro-grid">
        {data.map((item) => (
          <div className="intro-card" key={item.id}>
            <div className="intro-image">
              <span className="badge">{item.badge}</span>
              {item.discount && (
                <span className="discount">{item.discount}</span>
              )}
            </div>

            <div className="intro-info">
              <div className="price">
                <strong>${item.price}.00</strong>
                {item.oldPrice && (
                  <span>${item.oldPrice}.00</span>
                )}
              </div>

              <p className="title">{item.title}</p>

              <div className="reviews">
                ⭐⭐⭐⭐⭐ <span>{item.reviews} Reviews</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Intro;

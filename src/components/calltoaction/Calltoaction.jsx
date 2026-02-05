import "./Calltoaction.css";
import RightIcon from "../../assets/Right.png";
import LeftIcon from "../../assets/Left.png";

const Calltoaction = ({ categoriesData }) => {
  return (
    <section className="cta">
      <div className="cta-header">
        <h2 className="cta-heading">Categories</h2>

        <div className="cta-arrows">
          <button>
            <img src={RightIcon} alt="Right" />
          </button>
          <button>
            <img src={LeftIcon} alt="Left" />
          </button>
        </div>
      </div>
      <div className="cta-grid">
        {categoriesData.map((item) => (
          <div className="cta-card" key={item.id}>
            <h3 className="cta-title">{item.title}</h3>

            <ul className="cta-list">
              {item.items.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>

            <a href="#" className="cta-link">
              {item.link} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Calltoaction;

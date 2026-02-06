import { useState } from "react";
import { Link } from "react-router-dom";
import MapmarketIcon from "../../assets/banner/Mapmarket.png";
import "./Banner.css";

const Banner = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <header className="Banner">
      <div className="left">
        <select className="category-select">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home</option>
        </select>
      </div>

      <div className="burger" onClick={toggleSidebar}>
        &#9776;
      </div>

      <nav className={`nav ${sidebarOpen ? "open" : ""}`}>
        <Link to="/">Product</Link>
        <Link to="/flash-sale">Flash Sale</Link>
        <Link to="/best-sellers">Best Sellers</Link>
        <Link to="/offers">Specials Offers</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <div className="right">
        <span className="store">
          <img src={MapmarketIcon} alt="Mapmarket Icon" />
          <span>Stores Near You</span>
          <br />
          <small>20 Stores Nationwide</small>
        </span>
      </div>
    </header>
  );
};

export default Banner;

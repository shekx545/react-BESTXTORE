import "./Header.css";
import logoIcon from "../../assets/header/logo.png";
import searchIcon from "../../assets/header/search.png";
import heartIcon from "../../assets/header/heart.png";
import compareIcon from "../../assets/header/compare.png";
import cartIcon from "../../assets/header/cart.png";
import userIcon from "../../assets/header/user.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logoIcon} alt="logo" className="logo-icon" />
        <span className="logo-text">BESTXTORE</span>
      </div>

      <div className="header-search">
        <img src={searchIcon} alt="search" className="search-icon" />
        <input type="text" placeholder="Search..." />
        <select>
          <option>All Categories</option>
        </select>
      </div>

      <div className="header-icons">
        <img src={heartIcon} alt="wishlist" />
        <img src={compareIcon} alt="compare" />
        <img src={cartIcon} alt="cart" />
        <img src={userIcon} alt="user" />
      </div>
    </header>
  );
};

export default Header;

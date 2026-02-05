import MashinaIcon from "../../assets/announcement/Mashina.png";
import PaymentIcon from "../../assets/announcement/Payment.png";
import ReturnIcon from "../../assets/announcement/Returns.png";
import DiscountIcon from "../../assets/announcement/Discount.png";
import "./Announcement.css";

const Announcement = () => {
  return (
    <div className="announcement">
      <div className="announcement-item light">
        <span className="icon"><img src={MashinaIcon} alt="Mashina Icon" /></span>
        <div>
          <h4>FREE SHIPPING</h4>
          <p>Capped At $105 Per Order</p>
        </div>
      </div>

      <div className="announcement-item dark">
        <span className="icon"><img src={PaymentIcon} alt="Payment Icon" /></span>
        <div>
          <h4>CONVENIENT PAYMENT</h4>
          <p>Fast And Safe</p>
        </div>
      </div>

      <div className="announcement-item light">
        <span className="icon"><img src={ReturnIcon} alt="Return Icon" /></span>
        <div>
          <h4>7-DAY RETURNS</h4>
          <p>Shop With Confidence</p>
        </div>
      </div>

      <div className="announcement-item dark">
        <span className="icon"><img src={DiscountIcon} alt="Discount Icon" /></span>
        <div>
          <h4>FREE DISCOUNT CODE</h4>
          <p>Weekly Offer</p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;

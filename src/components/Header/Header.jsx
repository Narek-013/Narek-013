import mainImg from "../../Images/png/mainImg.png";
import myPhoto from "../../Images/png/myPhoto.jpg";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={mainImg} alt="backlogo" />
      <div className="header__container">
        <img src={myPhoto} alt="logo" />
      </div>
    </div>
  );
};

export default Header;

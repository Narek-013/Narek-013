import mainImg from "../../Images/png/mainImg.png";
import myPhoto from "../../Images/png/myPhoto.jpg";
import Lang from "../Lang/Lang";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Lang />
      <img src={mainImg} alt="backlogo" />
      <div className="header__container">
        <img src={myPhoto} alt="logo" />
      </div>
    </div>
  );
};

export default Header;

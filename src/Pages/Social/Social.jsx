import { Link } from "react-router-dom";
import { Imgs } from "../../Images/Imgs";
import translations from "../../language.json";
import { useSelector } from "react-redux";
import { sselectedLanguage } from "../../store/slices/selectedLanguageSlice";
import "./social.scss";

const Social = () => {
  const sselectedLanguages = useSelector(sselectedLanguage);

  return (
    <div className="social">
      <Link to="https://narek-013.github.io/portfolio/#main" target="_blank" className="portfolio">
        <img src={Imgs.browser} alt="browser" />
        https://narek-013.github.io/ <span>{`</>`}</span>
      </Link>
      <div className="social__content">
        <h2>
          <img src={Imgs.social} alt="social" /> {translations[sselectedLanguages].links}
        </h2>
        <div className="social__content-links">
          <Link to="https://www.instagram.com/narek____13/" target="_blank">
            <img src={Imgs.instagram} alt="instagram" />
            Instagram
          </Link>
          <Link to="https://t.me/narek133" target="_blank">
            <img src={Imgs.telegram} alt="telegram" />
            Telegram
          </Link>
          <Link to="https://www.facebook.com/meliqsetyan2014/" target="_blank">
            <img src={Imgs.facebook} alt="facebook" />
            Facebook
          </Link>
          <Link to="https://github.com/Narek-013" target="_blank">
            <img src={Imgs.github} alt="github" />
            Github
          </Link>
          <Link to="https://wa.me/+37477873707?text=Ողջույն%2C%20ինչպե՞ս%20եք%3F" target="_blank">
            <img src={Imgs.whatsapp} alt="whatsapp" />
            WhatsApp
          </Link>
          <Link to="https://www.linkedin.com/in/narek-meliksetyan-838481301/" target="_blank">
            <img src={Imgs.linkedin} alt="linkedin" />
            Linkedin
          </Link>
          <Link to="viber://chat?number=%2B37477873707" target="_blank">
            <img src={Imgs.viber} alt="viber" />
            Viber
          </Link>
          <Link to="https://app.slack.com/client/T07QPDMMHQC/C07QZJYGUGH" target="_blank">
            <img src={Imgs.slack} alt="slack" />
            Slack
          </Link>
          <Link to="https://www.upwork.com/freelancers/~01f36cbc1a00ac8c0e" target="_blank">
            <img src={Imgs.upWork} alt="upWork" />
            UpWork
          </Link>
          <Link to="https://www.messenger.com/t/100006356137608" target="_blank">
            <img src={Imgs.messenger} alt="messenger" />
            Messenger
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Social;

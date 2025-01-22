import translations from "../../language.json";
import { useSelector } from "react-redux";
import { sselectedLanguage } from "../../store/slices/selectedLanguageSlice";
import "./address.scss";

const Address = () => {
  const sselectedLanguages = useSelector(sselectedLanguage);

  return (
    <div className="address">
      <h2>{translations[sselectedLanguages].homeLocation}</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.416234835754!2d44.4664058758161!3d40.19980317147531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd7beb525df3%3A0x8f5449ecba2097dd!2s9%2C%201%20Janibekian%20St%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1737491911055!5m2!1sru!2sam"
        width="100%"
        height="250"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map showing address 9, 1 Janibekian St, Yerevan"
        onError={(e) => (e.target.outerHTML = "<p>Unable to load map.</p>")}
      ></iframe>
      <h2>{translations[sselectedLanguages].workLocation}</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.3507961489663!2d44.56268457581606!3d40.2012590714751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa33b242214c3%3A0x299d8081393fb54!2s8%20Gai%20Ave%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1737492309748!5m2!1sru!2sam"
        width="100%"
        height="250"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map showing address 9, 1 Janibekian St, Yerevan"
        onError={(e) => (e.target.outerHTML = "<p>Unable to load map.</p>")}
      ></iframe>
    </div>
  );
};

export default Address;

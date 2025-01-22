import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLeng, sselectedLanguage } from "../../store/slices/selectedLanguageSlice";
import "./lang.scss";

const Lang = () => {
  const sselectedLanguages = useSelector(sselectedLanguage);
  const dispatch = useDispatch()

  useEffect(() => {
    const getLanguageFromCookies = () => {
      const cookies = document.cookie.split("; ");
      const languageCookie = cookies.find((cookie) => cookie.startsWith("language="));

      if (languageCookie) {
        return languageCookie.split("=")[1];
      }

      return "en";
    };

    const savedLanguage = getLanguageFromCookies();
    dispatch(changeLeng(savedLanguage));
  }, [dispatch]);

  const handleChange = (event) => {
    dispatch(changeLeng(event.target.value));
    document.cookie = `language=${event.target.value}; path=/; max-age=31536000`;
  };

  return (
    <select className="lang-option" value={sselectedLanguages} onChange={handleChange}>
      <option value="ru">Рус</option>
      <option value="hy">Հայ</option>
      <option value="en">Eng</option>
    </select>
  );
};

export default Lang;

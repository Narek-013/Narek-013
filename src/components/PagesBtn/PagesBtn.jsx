import { NavLink } from "react-router-dom";
import { AddressSvg, GallerySvg, LinkSvg, WorksSvg } from "./SvgCode";
import translations from "../../language.json";
import { useSelector } from "react-redux";
import { sselectedLanguage } from "../../store/slices/selectedLanguageSlice";
import "./pagesBtn.scss";

const PagesBtn = () => {
  const sselectedLanguages = useSelector(sselectedLanguage);

  return (
    <div className="pages-btn">
      <NavLink to="/">
        <LinkSvg />
        {translations[sselectedLanguages].links}
      </NavLink>
      <NavLink to="/gallery">
        <GallerySvg />
        {translations[sselectedLanguages].gallery}
      </NavLink>
      <NavLink to="/works">
        <WorksSvg />
        {translations[sselectedLanguages].works}
      </NavLink>
      <NavLink to="/address">
        <AddressSvg />
        {translations[sselectedLanguages].address}
      </NavLink>
    </div>
  );
};

export default PagesBtn;

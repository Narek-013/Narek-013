import { NavLink } from "react-router-dom";
import { AddressSvg, GallerySvg, LinkSvg, WorksSvg } from "./SvgCode";
import "./pagesBtn.scss";

const PagesBtn = () => {
  return (
    <div className="pages-btn">
      <NavLink to="/">
        <LinkSvg />
        Links
      </NavLink>
      <NavLink to="/gallery">
        <GallerySvg />
        Gallery
      </NavLink>
      <NavLink to="/works">
        <WorksSvg />
        Works
      </NavLink>
      <NavLink to="/address">
        <AddressSvg />
        Address
      </NavLink>
    </div>
  );
};

export default PagesBtn;

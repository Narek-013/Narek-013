import { Imgs } from "../../Images/Imgs";
import "../Gallery/gallery.scss";

const Works = () => {
  return (
    <div className="gallery">
      {Imgs.works.map((el, index) => (
        <img src={el} key={index} alt={`project-${index}`} />
      ))}
    </div>
  );
};

export default Works;

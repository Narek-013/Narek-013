import { Imgs } from "../../Images/Imgs";
import "./gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery">
      {Imgs.gallerys.map((el, index) => (
        <img src={el} key={index} alt={`project-${index}`} />
      ))}
    </div>
  );
};

export default Gallery;

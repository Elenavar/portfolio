import "../styles/components/AboutMe.scss";
import { Link } from "react-router-dom";
import photo from "../images/aboutmepage.jpg";

function AboutMe() {
  return (
    <div className="aboutmePage">
      <div className="aboutmePage__back">
        <Link to="/menu" className="menu__back--link link">
          <i class="fa-sharp fa-solid fa-circle-arrow-left"></i>
        </Link>
      </div>
      <div className="aboutmePage__paper">
        <article className="aboutmePage__paper--article">
          <div className="aboutmePage__paper--imgbg imgbg"><img className="imgbg__img" src={photo}></img></div>
          <div className="aboutmePage__paper--text text">
              <h2 className="text__title">
                Lorem ipsum.
              </h2>
              <p className="text__desc">
                Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis,
                dictum dui sapien vehicula scelerisque sociosqu semper pretium
                laoreet, dis habitasse eget posuere montes ornare luctus. Tincidunt
                fames mi potenti porttitor aenean integer imperdiet cum, odio
                nascetur ad litora gravida conubia fusce et, nostra pulvinar
                phasellus molestie tellus ultricies aliquam. Id himenaeos curae
                fusce netus sollicitudin metus aptent risus aliquam feugiat cras
                per, pharetra cum mollis viverra nullam urna lacinia nulla tempus
                placerat.
              </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default AboutMe;

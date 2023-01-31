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
          <div className="aboutmePage__paper--imgbg imgbg">
            <img className="imgbg__img" src={photo}></img>
          </div>
          <div className="aboutmePage__paper--text text">
            <h2 className="text__title">
              ABOUT ME: <span className="text__title--span">Elena Vargas</span>
            </h2>
            <div className="text__desc">
              <p className="text__desc--p">
                After finishing my studies in the degree of Industrial Electronics
                Engineering, and due to my great interest in the world of
                computing, I decided to take the leap into the world of web
                programming.
              </p>
              <p className="text__desc--p">
                Thanks to Adalab's Web Programming Bootcamp I managed to acquire a
                wide range of knowledge and skills, such as stress management and
                teamwork, as well as knowledge in layout, React, JavaScript, Git
                and APIs and backend programming (Node JS, Express and SQL).
              </p>
              <p className="text__desc--p">
                I am a very energetic person with a lot of initiative and
                willingness to learn. I am currently looking for a position as a
                web programmer, to be able to take the first step into the working
                world and to continue learning and developing all my knowledge.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default AboutMe;

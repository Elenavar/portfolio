import "../styles/components/Menu.scss";
import aboutme from "../images/aboutme.jpeg";
import projects from "../images/projects.gif";
import contact from "../images/contact.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__back">
        <Link to="/" className="menu__back--link link">
          {/* <p className="link__text">back</p> */}
          <i class="fa-sharp fa-solid fa-circle-arrow-left"></i>
        </Link>
      </div>
      <div className="menu__paper">
        <div className="menu__paper--div1 div aboutme">
          <div className="aboutme__bg">
          <Link to="/menu/aboutme" className="link aboutme">
            <h2 className="aboutme__bg--text1">about me</h2>
            <h2 className="aboutme__bg--text2">about me</h2></Link>
          </div>
          <Link to="/menu/aboutme" className="link aboutme">
            <img className="aboutme__img" src={aboutme} alt="About me"></img>
          </Link>
        </div>
        <div className="menu__paper--div2 div projects">
          <div className="projects__bg"><Link to="/menu/projects" className="link">
            <h2 className="projects__bg--text1">projects</h2>
            <h2 className="projects__bg--text2">projects</h2>
            <h2 className="projects__bg--text3">projects</h2></Link>
          </div>

          <Link to="/menu/projects" className="link">
            <img
              className="projects__img"
              src={projects}
              alt="Computer gift"
            ></img>
          </Link>
        </div>
        <div className="menu__paper--div3 div contact">
          <Link to="/menu/contact" className="link contact">
            <div className="contact__bg">
              <h2 className="contact__bg--text1">contact me</h2>
            </div>
            <img className="contact__img" src={contact} alt="Contact"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;

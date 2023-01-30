import "../styles/components/Menu.scss";
import aboutme from "../images/aboutme.jpeg";
import projects from "../images/proyects.gif";
import contact from "../images/contact.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
    <div className="menu__back">
        <Link to="/" className="menu__back--link link"><p className="link__text">back</p></Link>
    </div>
      <div className="menu__paper">
        <div className="menu__paper--div1 div aboutme">
          <Link className="link aboutme">
              <div className="aboutme__bg">
              
                        <h2 className="aboutme__bg--text1">about me</h2>
                    <h2 className="aboutme__bg--text2">about me</h2>
              </div>
          </Link>
          <img className='aboutme__img' src={aboutme}alt="About me"></img>
        </div>
        <div className="menu__paper--div2 div projects">
            <Link to="/menu/projects" className="link">
                <div className="projects__bg">
                <h2 className="projects__bg--text1">projects</h2>
                <h2 className="projects__bg--text2">projects</h2><h2 className="projects__bg--text3">projects</h2></div>
            </Link>
            <img className='projects__img' src={projects} alt="Computer gift"></img>
        </div>
        <div className="menu__paper--div3 div contact"><Link className="link contact">
              <div className="contact__bg">
              
                        <h2 className="contact__bg--text1">contact me</h2>
              </div>
          </Link>
          <img className='contact__img' src={contact}alt="Contact"></img></div>
      </div>
    </div>
  );
}

export default Menu;

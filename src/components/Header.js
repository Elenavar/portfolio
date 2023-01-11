import '../styles/components/Header.scss';
import logo from '../images/logo.png';
function Header() {
  return (
    <header className="header">
      <h1 className="header__text">Elena Vargas</h1>
      <div className="div">
        <img
          className="header__logo"
          src={logo}
          alt="logo Elena Vargas Monserrat"
        />
        <i className="fa-sharp fa-solid fa-angle-down header__icon"></i>
      </div>
      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__list--item--item">Home</li>
          <li className="nav__list--item--item">Projects</li>
          <li className="nav__list--item--item">About me</li>
          <li className="nav__list--item--item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

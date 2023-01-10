import '../styles/components/Header.scss';
import logo from '../images/logo.png';
function Header() {
  return (
    <header className="header">
      <h1 className="header__text">Elena Vargas</h1>
      <img className="header__logo" src={logo} />
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

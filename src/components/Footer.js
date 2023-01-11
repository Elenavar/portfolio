import '../styles/components/Footer.scss';
function Footer() {
  return (
    <footer className="footer">
      {/* <h3 className="footer__h3">Elena Vargas Monserrat</h3> */}
      <div className="footer__social">
        <i className="fa-brands fa-linkedin-in footer__social--icon"></i>
        <i className="fa-brands fa-github-alt footer__social--icon"></i>
      </div>
    </footer>
  );
}

export default Footer;

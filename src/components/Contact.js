import '../styles/components/Contact.scss';
import { Link } from 'react-router-dom';
function Contact(){
return(
    <div className="contactPage">
        <div className="contactPage__back">
        <Link to="/menu" className="contactPage__back--link link">
          <i class="fa-sharp fa-solid fa-circle-arrow-left"></i>
        </Link>
      </div>
        <div className="contactPage__paper">
            <ul className="contactPage__paper--list contactList">
            <a className='contactList__link' href='https://www.linkedin.com/in/elena-vargas-monserrat/' target="_blank" rel='noreferrer'>
                <li className="contactList__link--item">
                <i className="fa-brands fa-linkedin-in icon"></i>
                <p> elena-vargas-monserrat</p></li>
            </a>
            <a className='contactList__link' href='https://github.com/Elenavar' target="_blank" rel='noreferrer'>
                <li className="contactList__link--item">
                <i className="fa-brands fa-github-alt icon"></i> <p>Elenavar</p></li>
            </a>
            <a className='contactList__link' href="mailto:elenavarmon13@gmail.com" target="_blank" rel='noreferrer'>
                <li className="contactList__link--item">
                <i class="fa-solid fa-envelope icon"></i> <p>elenavarmon13@gmail.com</p></li>
            </a>
            <a className='contactList__link' href="tel:722702421" target="_blank" rel='noreferrer'>
                <li className="contactList__link--item">
                <i class="fa-solid fa-phone icon"></i> <p>722 702 421</p></li>
            </a>
            </ul>
        </div>
    </div>
)
}

export default Contact;
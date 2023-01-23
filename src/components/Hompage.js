import avatar from '../images/avatar.png';
import '../styles/components/Homepage.scss';
function Homepage() {
  return (
    <article className="home">
      <h2 className="home__title">
        Hello! I am Elena, <span className="span">web developer.</span>
      </h2>
      <img className="home__avatar" src={avatar} alt="avatar" />
    </article>
  );
}

export default Homepage;

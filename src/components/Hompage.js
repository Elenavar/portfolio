import avatar from '../images/avatar.png';
import '../styles/components/Homepage.scss';
function Homepage() {
  return (
    <article className="home">
      <div className="div">
        <h2 className="home__title">
          Hello! I am Elena, <span className="span">web developer.</span>
        </h2>
      </div>
      <img className="home__avatar" src={avatar} alt="avatar" />
    </article>
  );
}

export default Homepage;

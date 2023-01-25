import avatar from '../images/avatar2.png';
import '../styles/components/Homepage.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function Homepage() {
  return (
    <div className="home">
      <motion.div
        whileHover={{ scale: 0.9, translateY: -100 }}
        whileTap={{
          scale: 0.9,
          translateY: -70
        }}
        whileFocus={{ translateY: -150 }}>

        <div className="motion"><h2 className="home__title" >
          hello! i'm Elena <span className="span">i am web developer</span>
        </h2></div></motion.div>
      <div className="home__div">
        <img className="home__avatar" src={avatar} alt="avatar" />
      </div>
      <Link to="/menu">
        <div className='button'>click on me</div>
      </Link>
    </div>
  );
}

export default Homepage;

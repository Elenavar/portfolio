import avatar from '../images/avatar.png';
import '../styles/components/Homepage.scss';
import { motion } from 'framer-motion';
import React, { useRef, useEffect, useState } from 'react';

function Homepage() {
  const outerRef = useRef(null);
  const [inViewport, setInViewport] = useState(true);

  useEffect(() => {
    const onChange = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === outerRef.current) {
          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        }
      });
    };
    const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
    observer.observe(outerRef.current);
  }, [outerRef]);

  // Framer motion animations
  const fadeInContainerWithStagger = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: 'tween',
        ease: 'easeIn',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp1 = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
  };

  const fadeInUp2 = {
    hidden: {
      opacity: 0,
      y: -80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        delay: 0.3,
        duration: 1,
      },
    },
  };
  return (
    <div ref={outerRef} id="outer-box" className="home">
      {inViewport && (
        <motion.div
          variants={fadeInContainerWithStagger}
          initial="hidden"
          animate="visible"
        >
          <article>
            <div class="motion">
              <motion.div variants={fadeInUp1}>
                <h2 className="home__title">
                  Hello! I am Elena,{' '}
                  <span className="span">web developer.</span>
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp2}>
                <img className="home__avatar" src={avatar} alt="avatar" />
              </motion.div>
            </div>
          </article>
        </motion.div>
      )}
    </div>
  );
}

export default Homepage;

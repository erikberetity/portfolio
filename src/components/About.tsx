import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h4 className={styles.heading}>ABOUT /</h4>
      <p className={styles.description}>
      Multi-disciplinary designer, building contemporary<br/> brands and utilising design to craft stories that capture<br/> attention, engage and inspire.
      </p>
    </section>
  );
};

export default About;

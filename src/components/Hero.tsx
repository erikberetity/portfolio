import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.sectionHero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Beretity Erik</h1>
        <h2 className={styles.heroSubtitle}>Frontend Developer</h2>
      </div>
      <img src="/assets/Direction.svg" alt="Arrow" className={styles.arrowIcon} />
    </section>
  );
};

export default Hero;

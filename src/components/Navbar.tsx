import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.sectionNavbar}>
      <div className={styles.mainNav}>
        <div className={styles.heading}>
          <a href="#hero" className={styles.headingItem}>HOME</a>
          <a href="#about" className={styles.headingItem}>ABOUT</a>
          <a href="#skills" className={styles.headingItem}>SKILLS</a>
          <a href="#projects" className={styles.headingItem}>PROJECTS</a>
          <a href="#contact" className={styles.headingItem}>CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

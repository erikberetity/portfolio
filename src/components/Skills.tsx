import React from 'react';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h4 className={styles.heading}>SKILLS /</h4>
        <div className={styles.table}>
          <hr/>
            <div className={styles.skill}>
                <p className={styles.name1}> TYPESCRIPT</p>
            </div>
            <hr/>
            <div className={styles.skill}>
                <p className={styles.name2}> REACT</p>
            </div>
            <hr/>
            <div className={styles.skill}>
                <p className={styles.name3}> ANGULAR</p>
            </div>
            <hr/>
            <div className={styles.skill}>
                <p className={styles.name4}> JAVA</p>
            </div>
            <hr/>
        </div>
    </section>
  );
};

export default Skills;

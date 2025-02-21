import React from 'react';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.sectionProjects}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.Table}>
        <div className={styles.project1}>
          <h3 className={styles.projectName1}>Project 1</h3>
          <p className={styles.projectDescription1}>A brief description of project 1.</p>
        </div>
        <div className={styles.project2}>
          <h3 className={styles.projectName2}>Project 2</h3>
          <p className={styles.projectDescription2}>A brief description of project 2.</p>
        </div>
        <div className={styles.project3}>
          <h3 className={styles.projectName3}>Project 3</h3>
          <p className={styles.projectDescription3}>A brief description of project 3.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

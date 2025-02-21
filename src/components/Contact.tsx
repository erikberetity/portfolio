import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contactSection}>
        <h2 className={styles.scrollingText}>
          Let's Talk / Let's Talk / Let's Talk / Let's Talk / 
        </h2>
        <h2 className={styles.scrollingText2}>
          Let's Talk / Let's Talk / Let's Talk / Let's Talk / 
        </h2>
        <br/>
        <a href="mailto:bereticerik@gmail.com" className={styles.contactButton}>
        CONTACT
      </a>
    </section>
  );
};

export default Contact;

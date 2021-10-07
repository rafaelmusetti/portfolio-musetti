import React from 'react';
import Image from 'next/image';
import musettiImage from '../../public/musetti.png';
import styles from '../../styles/HomeContent.module.css';

const HomeContent = () => (
  <div className={styles.container}>
    <section className={styles.main}>
      <h3 className={styles.title}>I'am Rafael Musetti</h3>
      <span className={styles.description}>
        Front-End Developer passionate about clean coding and agile development,
        with more than 6 years of experience.
      </span>
      <div className={styles.image}>
        <Image src={musettiImage} />
      </div>
    </section>
    <section>
      <h3>Skillset</h3>
      <div className={styles.skillList}>
        <div className={styles.skillItem}>
          <div>title</div>
          <div>description</div>
        </div>
      </div>
    </section>
  </div>
);

export default HomeContent;

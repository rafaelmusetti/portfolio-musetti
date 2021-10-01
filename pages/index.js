import React from 'react';
import Head from 'next/head';
// import Image from 'next/image'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>rafael musetti | portfolio</title>
        <meta name="description" content="Portfolio Rafael Musetti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Rafael Musetti</h1>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>developed by rafael musetti</span>
      </footer>
    </div>
  );
}

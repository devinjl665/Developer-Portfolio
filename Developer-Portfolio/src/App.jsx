import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Hero />
      </main>
    </div>
  );
}

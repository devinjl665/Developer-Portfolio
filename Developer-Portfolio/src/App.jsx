
import styles from './App.module.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

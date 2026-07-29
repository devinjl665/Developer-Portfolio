import {useId} from 'react';
import styles from './About.module.css';

export default function About() {
    const id = useId(); //unique id for accessibility if needed
    return (
        <section id='about' className={styles.container} aria-labelledby={`${id}-label`}>
            <div className={styles.inner}>
                <h2 id={`${id}-label`} className={styles.title}>About me</h2>
                <p className={styles.bio}>
                    I’m a full-stack developer focused on building clean, accessible interfaces.
                    I enjoy turning designs into responsive, performant apps and learning new tools.                
                </p>
                <p className={styles.bio}>
                    Currently open to opportunities. I'm comfortable working with in multiple code editors.
                </p>
            </div>
        </section>
    );
}
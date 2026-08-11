import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div>
                <h1 className={styles.title}>Hi, I'm Devin.</h1>
                <p className={styles.lead}>
                    I'm a self-driven, full-stack developer who easily adapts to varying situations and tasks.
                </p>
                <div className={styles.actions}>
                    <a className={styles.primary} href="#projects">View projects</a>
                    <a href='/resume.pdf' target='_blank' rel='noreferrer'>Resume</a>
                </div>
            </div>
        </section>
    );
}
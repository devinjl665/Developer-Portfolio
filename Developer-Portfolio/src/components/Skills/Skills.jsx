import styles from './Skills.module.css';

const skills = [
    { name: 'JavaScript'},
    { name: 'CSS'},
    { name: 'React'},
    { name: 'Vite'},
    { name: 'Python'},
    { name: 'C#'},
    { name: 'MongoDB'},
    { name: 'PostgreSQL'},
    { name: 'Node'},
];


export default function Skills() {
    return (
        <section id='skills' className={styles.container} aria-labelledby='skills-label'>
            <div className={styles.inner}>
                <h2 id='skills-label' className={styles.title}>Skills</h2>
                <ul className={styles.grid}>
                    {skills.map((s) => (
                        <li key={s.name} className={styles.card}>
                            <div className={styles.name}>{s.name}</div>
                            <div className={styles.level}>{s.level}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
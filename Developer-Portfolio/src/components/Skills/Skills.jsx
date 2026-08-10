import {FaReact, FaJs, FaCss3Alt, FaPython, FaNode  } from 'react-icons/fa';
import {SiMongodb, SiPostgresql, SiVite} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import styles from './Skills.module.css';

const skills = [
    { name: 'JavaScript', icon: FaJs},
    { name: 'CSS', icon: FaCss3Alt},
    { name: 'React', icon: FaReact},
    { name: 'Vite', icon: SiVite},
    { name: 'Python', icon: FaPython},
    { name: 'C#', icon: TbBrandCSharp},
    { name: 'MongoDB', icon: SiMongodb},
    { name: 'PostgreSQL', icon:SiPostgresql},
    { name: 'Node', icon: FaNode},
];


export default function Skills() {
    return (
        <section id='skills' className={styles.container} aria-labelledby='skills-label'>
            <div className={styles.inner}>
                <h2 id='skills-label' className={styles.title}>Skills</h2>
                <ul className={styles.grid}>
                    {skills.map((s) => {
                        const IconComponent = s.icon;
                        return (
                        <li key={s.name} className={styles.card}>
                            {IconComponent && <IconComponent className={styles.icon} aria-hidden='true' />}
                            <div className={styles.name}>{s.name}</div>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
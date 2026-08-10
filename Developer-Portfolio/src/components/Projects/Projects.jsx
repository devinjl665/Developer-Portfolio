import {useState} from 'react';
import projectsData from '../../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

function ProjectModal({ project, onClose }) {
    if (!project) return null;
    return (
        <div className={styles.ModalOverlay} role='dialog' aria-modal='true' aria={`${project.title} details`}>
            <div className={styles.modal}>
                <button className={styles.close} onclick={onClose} aria-label='Close'>X</button>
                <h3 className={styles.modalTitle}>{project.title}</h3>
                {project.image && <img src={project.image} alt={`${project.title} screenshot`} className={styles.modalImg} />}
                <p className={styles.modalDesc}>{project.description}</p>
                <div className={styles.modalTech}>
                    {project.tech.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
                <div className={styles.modalLinks}>
                    {project.live && <a href={project.live} target='_blank' rel='noreferrer'>View live</a>}
                    {project.repo && <a href={project.repo} target='_blank' rel='noreferrer'>View code</a>}
                </div>
            </div>
        </div>
    );
}


export default function Projects() {
    const [active, setActive] = useState(null);
    return (
        <section id='projects' className={styles.container} aria-labelledby='projects-label'>
            <h2 id='projects-label' className={styles.heading}>Projects</h2>
            <ul className={styles.grid}>
                {projectsData.map((p) => (
                    <ProjectCard key={p.id} project={p} onOpen={setActive} />
                ))}
            </ul>
            <ProjectModal project={active} onClose={() => setActive(null)} />
        </section>
    )
}
import styles from './Projects.module.css';

export default function ProjectCard({ project, onOpen}) {
    return (
        <li className={styles.card}>
            {project.image && (
                <img src={project.image} alt={`${project.title} screenshot`} className={styles.thumb} />
            )}
            <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.summary}>{project.summary}</p>
                <div className={styles.meta}>
                    <div className={styles.tech}>
                        {project.tech.map((t) => (
                            <span key={t} className={styles.tag}>{t}</span>
                        ))}
                    </div>
                    <div className={styles.actions}>
                        <button className={styles.linkBtn} onClick={() => onOpen(project)} aria-haspopup='dialog'>
                            Details
                        </button>
                        {project.live ? (
                            <a className={styles.visit} href={project.live} target='_blank' rel='noreferrer'>Live</a>
                        ) : null}
                        {project.repo ? (
                            <a className={styles.repo} href={project.repo} target='_blank' rel='noreferrer'>Code</a>
                        ) : null}
                    </div>
                </div>
            </div>
        </li>
    );
}
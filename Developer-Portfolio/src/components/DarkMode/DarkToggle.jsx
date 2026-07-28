import React, {useEffect, useState} from 'react';
import styles from './DarkToggle.module.css';

const initialTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export default function DarkToggle() {
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button className={styles.btn} onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        aria-pressed={theme === 'dark'}
        aria-label='Dark mode'>
          {theme === 'dark' ? '🌙' : '☀️'}  
        </button>
    );
}
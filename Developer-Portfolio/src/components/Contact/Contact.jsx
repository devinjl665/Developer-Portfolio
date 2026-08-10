import { useState } from 'react';
import styles from './Contact.module.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbgrgqqa';

export default function Contact() {
    const [form, setForm] = useState({name: '', email: '', message: ''});
    const [status, setStatus] = useState({state: 'idle', message: ''});

    function handleChange(e) {
        const {name, value} = e.target;
        setForm((s) => ({...s, [name]: value}));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus({state: 'loading', message: 'Sending...'});

        if (!form.name || !form.email || !form.message) {
            setStatus({ state: 'error', message: 'Please complete all fields'});
            return;
        }

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.ok) {
                setStatus({state: 'success', message: 'Thanks - message sent!'});
                setForm({ name: '', email: '', message: ''});
            } else {
                setStatus({ state: 'error', message: data.error || 'Submission failed.'});
            }
        } catch {
            setStatus({state: 'error', message: 'Network error. Please try again later.'});
        }
    }

    const isBusy = status.state === 'loading';

    return (
        <section id='contact' className={styles.container} aria-labelledby='contact-label'>
            <h2 id='contact-label'>Contact</h2>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <label className={styles.field}>
                    <span>Name</span>
                    <input
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        required
                        aria-required='true'
                    />
                </label>

                <label className={styles.field}>
                    <span>Email</span>
                    <input
                        name='email'
                        type='email'
                        value={form.email}
                        onChange={handleChange}
                        required
                        aria-required='true'
                    />
                </label>

                <label className={styles.field}>
                    <span>Message</span>
                    <textarea
                        name='message'
                        rows='6'
                        value={form.message}
                        onChange={handleChange}
                        required
                        aria-required='true'
                    />
                </label>

                <div className={styles.actions}>
                    <button type='submit' className={styles.submit} disabled={isBusy} aria-disabled={isBusy}>
                        {isBusy ? 'Sending...' : 'Send message'}
                    </button>
                    <div className={styles.status} aria-live='polite'>
                        {status.message}
                    </div>
                </div>
            </form>
        </section>
    );
}

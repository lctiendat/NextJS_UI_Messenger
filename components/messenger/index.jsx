import styles from './index.module.scss'
import { Check } from 'react-bootstrap-icons'

export function Messenger() {
    return (
        <div className={styles.Messenger}>
            <div className={styles.Messenger__left}>
                <div className={styles.Messenger__left__item}>
                    <img src='/images/avatar-default.png' />
                    <div className={styles.online}></div>
                </div>
            </div>
            <div className={styles.Messenger__main}>
                <span className={styles.Messenger__main__name}>Lê Tiến Đạt</span> <br />
                <span className={styles.Messenger__main__lastMsg}>I Love U </span>
                <span className={styles.Messenger__main__lastSeen}>10:00 PM</span>
            </div>
            <div className={styles.Messenger__right}>
                <div className={styles.Messenger__right__seen}>
                    <Check />
                </div>
            </div>
        </div>
    )
}
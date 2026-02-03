import { useState, useEffect } from "react";
import styles from "../../assets/styles/components/notifications.module.css";

type NotificationProps = {
    text: string;
    imageSrc?: string;
    closeCallback: () => void;
}

const Notification: React.FC<NotificationProps> = ({ text, imageSrc, closeCallback }) => {
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDeleted(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    const handleAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
        if (event.animationName.includes("SlideOut")) {
            closeCallback();
        }
    }

    return (
        <div 
            className={`${styles.notification} ${isDeleted ? styles.notificationExit : ""}`} 
            onClick={() => setIsDeleted(true)}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className={styles.textContainer}>
                <p className={styles.text}>{text}</p>
            </div>
            {imageSrc && <img className={styles.avatar} src={imageSrc} alt="Ikona" />}
        </div>
    );
}

export default Notification;
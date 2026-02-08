import Notification from "./Notification";
import styles from "../../assets/styles/components/notifications.module.css";
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import { useLayoutEffect, useRef, useState } from "react";

const NotificationList = () => {
    const { notifications, closeNotification } = useOwnOutlet();

    const scrollRef = useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);


    useLayoutEffect(() => {
        const el = scrollRef.current;
        if (el) {
            // 1. Zjistíme, jestli obsah přetéká (je vyšší než kontejner)
            const isOver = el.scrollHeight > el.clientHeight;
            setIsOverflowing(isOver);
            
            
        }
    }, [notifications]);

    return (
        <div className={styles.listContainer}>
            <div 
                ref={scrollRef} 
                className={`${styles.scrollContainer} ${isOverflowing ? styles.masked : ""}`}
            >
                {notifications.map((n) => (
                    <Notification
                        key={n.id}
                        text={n.text}
                        imageSrc={n.imageSrc}
                        closeCallback={() => closeNotification(n.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default NotificationList;
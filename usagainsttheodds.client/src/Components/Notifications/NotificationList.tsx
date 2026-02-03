import Notification from "./Notification";
import styles from "../../assets/styles/components/notifications.module.css";
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";

const NotificationList = () => {
    const { notifications, closeNotification } = useOwnOutlet();

    return (
        <div className={styles.listContainer}>
            {notifications.map((n) => (
                <Notification
                    key={n.id}
                    text={n.text}
                    imageSrc={n.imageSrc}
                    closeCallback={() => closeNotification(n.id)}
                />
            ))}
        </div>
    );
}

export default NotificationList;
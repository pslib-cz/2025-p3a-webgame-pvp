import { useEffect, useState} from 'react';
import styles from '../assets/styles/components/verticalWarning.module.css';

const VerticalWarning: React.FC = () => {
    const [isVertical, setIsVertical] = useState(window.innerHeight < window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => {
            setIsVertical(window.innerHeight < window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isVertical) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <p className={styles.title}>wrong screen orientation</p>
                    <p className={styles.text}>Please rotate your device to landscape mode for the best experience.</p>
                </div>               
            </div>
        );
    }
    return null;
};

export default VerticalWarning;
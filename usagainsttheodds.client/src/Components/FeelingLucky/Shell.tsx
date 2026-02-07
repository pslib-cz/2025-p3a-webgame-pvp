import styles from "../../assets/styles/Minigames/FeelingLucky.module.css";

interface ShellProps {
  id: number;
  isLifted: boolean;
  hasBall: boolean;
  isShuffling: boolean;
  onClick: () => void;
  gameState: string;
}

const Shell = ({ id, isLifted, hasBall, onClick, gameState }: ShellProps) => {
  const getShuffleClass = () => {
    if (gameState !== 'shuffling') return "";
    if (id === 0) return styles.moveRight;
    if (id === 2) return styles.moveLeft;
    if (id === 1) return styles.shake;
    return "";
  };

  const containerClasses = `
    ${styles.cupContainer} 
    ${isLifted ? styles.lifted : ""} 
    ${getShuffleClass()}
  `.trim();

  return (
    <div className={containerClasses} onClick={onClick}>
      <div className={styles.cup}>
      </div>

      {hasBall && (
        <div className={styles.ball} />
      )}
    </div>
  );
};

export default Shell;
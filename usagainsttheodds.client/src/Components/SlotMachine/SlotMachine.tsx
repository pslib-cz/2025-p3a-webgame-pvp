import React, { useState } from "react";
import style from "../../assets/styles/Minigames/SlotMachine/SlotMachine.module.css";

type SlotMachineProps = {
  isSpinning: boolean;
  firstPosition: number;
  secondPosition: number;
  thirdPosition: number;
  spin: () => void;
  stop: () => void;
};

const SlotMachine: React.FC<SlotMachineProps> = ({ spin, stop, isSpinning, firstPosition, secondPosition, thirdPosition }) => {



  const [btnAnimating, setBtnAnimating] = useState(false);

  const handleSpinClick = () => {
    // restart local button animation so it plays on every click
    setBtnAnimating(false);
    requestAnimationFrame(() => setBtnAnimating(true));
    spin();
  };

  return (
    <div className={`${style.frame}`}>
      {/*<img src="/images/SlotMachine/slot-pozadi.png" alt="slot machine frame" className={style.frame} />*/}
      <div className={style.slotsContainer}>
        {/* <SlotRow isSpinning={isSpinning} currentPosition={firstPosition} />
        <SlotRow isSpinning={isSpinning} currentPosition={secondPosition} />
        <SlotRow isSpinning={isSpinning} currentPosition={thirdPosition} /> */}
      </div>
      <button
        className={`${style.spinButton} ${style.slotButton} ${btnAnimating ? style.spinning : ""}`}
        onClick={handleSpinClick}
        onAnimationEnd={() => setBtnAnimating(false)}
      ></button>
      <button className={`${style.stopButton} ${style.slotButton}`} onClick={stop}></button>

    </div>
  );
};

export default SlotMachine;
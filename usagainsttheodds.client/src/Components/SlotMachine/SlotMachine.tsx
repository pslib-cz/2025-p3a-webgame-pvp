import React from "react";
import SlotRow from "./SlotRow";
import machineFrame from "../../assets/images/SlotMachine/slot-pozadi.png";
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




  return (
    <div className={`${style.frame}`}>
      {/*<img src={machineFrame} alt="slot machine frame" className={style.frame} />*/}
      <div className={style.slotsContainer}>
        <SlotRow isSpinning={isSpinning} currentPosition={firstPosition} />
        <SlotRow isSpinning={isSpinning} currentPosition={secondPosition} />
        <SlotRow isSpinning={isSpinning} currentPosition={thirdPosition} />
      </div>
      <button className={`${style.spinButton} ${style.slotButton}`} onClick={spin}></button>
      <button className={`${style.stopButton} ${style.slotButton}`} onClick={stop}></button>

    </div>
  );
};

export default SlotMachine;
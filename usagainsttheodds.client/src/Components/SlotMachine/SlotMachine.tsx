import React from "react";
import SlotRow from "./SlotRow";
import machineFrame from "../../assets/images/SlotMachine/slot-pozadi.png";
import style from "../../assets/styles/Minigames/SlotMachine/SlotMachine.module.css";

type SlotMachineProps = {
  isSpinning: boolean;
  firstPosition: number;
  secondPosition: number;
  thirdPosition: number;
};

const SlotMachine: React.FC<SlotMachineProps> = ({ isSpinning, firstPosition, secondPosition, thirdPosition }) => {




  return (
    <div className={`${style.slotMachineContainer}`}>
      <img src={machineFrame} alt="slot machine frame" className={style.frame} />
      <div className={style.slotsContainer}>
        <SlotRow isSpinning={isSpinning} currentPosition={firstPosition} />
        <SlotRow isSpinning={isSpinning} currentPosition={secondPosition} />
        <SlotRow isSpinning={isSpinning} currentPosition={thirdPosition} />
      </div>

    </div>
  );
};

export default SlotMachine;
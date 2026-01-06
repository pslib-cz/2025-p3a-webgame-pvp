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
    <div className="slot-machine">
      <img src={machineFrame} alt="" />
      <SlotRow  isSpinning={isSpinning} currentPosition={firstPosition} />
      <SlotRow isSpinning={isSpinning} currentPosition={secondPosition} />
      <SlotRow isSpinning={isSpinning} currentPosition={thirdPosition} />
    </div>
  );
};

export default SlotMachine;
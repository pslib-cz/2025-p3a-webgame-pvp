import React from "react";
import SlotRow from "./SlotRow";

type SlotMachineProps = {
  isSpinning: boolean;
  firstPosition: (x:number) => void;
  secondPosition: (x:number) => void;
  thirdPosition: (x:number) => void;
};

const SlotMachine: React.FC<SlotMachineProps> = ({ isSpinning, firstPosition, secondPosition, thirdPosition }) => {


  return (
    <div>
      <SlotRow  isSpinning={isSpinning} currentPosition={firstPosition} />
      <SlotRow isSpinning={isSpinning} currentPosition={secondPosition} />
      <SlotRow isSpinning={isSpinning} currentPosition={thirdPosition} />
    </div>
  );
};

export default SlotMachine;
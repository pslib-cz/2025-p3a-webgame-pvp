import React from "react";
import SlotRow from "./SlotRow";

type SlotMachineProps = {
  isSpinning?: boolean;
};

const SlotMachine: React.FC<SlotMachineProps> = ({ isSpinning = false }) => {


  return (
    <div>
      <SlotRow isSpinning={isSpinning} />
      <SlotRow isSpinning={isSpinning} />
      <SlotRow isSpinning={isSpinning} />
    </div>
  );
};

export default SlotMachine;
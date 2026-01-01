import rS from "../../Helpers/randomGeneratorHelper";
import { useState } from "react";
type SlotRowProps = {
    isSpinning: boolean;
};

const SlotRow: React.FC<SlotRowProps> = ({isSpinning}) => {
    const [position, setPosition] = useState<number>(0);
    const Symbols: string[] = [
        "../../assets/images/SlotMachine/lemon.png",
        "../../assets/images/SlotMachine/watermelon.png",
        "../../assets/images/SlotMachine/cherry.png",
        "../../assets/images/SlotMachine/heart.png",
        "../../assets/images/SlotMachine/bell.png",
        "../../assets/images/SlotMachine/horseshoe.png",
        "../../assets/images/SlotMachine/bar.png",
        "../../assets/images/SlotMachine/diamond.png",
        "../../assets/images/SlotMachine/seven.png",
        "../../assets/images/SlotMachine/spin.png"
        ];

  if (isSpinning) {
    setPosition(rS.generate(0, 8)); 
    return (
        <img src={Symbols[9]} alt="spinning"/>
    );
  }
  
  return (
    <div>
        <img src={Symbols[position]} alt="slot symbol" />
    </div>
  );
};

export default SlotRow;
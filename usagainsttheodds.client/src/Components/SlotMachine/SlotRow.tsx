import rS from "../../Helpers/randomGeneratorHelper";
import { useState, useEffect } from "react";
type SlotRowProps = {
    isSpinning: boolean;
    currentPosition: (x:number) => void;
};

const SlotRow: React.FC<SlotRowProps> = ({isSpinning, currentPosition}) => {
    const [position, setPosition] = useState<number>(0);
    const Symbols: string[] = [
        "../../assets/images/SlotMachine/lemon.png",
        "../../assets/images/SlotMachine/watermelon.png",
        "../../assets/images/SlotMachine/cherry.png",
        "../../assets/images/SlotMachine/heart.png",
        "../../assets/images/SlotMachine/bell.png",
        "../../assets/images/SlotMachine/horseshoe.png",
        "../../assets/images/SlotMachine/clover.png",
        "../../assets/images/SlotMachine/diamond.png",
        "../../assets/images/SlotMachine/seven.png",
        "../../assets/images/SlotMachine/spin.png"
        ];


    useEffect(() => {
        if (isSpinning) {
            setPosition(rS.generate(0, Symbols.length - 2)); // Exclude the spinner image
            currentPosition(position);
        }
    }, [isSpinning]);

    if (isSpinning) {
      // while spinning show the spinner image without calling setState during render
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
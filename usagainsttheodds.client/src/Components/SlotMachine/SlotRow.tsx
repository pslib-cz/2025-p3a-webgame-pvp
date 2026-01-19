import rS from "../../Helpers/randomGeneratorHelper";
import { useState, useEffect } from "react";
import style from "../../assets/styles/Minigames/SlotMachine/SlotMachine.module.css";

//import lemon from "/images/SlotMachine/lemon.png";


type SlotRowProps = {
    isSpinning: boolean;
    currentPosition: number;
};

const SlotRow: React.FC<SlotRowProps> = ({isSpinning, currentPosition}) => {
    const [position, setPosition] = useState<number>(0);
    const Symbols: string[] = [
        "/images/SlotMachine/lemon.png",
        "/images/SlotMachine/melon.png",
        "/images/SlotMachine/cherry.png",
        "/images/SlotMachine/heart.png",
        "/images/SlotMachine/bell.png",
        "/images/SlotMachine/horseshoe.png",
        "/images/SlotMachine/clover.png",
        "/images/SlotMachine/diamond.png",
        "/images/SlotMachine/seven.png",
        "/images/SlotMachine/spin.png"
        ];


    if (isSpinning) {
      // while spinning show the spinner image without calling setState during render
      return (
          <img className={style.slot} src={Symbols[9]} alt="spinning"/>
      );
    }
    else {
        return (
            <img className={style.slot} src={Symbols[currentPosition]} alt="slot symbol" />
        );
    }
};

export default SlotRow;
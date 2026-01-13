import rS from "../../Helpers/randomGeneratorHelper";
import { useState, useEffect } from "react";
import style from "../../assets/styles/Minigames/SlotMachine/SlotMachine.module.css";

import lemon from "../../assets/images/SlotMachine/lemon.png";
import melon from "../../assets/images/SlotMachine/melon.png";
import cherry from "../../assets/images/SlotMachine/cherry.png";
import heart from "../../assets/images/SlotMachine/heart.png";
import bell from "../../assets/images/SlotMachine/bell.png";
import horseshoe from "../../assets/images/SlotMachine/horseshoe.png";
import clover from "../../assets/images/SlotMachine/clover.png";
import diamond from "../../assets/images/SlotMachine/diamond.png";
import seven from "../../assets/images/SlotMachine/seven.png";
import spin from "../../assets/images/SlotMachine/spin.png";


type SlotRowProps = {
    isSpinning: boolean;
    currentPosition: number;
};

const SlotRow: React.FC<SlotRowProps> = ({isSpinning, currentPosition}) => {
    const [position, setPosition] = useState<number>(0);
    const Symbols: string[] = [
        lemon,
        melon,
        cherry,
        heart,
        bell,
        horseshoe,
        clover,
        diamond,
        seven,
        spin
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
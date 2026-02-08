import { createContext } from "react";
import type { GameContextType } from "../Types/GameContextType";

export const GameContext = createContext<GameContextType | null>(null);
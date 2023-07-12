import { Pos } from "./pos";

export interface Card {
    id: string;
    pos: Pos;
    colour: string;
    isFlipped: boolean;
}

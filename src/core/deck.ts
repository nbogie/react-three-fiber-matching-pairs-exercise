import { Card } from "./card";
import { Pos } from "./pos";

export function prepareDeck(): Card[] {
    const locations = calculateLocationsForGrid(4);

    const colours = "tomato steelblue gray yellow orange white lime magenta"
        .split(" ")
        .flatMap((c) => [c, c])
        .sort(() => (Math.random() < 0.5 ? -1 : 1));
    const cardsNoPositions = colours.map((c, ix) => ({
        id: c + "_" + ix,
        colour: c,
        isFlipped: Math.random() < 0.5,
    }));
    return zipWith(cardsNoPositions, locations, (c, loc) => ({
        ...c,
        pos: loc,
    }));
}

function calculateLocationsForGrid(gridSize: number) {
    const locations: Pos[] = [];
    const y = 0;
    const range = gridSize - 1; //distance from grid centre to centre of leftmost column.
    for (let z = -range / 2; z <= range / 2; z++) {
        for (let x = -range / 2; x <= range / 2; x++) {
            locations.push([x, y, z]);
        }
    }
    return locations;
}

function zipWith<A, B, C>(
    arr1: A[],
    arr2: B[],
    combinerFn: (a: A, b: B) => C
): C[] {
    const outArr: C[] = [];
    for (let i = 0; i < arr1.length && i < arr2.length; i++) {
        outArr.push(combinerFn(arr1[i], arr2[i]));
    }
    return outArr;
}

import { Position } from "./types";

export const getPositionsById = (arr: string[], positions: Position[]) => {
  const result: Position[] = [];

  positions.forEach((p) => {
    if (arr.includes(p.id)) {
      result.push(p);
    }
  });

  return result;
};

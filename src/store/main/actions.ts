import { createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "utils";
import { Position } from "./types";
import { v4 as uuidv4 } from "uuid";

const getOpenPositions = async () => {
  await delay(1000);
  const result = Array.from({ length: 50 });
  return result.map((e, index) => {
    return {
      text: `open position-${index}`,
      index,
      id: uuidv4(),
    };
  });
};

const getClosedPositions = async () => {
  await delay(1000);
  const result = Array.from({ length: 50 });
  return result.map((e, index) => {
    return {
      text: `closed position-${index}`,
      index,
      id: uuidv4(),
    };
  });
};

export const getPositions = createAsyncThunk<{
  closed: Position[];
  open: Position[];
}>("main/getPositions", async () => {
  const [open, closed] = await Promise.all([
    getOpenPositions(),
    getClosedPositions(),
  ]);
  return { open, closed };
});

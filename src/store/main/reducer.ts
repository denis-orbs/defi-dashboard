/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { getPositions } from "./actions";
import { Position, State } from "./types";
import { getPositionsById } from "./utils";

const initialState = {
  openPositions: [],
  closedPositions: [],
  selectedPosition: null,
  positionsLoading: false,
  error: undefined,
  comparePositionsIds: [],
  compareMode: false,
  showOpenPositions: true,
  showCompare: false,
  comparePositions: [],
} as State;

const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setShowCompare(state, action: PayloadAction<boolean>) {
      state.showCompare = action.payload;
      if (action.payload) {
        state.comparePositions = getPositionsById(state.comparePositionsIds, [
          ...state.openPositions,
          ...state.closedPositions,
        ]);
      } else {
        state.comparePositions = [];
        state.comparePositionsIds = [];
      }
    },
    setShowOpenPositions(state, action: PayloadAction<boolean>) {
      state.showOpenPositions = action.payload;
    },
    toggleCompareMode(state, action: PayloadAction<boolean>) {
      state.compareMode = action.payload;
      if (!action.payload) {
        state.comparePositionsIds = [];
      }
    },
    selectPosition(state, action: PayloadAction<Position>) {
      state.selectedPosition = action.payload;
    },

    addToCompare(state, action: PayloadAction<string>) {
      if (state.comparePositionsIds.includes(action.payload)) {
        state.comparePositionsIds = state.comparePositionsIds.filter(
          (m) => m !== action.payload
        );
      } else {
        state.comparePositionsIds.push(action.payload);
      }
    },
    clearCompare(state, action: PayloadAction<string>) {
      state.comparePositionsIds = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPositions.fulfilled, (state, { payload }) => {
      state.positionsLoading = false;
      state.openPositions = payload.open;
      state.closedPositions = payload.closed;
    });
    builder.addCase(getPositions.rejected, (state, { error }) => {
      state.positionsLoading = false;
      state.error = error.message;
    });
    builder.addCase(getPositions.pending, (state, { payload }) => {
      state.positionsLoading = true;
    });
  },
});

export const {
  selectPosition,
  addToCompare,
  clearCompare,
  toggleCompareMode,
  setShowOpenPositions,
  setShowCompare
} = MainSlice.actions;

export function useMainStore(): State {
  const data = useSelector((state: RootState) => state.main);

  return data;
}

export default MainSlice.reducer;

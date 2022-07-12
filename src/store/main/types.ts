export type Position = {
  text: string;
  index: number;
  id: string;
};


export type State = {
  openPositions: Position[];
  closedPositions: Position[];
  selectedPosition: Position | null;
  error?: string;
  positionsLoading: boolean;
  comparePositionsIds: string[];
  comparePositions: Position[],
  compareMode: boolean;
  showOpenPositions: boolean;
  showCompare: boolean;
};

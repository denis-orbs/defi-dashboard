import { useMainStore } from "store/main/reducer";
import PositionsList from "./PositionsList";

function ClosedPositionsList() {
  const { closedPositions, positionsLoading, showOpenPositions } = useMainStore();
  if (showOpenPositions) {
    return null;
  }

  return (
    <PositionsList loading={positionsLoading} positions={closedPositions} />
  );
}

export default ClosedPositionsList;

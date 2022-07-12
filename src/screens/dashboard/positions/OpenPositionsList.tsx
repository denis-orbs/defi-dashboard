import { useMainStore } from "store/main/reducer";
import PositionsList from "./PositionsList";

function OpenPositionsList() {
  const { openPositions, positionsLoading, showOpenPositions } = useMainStore();
  if (!showOpenPositions) {
    return null;
  }

  return <PositionsList loading={positionsLoading} positions={openPositions} />;
}

export default OpenPositionsList;

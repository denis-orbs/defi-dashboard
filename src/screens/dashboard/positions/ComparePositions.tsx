import { Box } from "@mui/material";
import Popup from "components/Popup";
import { useDispatch } from "react-redux";
import { setShowCompare, useMainStore } from "store/main/reducer";
import PositionView from "./Position";



function ComparePositions() {
  const { comparePositions, showCompare } = useMainStore();
  const dispatch = useDispatch();

  const close = () => {
    dispatch(setShowCompare(false));
  };

  return (
    <Popup open={showCompare} onClose={close}>
      <Box>
        {comparePositions.map((position) => {
          return <PositionView position={position} />;
        })}
      </Box>
    </Popup>
  );
}

export default ComparePositions;

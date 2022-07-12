import { Box, styled } from "@mui/system";
import Switch from "components/Switch";
import React from "react";
import { useDispatch } from "react-redux";
import { setShowCompare, setShowOpenPositions, toggleCompareMode, useMainStore } from "store/main/reducer";

const StyledContainer = styled(Box)({
  marginBottom: 20,
  display: "flex",
  gap: 20,
});

function TogglePositions() {
  const { showOpenPositions, compareMode, comparePositionsIds } = useMainStore();
  const dispatch = useDispatch();

  const onSwitchChange = (value: boolean) => {
    dispatch(setShowOpenPositions(value));
  };

  const onCompareMode = (value: boolean) => {
    dispatch(toggleCompareMode(value));
  };

  const onCompare = () => {
    dispatch(setShowCompare(true))
  }

  return (
    <StyledContainer>
      <Switch
        checked={showOpenPositions}
        onChange={onSwitchChange}
        label="Positions"
      />
      <Switch checked={compareMode} onChange={onCompareMode} label="Compare" />
      {comparePositionsIds.length === 2 && (
        <button onClick={onCompare}>Go</button>
      )}
    </StyledContainer>
  );
}

export default TogglePositions;

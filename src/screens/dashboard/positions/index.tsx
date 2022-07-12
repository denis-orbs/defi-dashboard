import { styled } from "@mui/system";
import { Box } from "@mui/system";
import ClosedPositions from "./ClosedPositionsList";
import ComparePositions from "./ComparePositions";
import OpenPositions from "./OpenPositionsList";
import SelectedPosition from "./SelectedPosition";
import TogglePositions from "./TogglePositions";

const StyledContainer = styled(Box)({
  height: "calc(100% - 280px)",
  display: "flex",
  flexDirection: "column",
});

const StyledFlex = styled(Box)({
  display: "flex",
  gap: 20,
  flex: 1,
  alignItems: "stretch",
  height: "100%",
});


function Positions() {
  return (
    <StyledContainer>
      <ComparePositions />
    <TogglePositions />
      <StyledFlex>
        <OpenPositions />
        <ClosedPositions />

        <SelectedPosition />
      </StyledFlex>
    </StyledContainer>
  );
}

export default Positions;

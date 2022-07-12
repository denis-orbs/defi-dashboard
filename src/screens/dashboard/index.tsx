import { styled } from "@mui/system";
import useEffectOnce from "hooks/useEffectOnce";
import { useDispatch } from "react-redux";
import { getPositions } from "store/main/actions";
import { AppDispatch } from "store/store";
import { StyledScreen } from "styles";
import Positions from "./positions";
import Status from "./status";

const StyledContainer = styled(StyledScreen)({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  height: "100vh",
  paddingBottom: 30,
});

function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();

  useEffectOnce(() => {    
    dispatch(getPositions());
  });

  return (
    <StyledContainer>
      <Status />
      <Positions />
    </StyledContainer>
  );
}

export default Dashboard;

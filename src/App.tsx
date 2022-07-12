import { Box, styled } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import Dashboard from "screens/dashboard";
import Login from "./screens/login";


const StyledContainer = styled(Box)({
 
})

function App() {
  return (
    <StyledContainer>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<Dashboard />} /> 
      </Routes>
    </StyledContainer>
  );
}

export default App;

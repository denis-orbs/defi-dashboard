import React from "react";
import MuiSwitch from "@mui/material/Switch";
import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";

const StyledContainer = styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:10,
    ".MuiSwitch-root":{
        transform:'rotate(180deg)'
    }
});

interface Props {
  label?: string;
  checked: boolean;
  onChange: (value: boolean) => void
}
function Switch({ label, checked, onChange }: Props) {
  return (
    <StyledContainer>
    
      <MuiSwitch onChange={(e) => onChange(e.target.checked)} checked={checked} />
      {label &&  <Typography>{label}</Typography>}
    </StyledContainer>
  );
}

export default Switch;

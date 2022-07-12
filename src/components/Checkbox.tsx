import React from "react";
import MuiCheckbox from "@mui/material/Checkbox";
import { Box, styled } from "@mui/system";

const StyledContainer = styled(Box)({});

interface Props {
  checked: boolean;
  onChange: (value: boolean) => void;
}

function Checkbox({ checked, onChange }: Props) {

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        onChange(e.target.checked)
    }

  return (
    <StyledContainer>
      <MuiCheckbox
        checked={checked}
        onChange={change}
      />
    </StyledContainer>
  );
}

export default Checkbox;

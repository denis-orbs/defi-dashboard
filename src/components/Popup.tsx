import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { ClickAwayListener, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Box, styled } from "@mui/system";

export interface Props {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
  transparent?: boolean;
  id?: string;
  maxWidth?: number;
  hideCloseBtn?: boolean;
  title?: string;
}

const Popup = ({
  children,
  open,
  onClose,
  transparent,
  id,
  hideCloseBtn,
  maxWidth,
  title
}: Props) => {

  return (
    <Dialog
      id={id}
      onClose={onClose}
      open={open}
      PaperProps={{
        elevation: 0,
       style: {
        maxWidth: maxWidth || "unset",
        width: "fit-content",
        padding: 20
       }
      }}
      BackdropProps={{
        style: !transparent
          ? {}
          : {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
      }}
    >
      {!hideCloseBtn && (
        <StyledClose>
           <IconButton  onClick={onClose}>
          <CloseIcon style={{ color: "white" }} />
        </IconButton>
        </StyledClose>
      )}
      <ClickAwayListener onClickAway={onClose}>
        <StyledContent>
        {title && <StyledTitle>{title}</StyledTitle>}
         {children}
        </StyledContent>
      </ClickAwayListener>
    </Dialog>
  );
};

export default Popup;


const StyledTitle = styled(Typography)({
    fontSize: 24,
    fontWeight: 500,
    textAlign:'center',
    marginBottom: 10
})

const StyledClose = styled(Box)({
    position:'fixed',
    top:30,
    right: 30
})

const StyledContent = styled(Box)({
    background:'white'
})
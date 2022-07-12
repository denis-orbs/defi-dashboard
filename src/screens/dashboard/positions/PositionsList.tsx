import React, { useMemo } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import { Theme, Typography } from "@mui/material";
import { addToCompare, selectPosition, useMainStore } from "store/main/reducer";
import { useDispatch } from "react-redux";
import { styled } from "@mui/system";
import { Position } from "store/main/types";
import { StyledSkeleton } from "styles";
import Checkbox from "components/Checkbox";

const StyledContainer = styled(Box)({
  width: 300,
  overflow: "auto",
  height: "100%",
});

const StyledList = styled(List)({
  gap: 20,
  display: "flex",
  flexDirection: "column",
});

interface Props {
  positions: Position[];
  loading: boolean;
}

const StyledListLoader = styled(ListItem)({
  paddingTop: 0,
  paddingBottom: 0,
});

function PositionsList({ positions, loading }: Props) {
  return (
    <StyledContainer>
      <StyledList>
        {loading
          ? Array.from({ length: 4 }).map((_, index) => {
              return (
                <StyledListLoader key={index}>
                  <StyledSkeleton style={{ width: "100%", height: 40 }} />
                </StyledListLoader>
              );
            })
          : positions.map((position) => {
              return (
                <PositionListItem key={position.index} position={position} />
              );
            })}
      </StyledList>
    </StyledContainer>
  );
}

interface PositionListItemProps {
  position: Position;
}

const PositionListItem = ({ position }: PositionListItemProps) => {
  const { text, id } = position;
  const { selectedPosition, compareMode, comparePositionsIds } = useMainStore();
  const dispatch = useDispatch();
  const isSelected = useMemo(
    () => id === selectedPosition?.id,
    [selectedPosition]
  );

  const select = () => {
    if (!compareMode) {
      dispatch(selectPosition(position));
    }
  };

  const onCompare = (val: boolean) => {
    dispatch(addToCompare(id));
  };

  return (
    <StyledListItem onClick={select} selected={isSelected}>
      {compareMode && (
        <Checkbox
          checked={comparePositionsIds.includes(id)}
          onChange={onCompare}
        />
      )}
      <ListItemText>
        <Typography>{text}</Typography>
      </ListItemText>
    </StyledListItem>
  );
};

type StyledListItemProps = {
  selected: boolean;
};

const StyledListItem = styled(ListItem)<StyledListItemProps>(
  ({ selected }) => ({
    border: "1px solid black",
    background: selected ? "rgba(0,0,0, 0.4)" : "unset",
  })
);
export default PositionsList;

import { Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { PieChart } from "components/PieChart";
import Popup from "components/Popup";
import { useState } from "react";
import {
  assets,
  BaseStatusData,
  chains,
  markets,
  MarketsData,
  protocols,
} from "./mock-data";

const StyledContainer = styled(Box)({
  display: "flex",
  alignItems: "stretch",
  justifyContent: "space-between",
  gap: 30,
  "*": {
    fontSize: 14,
  },
});

function Status() {
  return (
    <StyledContainer>
      <MarketValueStatusBox data={markets} />
      <BaseStatusBox data={assets} />
      <BaseStatusBox data={chains} />
      <BaseStatusBox data={protocols} />
    </StyledContainer>
  );
}

const StyledBox = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: "15px 20px",
  justifyContent: "center",
  flex: 1,
});

const StyledBoxRow = styled(Box)({});

interface Props {
  data: BaseStatusData[];
}

const BaseStatusBox = ({ data }: Props) => {
  const [showPieChart, setShowPieChart] = useState(false);
    const labels = data.map(m => m.name)
    const percents= data.map(m => m.percent)
    const amounts = data.map(m => m.amount)
  return (
    <StyledBox>
        <button onClick={() => setShowPieChart(true)}>Pie</button>
      <Popup open={showPieChart} onClose={() => setShowPieChart(false)}>
        <PieChart amounts={amounts} labels={labels} datasetData={percents} />
      </Popup>
      {data.map((e) => {
        const { name, percent, amount } = e;
        return (
          <StyledBoxRow>
            <Typography>
              {name}-{`${percent}%`}-${amount.toLocaleString()}
            </Typography>
          </StyledBoxRow>
        );
      })}
    </StyledBox>
  );
};

const MarketValueStatusBox = ({ data }: { data: MarketsData }) => {
  const { title, wallets, apy, tvl } = data;
  return (
    <StyledBox>
      <Typography>{title}</Typography>
      <Box>
        {wallets.map((wallet) => {
          const { name, chains } = wallet;
          return <Typography>{`${name} (${chains} chains)`}</Typography>;
        })}
      </Box>
      <Box>
        <Typography>${tvl.toLocaleString()}</Typography>
      </Box>
      <Box>
        <Typography>{apy} APY</Typography>
      </Box>
    </StyledBox>
  );
};

export default Status;

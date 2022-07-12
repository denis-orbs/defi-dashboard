import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Skeleton from '@mui/material/Skeleton';

export const APP_GRID = 1400
export const LG_PADDING = 50
export const SM_PADDING = 20


export const StyledMainGrid = styled(Box)({
    maxWidth: APP_GRID,
    width: `calc(100% - ${LG_PADDING}px)`,
    marginLeft:'auto',
    marginRight:'auto'
})


export const StyledScreen = styled(StyledMainGrid)({
        paddingTop: 100
})


export const StyledSkeleton = styled(Skeleton)({

})
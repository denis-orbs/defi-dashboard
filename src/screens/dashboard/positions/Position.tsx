import { Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { Position } from 'store/main/types'

const StyledContainer = styled(Paper)({
    padding: 20,
    flex:1,
    overflow:'auto'
})  

interface Props{
    position?: Position | null
}

function PositionView({position}: Props) {

  return (
    <StyledContainer>
        <Typography>{position?.text}</Typography>
    </StyledContainer>
  )
}

export default PositionView
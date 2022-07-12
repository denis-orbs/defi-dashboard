import React from 'react'
import { useMainStore } from 'store/main/reducer'
import PositionView from './Position'



function SelectedPosition() {
    const {selectedPosition} = useMainStore()
  return (
    <PositionView position={selectedPosition} />
  )
}

export default SelectedPosition
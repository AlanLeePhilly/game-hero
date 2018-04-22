import React from 'react';
const ParticipantTile = props =>{
  return(
    <div className='participant-tile row'>
      <div className='column medium-6'>
        <h4> {props.data.name} </h4>
      </div>
    </div>
  )
}
export default ParticipantTile;
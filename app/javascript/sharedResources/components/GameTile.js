import React from 'react';
const GameTile = props =>{
  return(
    <div className='game-tile row'>
      <div className='column medium-6'>
        <img src={props.data.thumbnail_url}/>
        <h4> {props.data.name} </h4>
      </div>
      
      <div className='column medium-6'>
        <p>Min. Players: {props.data.min_players}</p>
        <p>Max. Players: {props.data.min_players}</p>
        <p>Est. Playtime: {props.data.playtime}</p>
      </div>
    </div>
  )
}
export default GameTile;
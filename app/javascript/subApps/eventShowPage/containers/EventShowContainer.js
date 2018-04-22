import React from 'react';
import { connect } from 'react-redux'

import { fetchEventShow } from '../actions/eventShow'
import GameTile from '../../../sharedResources/components/GameTile'
import ParticipantTile from '../../../sharedResources/components/ParticipantTile'

class EventShowContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchEventShow(this.props.params.id)
  }

  render(){  
    let event = this.props.event
    let availableGames = event.games.map(game =>{
      return(
        <GameTile
          key={game.id}
          data={game}
        />
      )
    })
    let participants = event.event_participants.map(participant =>{
      return(
        <ParticipantTile
          key={participant.participant.id}
          data={participant.participant}
        />
      )
    })
    
    
    return(
      <div className="EventShowContainer">
        <h1>{event.name}</h1>
        <h4>Host: {event.host.name}</h4>
        
        <div className='column medium-4'> 
          <h3> Available Games: </h3>
          {availableGames}
        </div>
        <div className='column medium-4'> 
          <h3> Participants: </h3>
          {participants}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEventShow: (id) => dispatch(fetchEventShow(id))
  }
}

const mapStateToProps = (state) => {
  return {
    event: state.eventShow.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShowContainer);
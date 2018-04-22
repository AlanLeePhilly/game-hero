import React from 'react';
import { connect } from 'react-redux'
import GameTile from '../../../sharedResources/components/GameTile'
import GameSearchContainer from '../../../sharedResources/containers/GameSearchContainer'

import {fetchGamesCollection} from '../actions/gamesCollection'

class GamesCollectionContainer extends React.Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount(){
    this.props.fetchGamesCollection(this.props.params.id)
  }

  render(){  
    let games = this.props.games.map(game => {
      return(
        <GameTile
          key={game.id}
          data={game}
        />
      )
    })

    return(
      <div className="GamesCollectionContainer">
        <h1> collection</h1>
        <div className='columns medium-4'>
          {games}
        </div>
        <div className='columns medium-4'>
          <h3>Add a Game</h3>
          <GameSearchContainer
            
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGamesCollection: (id) => dispatch(fetchGamesCollection(id))
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.gamesCollection.games
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesCollectionContainer);
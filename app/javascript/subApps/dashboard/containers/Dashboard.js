import React from 'react';
import { connect } from 'react-redux'

import { fetchCurrentUser } from '../../../sharedResources/actions/currentUser'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchCurrentUser()
  }

  render(){  
    let userName = this.props.currentUser.name
    return(
      <div className="Dashboard">
        <h1>Greetings, {userName}!</h1>
        <div>View Games Collection</div>
        <div>View Upcomming Events</div>
        <div>Join Existing Event</div>
        <div>Create New Event</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
import React from 'react';
import { Link } from 'react-router'
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
    let currentUser = this.props.currentUser
    return(
      <div className="Dashboard">
        <h1>Greetings, {currentUser.name}!</h1>
        <Link to={`users/${currentUser.id}/collection`}>View Games Collection</Link>
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
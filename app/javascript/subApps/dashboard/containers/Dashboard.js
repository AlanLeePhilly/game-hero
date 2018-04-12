import React from 'react';
import { connect } from 'react-redux'

import { fetchCurrentUser } from ''

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    
  }


  render(){  
    
    return(
      <div className="Dashboard">Tester
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

  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
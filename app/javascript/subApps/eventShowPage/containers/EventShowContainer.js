import React from 'react';
import { connect } from 'react-redux'

import { fetchEventShow } from '../actions/eventShow'


class EventShowContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchEventShow(this.props.params.id)
  }

  render(){  
    let event = this.props.event
    return(
      <div className="EventShowContainer">
        <h1>{event.name}</h1>
        <h4>Host: {event.host.name}</h4>
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
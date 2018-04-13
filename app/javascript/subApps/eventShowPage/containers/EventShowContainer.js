import React from 'react';
import { connect } from 'react-redux'

import SomeContainer from './SomeContainer'

import {setThing, setAnotherThing} from './actions/thingActions'


class EventShowContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.someFunction = this.someFunction.bind(this)
  }
  someFunction(stuff){
    this.props.setDevice(stuff)
  }

  render(){  
    
    return(
      <div className="EventShowContainer">
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setThing: (name) => dispatch(setThing(name)),
    setAnotherThing: (bool) => dispatch(setAnotherThing(bool))
  }
}

const mapStateToProps = (state) => {
  return {
    aPiece: state.EventShowContainer.aPiece,
    anOther: state.EventShowContainer.anOther
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShowContainer);
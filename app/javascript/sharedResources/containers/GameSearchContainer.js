import React from 'react';
import { connect } from 'react-redux'
import { setQuery, fetchSearchResults } from '../actions/gameSearch'
class GameSearchContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleSubmit(e) {
    e.preventDefault()  
    this.props.fetchSearchResults(this.props.query)
  }
  
  handleChange(e) {
    this.props.setQuery(e.target.value)
  }

  render(){  

  
  
    // let results = this.props.results.map(result => {
    //   return(
    //     <GameTile
    //       key={result.id}
    //       data={result}
    //     />
    //   )
    // })
    
    return(
      <div className="external-search-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input type="text" value={this.props.query} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setQuery: (name) => dispatch(setQuery(name)),
    fetchSearchResults: (query) => dispatch(fetchSearchResults(query))
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.gameSearch.query,
    results: state.gameSearch.results
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSearchContainer);
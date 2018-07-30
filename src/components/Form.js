import React, { Component } from 'react'
import { connect } from 'react-redux'
import Answer from './Answer'
import { createFetch } from '../actions/weatherActions'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      address:''
    }
  }

  handleChange = address => {
   this.setState({ address });
 };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createFetch(this.state);
  }

  render () {
    return (
      <div>
        <h1>Should I Bike Today?</h1>
        <br />
        <h1>Add Origin</h1>
        <input type="time"></input>
        {/* <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
          <input
          {...getInputProps({
          placeholder: 'Search Places ...',
          className: 'location-search-input',
          })}
          />
          <div className="autocomplete-dropdown-container">
          {loading && <div>Loading...</div>}
          {suggestions.map(suggestion => {
          const className = suggestion.active
          ? 'suggestion-item--active'
          : 'suggestion-item';
          // inline style for demonstration purpose
          const style = suggestion.active
          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
          : { backgroundColor: '#ffffff', cursor: 'pointer' };
          return (
          <div
          {...getSuggestionItemProps(suggestion, {
          className,
          style,
          })}
          >
          <span>{suggestion.description}</span>
          </div>
          );
          })}
          </div>
            </div>
          )}
        </PlacesAutocomplete> */}
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   origin: state.origin,
//   destination: state.destination
// })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createFetch: (location) => dispatch(createFetch)
//   }
// }
console.log(connect)
export default connect(null, { createFetch })(Form)

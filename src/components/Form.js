import React, { Component } from 'react'
import { connect } from 'react-redux'
import Answer from './Answer'
import { createFetch } from '../actions/weatherActions'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      origin: {
        name: '',
        street_address: '',
        city: '',
        state: '',
        zip_code: '',
        googleMapLink: ''
      },
      destination: {
        name: '',
        street_address: '',
        city: '',
        state: '',
        zip_code: '',
        googleMapLink: ''
      }
    }
  }

  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

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
        <form onSubmit={this.handleSubmit}>
          <input id="autocomplete"
            className="input-field"
            ref="input"
          type="text"/>
          {/* // this is the input field used specifically for autocomplete
            // note that it doesn't respond to changes in state,
            // nor does it change state
            // it's just talking to the Google Maps API
            // I've given it an id so we can reference it when we
          // instantiate the Google Autocomplete box */}
          <input
            name={"name"}
            value={this.state.name}
            placeholder={"Name"}
            onChange={this.handleChange}
          />
          <input
            name={"street_address"}
            value={this.state.street_address}
            placeholder={"Street Address"}
            onChange={this.handleChange}
          />
          <input
            name={"city"}
            value={this.state.city}
            placeholder={"City"}
            onChange={this.handleChange}
          />
          <input
            name={"state"}
            value={this.state.state}
            placeholder={"State"}
            onChange={this.handleChange}
          />
          <input
            name={"zip_code"}
            value={this.state.zip_code}
            placeholder={"Zipcode"}
            onChange={this.handleChange}
          />
          <br />

          <h1>Add Destination</h1>
            <input id="autocomplete"
              className="input-field"
              ref="input"
            type="text"/>
            {/* // this is the input field used specifically for autocomplete
              // note that it doesn't respond to changes in state,
              // nor does it change state
              // it's just talking to the Google Maps API
              // I've given it an id so we can reference it when we
            // instantiate the Google Autocomplete box */}
            <input
              name={"name"}
              value={this.state.name}
              placeholder={"Name"}
              onChange={this.handleChange}
            />
            <input
              name={"street_address"}
              value={this.state.street_address}
              placeholder={"Street Address"}
              onChange={this.handleChange}
            />
            <input
              name={"city"}
              value={this.state.city}
              placeholder={"City"}
              onChange={this.handleChange}
            />
            <input
              name={"state"}
              value={this.state.state}
              placeholder={"State"}
              onChange={this.handleChange}
            />
            <input
              name={"zip_code"}
              value={this.state.zip_code}
              placeholder={"Zipcode"}
              onChange={this.handleChange}
            />
            <br />

            <input type="submit" value='Submit' />
          </form>
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

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Answer from './Answer'
import { createFetch } from '../actions/weatherActions'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      origin: '1311 Putnam Ave',
      departure_time: '',
      destination: '81 Prospect St'
    }
  }

  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.departure_time);

    const hour = this.state.departure_time.slice(0,2)
    console.log(hour);
    const min = this.state.departure_time.slice(3,5)
    console.log(min);

    const today = new Date();

    const myToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hour, min, 0).toString().split('-')

    console.log(myToday[0]);

    const unix_time = Date.parse(myToday[0])
    console.log(unix_time);

    this.state.departure_time = unix_time

    this.props.createFetch(this.state);
  }

  render () {
    return (
      <div>
        <h1>Should I Bike Today?</h1>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label> Origin: </label>
            <input onChange={this.handleChange}
              type="text"
              name="origin"
              value={this.state.origin}
            />
          </div>
          <br />
          <div>
            <label> Departure Time: </label>
            <input onChange={this.handleChange}
              type="time"
              name="departure_time"
              value={this.state.departure_time}
            />
          </div>
          <br />
          <div>
            <label> Destination: </label>
            <input onChange={this.handleChange}
              type="text"
              name="destination"
              value={this.state.destination}
            />
          </div>
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

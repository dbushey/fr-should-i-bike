import React, { Component } from 'react'
import { connect } from 'react-redux'
import Answer from './Answer'
import { createFetch } from '../actions/weatherActions'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      origin: '1311 Putnam Ave',
      destination: '81 Prospect St',
      departure_time: '',
      isSubmitted: false
    }
  }

  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }


  handleSubmit = (e) => {
    e.preventDefault()



    // Parsing time to unix epoch
    const hour = this.state.departure_time.slice(0,2)
    const min = this.state.departure_time.slice(3,5)
    const today = new Date();
    const myToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hour, min, 0).toString().split('-')
    let unix_time = Date.parse(myToday[0])
    unix_time = unix_time.toString().slice(0,8)
    unix_time = Number(unix_time)

    // console.log(this.state.departure_time);
    // console.log(hour);
    // console.log(min);
    // console.log(myToday[0]);
    console.log(typeof unix_time);
    const data = {
      ...this.state,
      departure_time: unix_time
    }

    this.setState({
      isSubmitted: !this.state.isSubmitted,
      origin: this.state.destination,
      destination: this.state.origin,
      departure_time: ''
    })
    //
    // document.getElementById("wayIn").value =
    // "Check the weather for your way back";
    //

    this.props.createFetch(data);
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
            <label> Destination: </label>
            <input onChange={this.handleChange}
              type="text"
              name="destination"
              value={this.state.destination}
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

          <input type="submit"

            value= {this.state.isSubmitted ? "Check the weather for your way out" : "Check the weather for your way in"}
          />
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

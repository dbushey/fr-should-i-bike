import React, { Component } from 'react'

import Answer from './Answer'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      origin: '1311 Putnam Ave',
      destination: '81 Prospect St',
      showAnswer: false,
      final_answer: null,
      summary: null,
      icon: null
    }
  }

  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // this.setState({ showAnswer: true });

    console.log(this.state);

    const url = `http://localhost:3000/direction?origin=${this.state.origin.split(' ').join('+')}&destination=${this.state.destination.split(' ').join('+')}&departure_time=now
    `
    return fetch(url)
    .then(resp => resp.json())
    .then(result => {

      this.setState({
        showAnswer: true,
        final_answer: result.final_answer,
        summary: result.origin_summary,
        icon: result.origin_icon
      })
      console.log(this.state);
    })

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
            <label> Destination </label>
            <input onChange={this.handleChange}
              type="text"
              name="destination"
              value={this.state.destination}
            />
          </div>
          <br />
          <input type="submit" value='Submit' />
          { this.state.showAnswer ? <Answer /> : null }
        </form>
      </div>
    )
  }
}


export default Form

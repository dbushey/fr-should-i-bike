import React, { Component } from 'react'
import { Connect } from 'react-redux'
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

    this.props.createFetch();
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

const mapStateToProps = state => ({
  origin: state.origin,
  destination: state.destination
})

export default connect(mapStateToProps, { createFetch })(Form)

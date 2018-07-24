import React, {Component} from 'react'


class Form extends Component {
  constructor(){
    super()
    this.state = {
      origin: '',
      destination: ''
    }
  }



  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.state);

    const url = `http://localhost:3000/direction?origin=${this.state.origin.split(' ').join('+')}&destination=${this.state.destination.split(' ').join('+')}&departure_time=now
    `
    return fetch(url)
    .then(resp => resp.json())
    .then(result => {
      console.log(result)
         
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
            </form>
          </div>


    )
  }
}


export default Form

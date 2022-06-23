import React, { Component } from 'react'
import '../App.css'

export default class PersonCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: props.age
    }
  }
  
  render() {
    const birthday = () => {
      return this.setState({age: this.state.age + 1})
    }
    const {firstName, lastName, hairColor} = this.props
    const {age} = this.state
    return (
      <div className='card'>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair color: {hairColor}</p>
        <div>
          <button className='btn btn-primary' onClick={() => birthday()}>B-day button for {firstName} {lastName}</button>
        </div>
      </div>
    )
  }
}
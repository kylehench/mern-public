import React, { Component } from 'react'
import '../App.css'

export default class PersonCard extends Component {
  
  render() {
    const {firstName, lastName, age, hairColor} = this.props
    return (
      <div className='card'>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair color: {hairColor}</p>
      </div>
    )
  }
}
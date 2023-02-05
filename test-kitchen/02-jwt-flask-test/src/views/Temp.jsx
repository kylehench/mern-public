import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PersonForm from '../components/PersonForm'
import PersonList from '../components/PersonList'

const Temp = (props) => {

  useEffect(() => {
    axios.get('http://localhost:8000/',
    {withCredentials: true, origin: 'http://localhost:8000'})
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      API test (see console)
    </div>
  )
}

export default Temp
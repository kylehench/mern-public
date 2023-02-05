import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PersonForm from '../components/PersonForm'
import PersonList from '../components/PersonList'

const Temp = (props) => {
  const [result, setResult] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/',
    {withCredentials: true})
      .then((res) => {
        console.log(res)
        setResult(JSON.stringify(res.data))
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      API test (see console)
      {result}
    </div>
  )
}

export default Temp
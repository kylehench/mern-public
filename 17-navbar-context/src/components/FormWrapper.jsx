import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const FormWrapper = () => {
  const { name, setName } = useContext(UserContext)

  return (
    <form className='m-4'>
      <label htmlFor="">Your Name:</label>
      <input
        type="text"
        className="form-control"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </form>
  )
}

export default FormWrapper
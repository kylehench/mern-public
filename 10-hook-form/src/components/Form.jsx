import React, { useState , useEffect } from 'react'

const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordMatches, setPasswordMatches] = useState('')
  const [passwordMatchesStyle, setPasswordMatchesStyle] = useState('')

  const createUser = (e) => {
    e.preventDefault()
    if (password != confirmPassword ) return
    const newUser = { firstName, lastName, email, password}
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  const checkMatch = () => {
    if (confirmPassword.length == 0) {
      setPasswordMatches('')
      setPasswordMatchesStyle('pe-2')
      return
    }
    if (password === confirmPassword) {
      setPasswordMatches('Yes')
      setPasswordMatchesStyle('badge bg-success')
    } else {
      setPasswordMatches('No')
      setPasswordMatchesStyle('badge bg-danger')
    }
  }

  useEffect(() => {checkMatch()}, [password]);
  useEffect(() => {checkMatch()}, [confirmPassword]);

  return (
    <form action="createUser" onSubmit={ createUser } className='mt-3'>
      <div>
        <label>First Name: </label> 
        <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } className="form-control mb-2"/>
      </div>
      <div>
        <label>Last Name: </label> 
        <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } className="form-control mb-2"/>
      </div>
      <div>
        <label>Email Address: </label> 
        <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } className="form-control mb-2"/>
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password}
          onChange={ (e) => {
            setPassword(e.target.value)
            
          }
        }
        className="form-control mb-2"/>
      </div>
      <div>
        <label>Confirm Password: </label>
        <input type="password" value={confirmPassword}
          onChange={ (e) => {
            setConfirmPassword(e.target.value)
            }
          }
          className="form-control mb-2"/>
      </div>
      <input type="submit" value="Create User" className="btn btn-primary" />
      <table className='mt-4'>
        <tr>
          <td className='pe-2'>First Name:</td>
          <td>{firstName}</td>
        </tr>
        <tr>
          <td className='pe-2'>Last Name:</td>
          <td>{lastName}</td>
        </tr>
        <tr>
          <td className='pe-2'>Email:</td>
          <td>{email}</td>
        </tr>
        <tr>
          <td className='pe-2'>Password:</td>
          <td>{password}</td>
        </tr>
        <tr>
          <td className='pe-2'>Confirm Password Matches:</td>
          <td className={ passwordMatchesStyle }>{passwordMatches}</td>
        </tr>
      </table>
    </form>
  )
}

export default Form
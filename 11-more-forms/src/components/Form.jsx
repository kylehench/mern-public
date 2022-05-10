import React, { useState , useEffect } from 'react'

const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordMatches, setPasswordMatches] = useState('')
  const [passwordMatchesStyle, setPasswordMatchesStyle] = useState('')
  
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const createUser = (e) => {
    e.preventDefault()
    if (password !== confirmPassword ) return
    const newUser = { firstName, lastName, email, password}
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  const handleFirstName = (e) => {
    const value = e.target.value
    setFirstName(value)
    value.length < 2 && value.length !== 0 ? setFirstNameError('First Name must be at least 2 characters') : setFirstNameError('')
  }

  const handleLastName = (e) => {
    const value = e.target.value
    setLastName(value)
    value.length < 2 && value.length !== 0 ? setLastNameError('Last Name must be at least 2 characters') : setLastNameError('')
  }
  
  const handleEmail = (e) => {
    const value = e.target.value
    setEmail(value)
    value.length < 5 && value.length !== 0 ? setEmailError('Email must be at least 5 characters') : setEmailError('')
  }

  const handlePassword = (e) => {
    const value = e.target.value
    setPassword(value)
    const msg = []
    if (value.length < 8 && value.length !== 0 ) { msg.push('Password must be at least 8 characters') }
    if (value !== confirmPassword) {
      msg.push(<br/>)
      msg.push('Passwords must match')
    }
    setPasswordError(msg)
  }

  const checkMatch = () => {
    if (confirmPassword.length === 0) {
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

  useEffect(() => {checkMatch()}, [password])
  useEffect(() => {checkMatch()}, [confirmPassword]);

  return (
    <form action="createUser" onSubmit={ createUser } className='mt-3'>
      <div>
        <label>First Name: </label> 
        <input type="text" value={firstName} onChange={ handleFirstName } className="form-control mb-2"/>
        { firstNameError ? <p>{ firstNameError }</p> : '' }
      </div>
      <div>
        <label>Last Name: </label> 
        <input type="text" value={lastName} onChange={ handleLastName } className="form-control mb-2"/>
        { lastNameError ? <p>{ lastNameError }</p> : '' }
      </div>
      <div>
        <label>Email Address: </label> 
        <input type="text" value={email} onChange={ handleEmail } className="form-control mb-2"/>
        { emailError ? <p>{ emailError }</p> : '' }
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password}
          onChange={ handlePassword }
        className="form-control mb-2"/>
        { passwordError ? <p>{ passwordError }</p> : '' }
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
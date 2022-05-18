import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Navbar = () => {
  const userContext = useContext(UserContext)
  
  return (
    <div
      className='mb-2 py-2 ps-4'
      style = {{
        color: 'white',
        backgroundColor: '#8c30c5'
      }}>
        { userContext.name==='' ? <span>&nbsp;&nbsp;</span> : userContext.name }
    </div>
  )
}

export default Navbar

// import MyContext from './context/MyContext';
// …
// const context = useContext(MyContext);
// …
// hello {context}
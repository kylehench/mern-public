import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import io from 'socket.io-client'

const Chat = () => {
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState(() => io(':8000'))
  const [username, setUsername] = useState('')
  const [userMsg, setUserMsg] = useState('')
  const [enteredChat, setEnteredChat] = useState(false)
  const [chatContent, setChatContent] = useState([])
  const bottomRef = useRef(null)
  
  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    socket.on('welcome', data => console.log(data))
    socket.on('userJoins', data => {
      setChatContent(chatContent => [...chatContent, data])
    })
    socket.on('chatContent', data => setChatContent(data))
    socket.on('msg', data => {
      setChatContent(chatContent => [...chatContent, data])
    })
    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true)
  }, [])

  useEffect(() => {
    // scroll to bottom when chatContent changes
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [chatContent])
  
  return (
    <div className='container d-flex flex-column' style={{height: '100vh'}}>
      <div className="card m-2 p-2">
        <h2 style={{textAlign: 'center'}}>MERN Chat</h2>
      </div>
        { !enteredChat ? <div className="card m-2 p-4">

          {/* panel for user to enter username */}
          <h3>Get started right now!</h3>
          <form onSubmit={e => {
            e.preventDefault()
            socket.emit('userJoins', username)
            setEnteredChat(true)
          }}>
            <p className='mt-3'>I want to start chatting with the name...</p>
            <div className="d-flex justify-content-between">
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} className='form-control input-lg me-3' />
                <input type="submit" value="Start Chatting" className='btn btn-primary' />
            </div>
          </form>

        </div> : <>

          {/* panel for messages + write message */}
          <div className="card m-2 p-4" style={{flex: '1', overflow:'auto'}}>
            {chatContent.map((item, index) => <>
              {item.username && <div key={index} className={`d-flex justify-content-${item.username!==username ? 'start' : 'end'}`}>
                <div className={`card col-9 my-2 p-2 ${item.username!==username ? 'bg-light' : 'bg-primary text-white'}`}>
                  <span><b>{item.username===username ? 'You' : item.username}</b> said:</span>
                  <div>{item.msg}</div>
                </div>
              </div>}

              {item.userJoins && <div key={index} className='d-flex justify-content-end my-2'>
                <i>{item.userJoins.username} has joined the chat.</i>
              </div>}

            </>)}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={e => {
              e.preventDefault()
              socket.emit('msg', {username: username, msg: userMsg})
              setChatContent([...chatContent, {username: username, 'msg': userMsg}])
              setUserMsg('')
            }} className='mx-2 mb-4 px-2'>
              <div className='my-2'>Write Message:</div>
              <div className="d-flex justify-content-between">
                  <input type="text" value={userMsg} onChange={e => setUserMsg(e.target.value)} className='form-control input-lg me-3' />
                  <input type="submit" value="Start Chatting" className='btn btn-primary' />
              </div>
            </form>
        
        </> }
    </div>
  )
}

export default Chat
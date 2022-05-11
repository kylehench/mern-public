import React from 'react'

const BoxDisplay = (props) => {
  return (
    <div className='mt-4 d-flex flex-wrap'>
      { props.colors.map( (obj, index) => 
	      <div
          key={ index }
          style={{
            height: obj.size,
            width: obj.size,
            backgroundColor: obj.color,
            margin: '5px 5px 0px 0px'
          }}>
          </div>
        )
      }
    </div>
  )
}

export default BoxDisplay
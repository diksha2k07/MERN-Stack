import React, { useState } from 'react'
const Services = () => {
  const [show,setShow] = useState(true);
  const toggleShow = ()=>{
    setShow(show===true?false:true)
  }
  return (
    <div>
      <button onClick={toggleShow}>{show?"Hide":"Show"}</button>
      {show && <p>This is the services page.</p>}
    </div>
  )
}

export default Services

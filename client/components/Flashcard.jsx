
import React, { useState, useEffect } from 'react';
const Flashcard = (props) => {
  const [flip,setFlip] = useState(false)

 

  return (
    
      <div className = {`card ${flip ? 'flip' : ''}`} onClick={()=>setFlip(!flip)}>
        {/* {flip ? props.a : props.q } */}

        <div className = "front">
          {props.q}
        </div>

        <div className = "back" >
            {props.a}
        </div>

      </div>
     
  )

}

export default Flashcard
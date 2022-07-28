
import React, { useState, useEffect } from 'react';
import '../stylesheets/styles.css'
const Flashcard = (props) => {
  const [flip,setFlip] = useState(false)

  return (
  
      <div className = {`cardz ${flip ? 'flip':''}`} onClick={()=>setFlip(!flip)}>
       
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
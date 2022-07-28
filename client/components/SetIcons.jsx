import React from 'react'
import "../stylesheets/styles.css"
import { useParams, useNavigate } from 'react-router-dom';

const SetIcons = (props) => {

    
console.log(props)


  return (
    <div>
      <div
        className='stack'
     
      >
        {' '}
        {props.nam}{' '}
      </div>
    </div>
  );
}

export default SetIcons
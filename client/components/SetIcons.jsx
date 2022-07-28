import React from 'react'
import "../stylesheets/styles.css"
import { useParams, useNavigate } from 'react-router-dom';

const SetIcons = (props) => {


console.log(props)
const navigate = useNavigate();

  return (
    <div>
      <div
        className='stack'
     onClick = {()=> navigate(`/reviewset/${props.nam}`)}
      >
        {' '}
        {props.nam}{' '}
      </div>
    </div>
  );
}

export default SetIcons
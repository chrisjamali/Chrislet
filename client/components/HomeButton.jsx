import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
const HomeButton = () => {
    const navigate = useNavigate()
  return (
    <div> 
        <button className ="homebtn" onClick = {()=> navigate('/') }>
            Chrislet
        </button>
    </div>
  )
}

export default HomeButton
import React, {useState} from 'react'
import "../stylesheets/styles.css"
import { useParams, useNavigate } from 'react-router-dom';

const SetIcons = (props) => {


console.log(props)
const navigate = useNavigate();
const [clicked,setClick] = useState(false)




   const del = async () => {
       try{
          
   await fetch(`/api/deleteStack/${props.nam}`,{ method: 'DELETE' , body: null})

 setClick(false);
}catch(error){
    console.log(error)
}
}
if(clicked)del()
  return (
      
    <div>
      <div style={{ display: 'flex', alignSelf :"center", width: '80%' , justifyContent: 'flex-end', marginTop:'.5rem'} }>
        <button className='cancel-button' onClick={(e)=>{
         e.preventDefault()
         console.log(clicked)
             setClick(true)}} > x</button>{' '}
      </div>
      <div
        className='stack'
        onClick={() => navigate(`/reviewset/${props.nam}`)}
      >
        <p style={{ display: 'flex', alignSelf: 'center' }}> {props.nam} </p>{' '}
      </div>
    </div>
  );
}

export default SetIcons
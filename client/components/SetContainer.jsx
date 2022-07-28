import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../stylesheets/styles.css';
import SetIcons from './SetIcons.jsx';
import CreateSet from '../pages/CreateSet';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
const SetContainer = () => {
  const [sets, setSets] = useState([]);
  const [ids, setIDs] = useState([])
  // GET request using fetch inside useEffect React hook
  // const getSets = async () => {
    
  // };

  useEffect(() => {
 axios('/api/sets').then(res=> res.json()).then((data) => {
      // console.log("FROM THEN HANDLER",data.data._id)
        // console.log('RESPOSNE',data.name)
       console.log(data)
        // setIDs(data.data._id)
        // console.log('ID why arent u loading',data.map(x=> x.name))
        return setSets(data)
        //  console.log('this is my STATE', state)
      });
  }, []);
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // console.log('SETS',sets)
  // key = {set._id}
const allSets= sets.map((s,i) =>{return  < SetIcons nam = {s.name}  key ={`setz${i}`} /> });

  return (
    <div>
      
      <div className= "setContainer" >
  

           {allSets}

         </div>

    </div>
  );
};

export default SetContainer;

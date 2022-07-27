import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../stylesheets/styles.css';
import SetIcons from './SetIcons.jsx';

const SetContainer = () => {
  const [sets, setSets] = useState([]);

  // GET request using fetch inside useEffect React hook
  // const getSets = async () => {
    
  // };

  useEffect( () => {
 axios('/api/sets').then((data) => {
      console.log("FROM THEN HANDLER",data.data)
        // console.log('RESPOSNE',data.name)
        console.log(sets)
        return setSets(data.data)
        //  console.log('this is my STATE', state)
      });
  }, []);
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  console.log('SETS',sets)
const allSets= sets.map(set => { return < SetIcons nam = {set.name} key = {set._id}/> });

  return (
    <div>
      
      <div className= "setContainer" >
  

           {allSets}

         </div>

    </div>
  );
};

export default SetContainer;

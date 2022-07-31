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
  // const [ids, setIDs] = useState([])
  // // GET request using fetch inside useEffect React hook
  // // const getSets = async () => {

  // // };

  useEffect(() => {
    fetch('/api/sets')
      .then((res) => res.json())
      .then((data) => {
      console.log(data)
        return setSets(data);
      });
  }, []);
  // empty dependency array means this effect will only run once (like componentDidMount in classes)

  // key = {set._id}
  const allSets = sets.map((set) => {
    return <SetIcons nam={set.name} key = {set._id} />;
  });

  return (
    <div>
      <div className='setContainer'>{allSets}</div>
    </div>
  );
};

export default SetContainer;

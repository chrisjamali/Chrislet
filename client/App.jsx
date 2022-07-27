
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import SetContainer from './components/setContainer.jsx';
import AddSetButton from './components/AddSetButton.jsx';
import CreateSet from './CreateSet.jsx';

const App = () => {

  return (
    <div>
        <h1> THIS RENDERING FROM REACT </h1>
          <SetContainer/>
          <AddSetButton/>


    </div>
  )
}

export default App



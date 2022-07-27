
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import SetContainer from './components/setContainer.jsx';
import AddSetButton from './components/AddSetButton.jsx';
import CreateSet from './pages/CreateSet.jsx';
import MainContainer from './MainContainer.jsx';
import './stylesheets/styles.css';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div>
      <span>
        <h1> Chrislet </h1>
      </span>
      <span className='centered'>
        <AddSetButton />
      </span>
      <span className='centered'>
        <MainContainer />
      </span>
    </div>
  );
}

export default App



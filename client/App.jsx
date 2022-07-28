import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,useNavigate
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import SetContainer from './components/setContainer.jsx';
import AddSetButton from './components/AddSetButton.jsx';
import CreateSet from './pages/CreateSet.jsx';
import MainContainer from './MainContainer.jsx';
import './stylesheets/styles.css';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage.jsx';
import ReviewSet from './pages/ReviewSet.jsx'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import HomeButton from './components/HomeButton.jsx';
const App = () => {
 
  return (
    <div>
      {/* <HomePage /> */}
      {/* <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home' onClick={() => navigate('/')}>
            C h r i s l e t{' '}
          </Navbar.Brand>
          <HomeButton/>
        </Container>
      </Navbar> */}

      <Router>
        <Routes>
          <Route
            exact
            path='/createset/:setName/:setId'
            element={<CreateSet />}
          />
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/reviewset/:setId' element={<ReviewSet />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

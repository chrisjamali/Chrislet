import React, { useState, setShow, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Flashcard from '../components/Flashcard.jsx'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const ReviewSet = (props) => {
    const [cards,setCards] = useState([])
    const [name,getName] = useState('')
   const {setId} = useParams()
   const navigate = useNavigate();

    //  useEffect(() => {
    //    fetch(`/api/set/${setId}`).then(res=> res.json()).then((data) => {
    //      console.log('FROM THEN REVIEW HANDLER', data);
    //      // console.log('RESPOSNE',data.name)
       
    //      return getName(data.name);
    //      //  console.log('this is my STATE', state)
    //    });
    //  }, []);
  
      useEffect(() => {
        fetch(`/api/getAllFlashcards/${setId}`)
          .then((res) => res.json())
          .then((data) => {
            console.log('FROM THEN REVIEW HANDLER', data);
            // console.log('RESPOSNE',data.name)

            return setCards(data);
            //  console.log('this is my STATE', state)
          });
      }, []);
     console.log('cards state',cards)
// const ques = cards.map(x=>x.question);
// const ans = cards.map((x) => x.answer);
const allCards = cards.map(x => <Flashcard q ={x.question} a = {x.answer} key = {x._id} setId = {setId}/>);
console.log(allCards)
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand style = {{cursor : 'pointer', wordSpacing: '.5rem', letterSpacing: '.5rem'}} onClick={() => navigate('/')}>
            Home
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      <h1 style={{ margin: '1em' }}>{setId} Deck </h1>
      <div className='centered'>
        <div className='gridContainer'>{allCards}</div>
      </div>
    </div>
  );
};

export default ReviewSet;

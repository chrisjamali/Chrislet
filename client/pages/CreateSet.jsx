import React, { useState, setShow, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FlashcardInput from '../components/FlashcardInput';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import '../stylesheets/styles.css';

const CreateSet = () => {

  const { setName } = useParams();
  const { setId } = useParams();
  const [count, setCount] = useState(1);

  const inputs = [];

// const flashcardPost = async() =>{


// const req = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'Application/JSON',
//   },
//   body: JSON.stringify({ name: input }),
// };
// const res = await fetch(`/api/newflashcard/:${setId}`);

// }

  while (inputs.length !== count) {
    inputs.push(<FlashcardInput set_id={setId}  />);
  }
  return (
    <div>
      <h1> {setName} </h1>
      <Container style = {{display:'grid', gap:'1em'}}>{inputs}</Container>
      <div
        className='centered'
        style={{ margin: '1em' }}
        onClick={() => setCount(count + 1)}
      >
        <Button variant='success'> + </Button>
      </div>
    </div>
  );
};

export default CreateSet;

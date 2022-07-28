import React, { useState, setShow, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FlashcardInput from '../components/FlashcardInput';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router-dom';
import '../stylesheets/styles.css';


const CreateSet = () => {

  const { setName } = useParams();
  const { setId } = useParams();
  const [count, setCount] = useState(1);
  const [submit, setSubmit] = useState(false);
  const inputs = [];
const navigate = useNavigate();
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
    inputs.push(<FlashcardInput set_id= {setId} style={{overflowY: 'scroll', overflowX : 'none',overflowWrap: ''}} submit ={submit} key = {inputs.length} />);
  }
  return (
    <div>
      <div className='centered' style ={{margin: '1.5em'}}>
        <h1> {setName} </h1>
      </div>
      <Container style={{ display: 'grid', gap: '1em' }}>{inputs}</Container>
      <div className='centered' style={{ margin: '1em' }}>
        <Button
          variant='success'
          onClick={() => setCount(count + 1)}
          style={{ padding: '.5em 2em', textSize:'29px !important' }}
        >
          +
        </Button>
      </div>
      <div className='centered'>
        <Button
          variant='primary'
          onClick={() => {
            console.log('submit me', submit);
            return setSubmit(true);
            //  navigate(`/reviewset/${setId}`);
          }}
          style = {{padding: '2em 3em', margin:'1em'}}
        >
          {' '}
          Submit{' '}
        </Button>
      </div>
    </div>
  );
};

export default CreateSet;

import React, { useState, setShow, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams, useNavigate } from 'react-router-dom';
import UploadButton from './uploadButton.jsx';
const FlashcardInput = (props) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();
  // console.log(props)
  console.log(props.set_id);
  // useEffect(()=> {

  // navigate(`/reviewset/${setId}`);

  const makeCards = async () => {
    try {
      console.log(props.set_id);
      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify({
          question: question,
          answer: answer,
        }),
      };

      const res = await fetch(`/api/newflashcard/:${props.set_id}/${props.set_name}`, req);
      const data = await res.json();

      navigate(`/reviewset/${props.set_name}`);
    } catch (err) {
      console.log(err);
    }
  };
  //    ,[]);
  if (props.submit === true) makeCards();

  return (
    <div>
      <Row className='g-2'>
        <Col md>
          <FloatingLabel controlId='floatingInputGrid' label='Question'>
            <Form.Control
              type='text'
              placeholder='Question'
              onChange={(e) => setQuestion(e.target.value)}
            />
           <UploadButton/>
          </FloatingLabel>
        </Col>

        <Col md>
          <FloatingLabel controlId='floatingInputGrid' label='Answer'>
            <Form.Control
              type='text'
              placeholder='Answer'
              onChange={(e) => setAnswer(e.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>
    </div>
  );
};

export default FlashcardInput;

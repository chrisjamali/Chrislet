import React, { useState, setShow, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const FlashcardInput = (props) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

   console.log(question);

  const newFlash = async () => {
      
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
          set_id: set_id,
        }),
      };

      const res = await fetch(`/api/newflashcard/:${set_id}`, req);
      const data = await res.json();

    } catch (err) {
      console.log(err);
    }
   
  };
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
          </FloatingLabel>
        </Col>

        <Col md>
          <FloatingLabel controlId='floatingInputGrid' label='Answer'>
            <Form.Control
              type='text'
              placeholder='Answer'
              onChange={(e) => setAnswer(e.target.value)}
              onSubmit={newFlash}
            />
          </FloatingLabel>
        </Col>
      </Row>
    </div>
  );
};

export default FlashcardInput;

import React from 'react';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const FlashcardInput = () => {
  return (
    <div>
      <Row className='g-2'>
        <Col md>
          <FloatingLabel controlId='floatingInputGrid' label='Question'>
            <Form.Control type='text' placeholder='Questuon' />
          </FloatingLabel>
        </Col>

        <Col md>
          <FloatingLabel controlId='floatingInputGrid' label='Answer'>
            <Form.Control type='text' placeholder='Answer' />
          </FloatingLabel>
        </Col>
      </Row>
    
    </div>
  );
}

export default FlashcardInput
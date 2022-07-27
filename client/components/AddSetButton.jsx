import React, { useState, setShow,useEffect } from 'react';
import { Modal,Button, Form } from 'react-bootstrap';
import '../stylesheets/styles.css';

const AddSetButton = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
const [input,setInput] = useState('')

const getSetName = (e) =>{
  console.log('set NAME', e.target.value)
setInput(e.target.value)
}

const sendSetName = async (e) =>{

  try{
    console.log(input)
  e.preventDefault();
  // useEffect(() => {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({name: input}),
    };
  //  getSetName()
  const res = await fetch('/api/newset',req)
  const data = await res.json()
    // .then((resp) => resp.json())
    // .then((data) => {
    //   console.log(data);
    // })
  }catch(err){
      console.log(err)
    }
  // },[])
    // .then(() => {
    //   props.history.push('/');
    // });

}


  return (
    <div>
      <Button variant='outline-success' onClick={handleShow}>
        
         Create Set +
      </Button>

      <Modal className='my-modal' show={show} onHide={handleClose}>
        <Form.Label htmlFor='inputPassword5'>New Study Set</Form.Label>
        <Form.Control
          type='name'
          id='setName'
          aria-describedby='passwordHelpBlock'
          onChange = {getSetName}
        />
        <Form.Text id='passwordHelpBlock' muted>
          Please enter a name for your new set.
        </Form.Text>

        <Button as='input' type='submit' value='Submit' size = 'sm' onClick = {sendSetName}  />
      </Modal>
    </div>
  );
};

export default AddSetButton;

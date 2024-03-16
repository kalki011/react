import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import './login.css'


function Login() {
  return (
 

<div className=" ">
 
<div className="card-content">
  <h2 className="card-title "> Oauth</h2>
   <div className='sign'>
          <Form className='frm'>
          
       <Form.Group as={Row} className="mb-4"   controlId="formHorizontalEmail">
        <Form.Label column sm={2} className='cn'>
          Username:
        </Form.Label>
        <Col sm={8}>
          <Form.Control type="email" className='email' placeholder="Username" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4"   controlId="formHorizontalEmail">
        <Form.Label column sm={2} className=''>
        Password:
        </Form.Label>
        <Col sm={8}>
          <Form.Control type="password" className='email' placeholder="Password" />
        </Col>
      </Form.Group>
 
      <Button variant="primary" className='btn' type="submit">
      Submit
        </Button>
    </Form>
   {/* <Button variant='outline-dark'  className='btn'>Submit</Button> */}

   
</div>
</div>
</div>
    
  )
}

export default Login

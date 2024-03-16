import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Card from '../cards/Card';
 import axios from 'axios'
import Display from '../Display';
 import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Nav from '../Nav';

function Update() {
  const [emailId, setEmail] = useState('');
  const [clientName, setClientName] = useState('');

  const [appName, setAppName] = useState('');
  const [clientid, setClientid] = useState('');


  const [paths, setPaths] = useState('');
  // const pathList=paths.split(",")
  // console.log(pathList)
  
  const [formData,setFormData]=useState([])
  let [res,setRes]=useState([])
  const navigate = useNavigate();



    
  
  // const updatedemail = [...formData, emailId];
  // setFormData(updatedemail );

  // setEmail(' '); 
  // setFormData([...formData, clientName]);
  // setClientName(' '); 

  // setFormData([...formData, appName]);
  // setAppName(' '); 

  // setFormData([...formData, pathList]);
  // setPaths(' '); 


 
  // const formData=[]

  // formData.concat(emailId)

  const handleSubmit = (event) => {
    event.preventDefault();    
    console.log(formData[0])

  const headers = {
    // "Username": "AuthAuthenticator",
    // "Password": "In^en!0Cust0m0Auth"
    "Access-Control-Allow-Origin" : "*"
  };
axios.put("http://localhost:8081/updatePath",formData[0],headers)

  .then((response)=>{
    
    // console.log(response)
    console.log(response.status,"data")
     res=response.status
    console.log(res,"dattta")
     navigate('/display',{ state: { res: res } })
    },(error)=>{
     alert("Message: Entered wrong input details")
    }
    )
 
}

  // };
return (
  <>
  
  <Nav></Nav>
<div className=' sign container '>
  
  <Form onSubmit={handleSubmit}>
     

     <Form.Group as={Row} className="mb-3" onChange={(e) => setEmail(e.target.value)} controlId="formHorizontalEmail">
      <Form.Label column sm={2} className=''>
        Email:
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="email" placeholder="Email" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3 mx-8 " onChange={(e) => setClientName(e.target.value)} controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Client-name:
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="text" placeholder="clientName" />
      </Col>
    </Form.Group>
    
     <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">

    <Form.Group as={Row} className="mb-3 wi" onChange={(e) => setAppName(e.target.value)} controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Application-name:
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="text" placeholder="appName" />
      </Col>
    </Form.Group>  

    </Form.Group>
    <Form.Group as={Row} className="mb-3 mx-8 " onChange={(e) => setClientid(e.target.value)} controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Client-id:
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="text" placeholder="clientName" />
      </Col>
    </Form.Group>


    <Button variant="primary" type="submit" className='btn'  onClick={()=>{
      formData.push({
        emailId:emailId,
        clientName:clientName,
         appName:appName,
         clientid:clientid
        
      })
    }} >
      Submit
    </Button>

     
  </Form>
   {/* <Display data={}></Display> */}
  </div>
  

    
  </>
  
 )

}

export default Update

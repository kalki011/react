import React, { useState } from 'react'
import Nav from '../Nav'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Card from '../cards/Card';
import './SignUp.css'
import axios from 'axios'
import Display from '../Display';
 import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  
    const [emailId, setEmail] = useState('');
    const [clientName, setClientName] = useState('');

    const [appName, setAppName] = useState('');

    const [paths, setPaths] = useState('');
    const pathList=paths.split(",")
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
  
    const handleSubmit = async (event) => {
      event.preventDefault();    
      console.log(formData[0])

    //   const response = fetch('http://localhost:8081/createClient',
    //   { 
    //   method: 'POST', 
    //   mode: 'cors', 
    //   body: JSON.stringify(formData[0]) ,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    //   // console.log("the Response: ", response)

    // }/
    // console.log(response,"working"));
    const headers = {
      "Username":"AuthAuthenticator",
      "Password":"In^en!0Cust0m0Auth"
    }
   axios.post("http://localhost:8081/createClient",formData[0], {
    headers: headers
  })
   
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
        // axios({
  //   method: 'POST',
  //   url: 'http://localhost:8081/createClient',
  //   data: formData[0] ,
  //   headers: headers1
  // })
  // try {
  //   const response = await fetch('http://localhost:8081/createClient', {
  //     method: 'POST',
  //     headers: {
  //       "Username":"AuthAuthenticator",
  //       "Password":"In^en!0Cust0m0Auth",
  //       "Content-Type":"application/json"
         
  //     }, body:  JSON.stringify({ "emailId": "kalki@gmail.com",
  //     "clientName": "kalki@gmail.com",
  //     "appName": "kalki@gmail.com",
  //     "paths": [
  //       "kalki@gmail.com"
  //     ]

  //     })
  //   });

  //   console.log( )
  //   const responseData = await response.json();
  //   setRes(responseData);
  //   console.log(res,"dataaaaaaaaa")
  // } catch (error) {
  //   console.error('Error:', error);
  // }

              
     
 
    
 
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

      <Form.Group as={Row} className="mb-3 wi" onChange={(e) =>  setPaths(e.target.value)} controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Paths:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Paths" />
        </Col>
      </Form.Group>  
      </Form.Group>
        
      
        

 
      <Button variant="primary" type="submit" className='btn'  onClick={()=>{
        formData.push({
          emailId:emailId,
          clientName:clientName,
          pathList:pathList,
          appName:appName
          
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

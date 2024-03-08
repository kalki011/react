import React from 'react'
import update from './notes.png'
import data from './Carddata'
 import Button from 'react-bootstrap/Button';
 import Stack from 'react-bootstrap/Stack';
import { Router, useNavigate } from 'react-router-dom';

 

export default function Card( ) {
  const navigate = useNavigate();

  const handleClick = () => {
     navigate('/redirected');
  };
   return (
        <Stack direction="horizontal" gap={3}>
    <div className='direction'>
      { data.map((item)=>(

<div className="card">
<img  className="card-image" src={item.img}/>
<div className="card-content">
  <h2 className="card-title">{item.title}</h2>
  <p className="card-description"> {item.description}</p>
  <Button variant='outline-dark' onClick={handleClick}  className='btn'>{item.button}</Button>
</div>
</div>
      ))}
    </div>
      </Stack>
    
  )
}

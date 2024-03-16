import React from 'react'
import data from '../CardData/Carddata'
 import Button from 'react-bootstrap/Button';
 import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';
import update from './notes.png'



 

export default function Card( ) {
  const navigate = useNavigate();

  const handleClick = (title ) => {
    console.log( title,"kkl")
    console.log( `/home/${title}`)


     navigate(`/display`);
  };
   return (
        <Stack direction="horizontal" gap={3}>
    <div className='direction'>
      { data.map((item)=>(

<div className="card">
<img  className="card-image" src={item.img}/>
<div className="card-content">
  <h2 className="card-title ">{item.title}</h2>
  <p className="card-description  "> {item.description}</p>
  <Button variant='outline-dark' onClick={handleClick (item.navigate)} className='btn'>{item.button}</Button>
</div>
</div>
      ))}
    </div>
      </Stack>
    
  )
}

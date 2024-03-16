import React from 'react'
import Card from './cards/Card'
import { Nav } from 'react-bootstrap'
import './Display.css'
import { useLocation } from 'react-router-dom';

function Display() {
   const {state} = useLocation()
   const {res}=state ||{"ll": "kiii"}
   console.log(res)

  return (
<>
 <div class="card card2" id='card2'>
  
  <div class="card-body">
    <h5 class="card-title">Registration info</h5>

     
    {res==200 &&  <p class="card-text" className='success'> Client created successfully and credentials sent to your mail.</p>}
    
    {res!=200 &&  <p class="card-text" className='failure'> Sorry,something went wrong.</p>
}
   
 


 
   
   </div>
</div>
</>

   )
}

export default Display

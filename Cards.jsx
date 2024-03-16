import React from 'react'
import Card from './Card'
import './Cards.css';
import Carddata from '../CardData/Carddata'
import Stack from 'react-bootstrap/Stack';


export default function Cards() {
  return (
    

    <div className="p-2 " >
      <Card  className="p-2 " id="inc" data={Carddata}></Card>
       
    </div>
   )
}

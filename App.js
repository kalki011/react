import logo from './logo.svg';
import './App.css';
// import CCard from 'react-bootstrap/Card';
import {Card} from 'react-bootstrap';  
import Cards from './cards/Cards';
import Nav from './Nav';
 import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Display from './Display';
import Renewal from './Renewal/Renewal';
 import Update from './update/Update';
import Login from './Login/Login';
  // import { useLocation } from 'react-router-dom';
// const[res]=location.state
 

function App() {
  
  return (
  <Router>
  
    <Routes>

      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/display" element={<Display/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/home/renewal" element={<Renewal/>}/>
      <Route exact path="/home/update" element={<Update/>}/>
      <Route exact path="/home/signup" element={<SignUp/>}/>





    </Routes>
  </Router>
   
    
   
  );
}

export default App;

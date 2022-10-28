import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bind from './Binding'


let footer : any ={marginTop:'300px', color:'lightpurple',
fontSize:'16px', textShadow:'1px 1px White'}
let S3 =()=> {return (<img src={logo}/>)}
function App() {
  return (
    <>
    <S3/>
    <h3>HELLO REACT APP!!</h3>
    <hr/>
    <Bind/>
    <hr/>
    <h6 style ={footer}><hr/>@Copyright React</h6>
    </>
  
      
  );
}

export default App;

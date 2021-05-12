import React from 'react';
import styled, { keyframes } from 'styled-components';
import './App.css';
import Section from './components/Section'



const Title = {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent : 'center',
    alignItems: 'center',
    fontSize: '2.5vw',
    color: 'white',
    textShadow: '5px 5px 0px #eb452b',   
}


const App = () => {
  return (
    <div className="App">
            <div style={Title}>
                <h1>Week Progress Tracker</h1>
            </div>
            <Section day ={1} progress=""  text="Mon"/>
            <Section day ={2} progress=""  text="Tue"/>
            <Section day ={3} progress=""  text="Wed"/>
            <Section day ={4} progress=""  text="Thu"/>
            <Section day ={5} progress=""  text="Fri"/>
            <Section day ={6} progress=""  text="Sat"/>
            <Section day ={0} progress=""  text="Sun"/>
    </div>
  );
}


export default App;

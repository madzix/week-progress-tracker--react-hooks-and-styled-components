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
            <div >
                <Section day ={1} progress=""  text="Mon"/>
            </div>
            <div>
                <Section day ={2} progress=""  text="Tue"/>
            </div>
            <div>
                <Section day ={3} progress=""  text="Wed"/>
            </div>
            <div>
                <Section day ={4} progress=""  text="Thu"/>
            </div>
            <div>
                <Section day ={5} progress=""  text="Fri"/>
            </div>
            <div>
                <Section day ={6} progress=""  text="Sat"/>
            </div>
            <div>
                <Section day ={0} progress=""  text="Sun"/>
            </div>
    </div>
  );
}

export default App;

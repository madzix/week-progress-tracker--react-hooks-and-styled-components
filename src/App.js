import React from 'react';
import styled, { keyframes } from 'styled-components';
import './App.css';
import Section from './components/Section'

const Title = {
    opacity: '0',
    color: '#191919',
    fontSize: '2.5vw',
    animation: 'down .8s forwards',
    animationTimingFunction: 'cubic-bezier(0.280, 0.840, 0.420, 1)',
    animationDelay: '0.9s',
    fontFamily: 'Bree Serif, serif',
    letterSpacing: '3px'
}

const App = () => {
  return (
    <div className="App">
        <div className="container">
                <div style={Title}>
                    <h1>Week Progress<br></br><span>Tracker</span></h1>
                </div>
                <div >
                    <Section day ={1} progress=""  text="M"/>
                </div>
                <div>
                    <Section day ={2} progress=""  text="T"/>
                </div>
                <div>
                    <Section day ={3} progress=""  text="W"/>
                </div>
                <div>
                    <Section day ={4} progress=""  text="Th"/>
                </div>
                <div>
                    <Section day ={5} progress=""  text="F"/>
                </div>
                <div>
                    <Section day ={6} progress=""  text="Sa"/>
                </div>
                <div>
                    <Section day ={0} progress=""  text="Su"/>
                </div>
        </div>
    </div>
  );
}

export default App;

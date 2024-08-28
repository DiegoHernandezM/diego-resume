// src/App.js
import React from 'react';
import Navigation from './components/Navigation';
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import './App.css';

function App() {
    return (
        <div className="App">
            <Navigation />
            <div className="divider"></div>
            <section id="inicio"></section>
            <Home />
            <section id="experiencia"></section>
            <Timeline />
            <section id="habilidades"></section>
            <Experience />
            <section id="portafolio"></section>
            <Portfolio />
        </div>
    );
}

export default App;

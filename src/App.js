import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js';
import Header from './components/Header/Header.js';

class App extends Component {
  

  render() {
    return (
      <div>

      <Nav />

      <Header/>
    
      <Main/>


      <Footer imgsrc = {logo}/>  
      
     
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer';
import Friends from './components/Friends';
import Header from './components/Header';
import friends from './friends.json';

class App extends Component {
  state = {
     friends: friends,
     score: 0,
     topScore: 0
  }

  updateScore = () => {
    this.setState({score: this.state.score + 1 })
  }

  render() {
    return (
      <div>

      <Nav score={this.state.score} topScore={this.state.topScore}/>

      <Header/>
      


<main className="container">
{this.state.friends.map(friend =>
<Friends 
id = {friend.id}
key = {friend.id}
image = {friend.image} 
name={friend.name}
updateScore={this.updateScore}
/>
    )}
</main>
      


      <Footer imgsrc = {logo}/>  
      
     
      </div>
    )
  }
}

export default App;

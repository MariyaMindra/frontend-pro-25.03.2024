import './App.css';
import React, { Component } from 'react';
import {EmojiVote} from './Components/EmojiVote';


class App extends React.Component {
  render() {
    return (
        <div className="App">
          <EmojiVote />
        </div>
    );
  }
}

export default App;




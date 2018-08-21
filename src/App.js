import React, { Component } from 'react';
import SoundcloudPlayer from './components/SoundCloudPlayer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SoundcloudPlayer />
      </div>
    );
  }
}

export default App;

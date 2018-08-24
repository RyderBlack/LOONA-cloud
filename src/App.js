import React, { Component } from 'react';
import VideoPlayer from './components/VideoPlayer.js';
import './App.css';

//console.log(process.env.REACT_APP_APKY);
const KEYT = process.env.REACT_APP_APKY

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoList : []
    }
    //this.fetchYT = this.fetchYT.bind(this);
  }

  componentWillMount() {
   fetch(`https://www.googleapis.com/youtube/v3/search?key=${KEYT}&channelId=UCOJplhB0wGQWv9OuRmMT-4g&part=snippet,id&order=date&maxResults=20`)
      .then((response) => response.json() )
      .then((responseJson) => {
        //console.log(responseJson.items);
        this.setState({videoList: responseJson.items});
        
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <VideoPlayer />
      </div>
    );
  }
}

export default App;

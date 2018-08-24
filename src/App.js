import React, { Component } from 'react';
//import VideoPlayer from './components/VideoPlayer.js';
import VideosList from './components/VideosList';
import Header from './components/Header';

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
    //this.linkClicked = this.linkClicked.bind(this);
  }

  componentWillMount() {
   fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${KEYT}&playlistId=PLn2nfuATkZsQfG8no7wsG2t6GnYtAy8OB&part=snippet,id&order=date&maxResults=35`)
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
      <div>
        <Header />
        <VideosList videos={this.state.videoList} />
        <footer style={{"textAlign": "center", "marginTop": "5px"}}>
        <hr/>
          <p>Copyrights 2018 ⓒ BlockBerryCreative. All Rights Reserved. -  
            By <a className="credits" href="https://ryhad.com">Ryhad, Inc</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;

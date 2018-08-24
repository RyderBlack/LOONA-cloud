import React, { Component} from 'react';


export default class VideoPlayer extends Component {

  

  

  render() {

    let videoListLength = this.props.videos.length;

    for(let i=0; i < videoListLength; i++) {
      console.log(this.props.videos[i].snippet.resourceId.videoId, this.props.eventTar);
      if(this.props.eventTar === this.props.videos[i].snippet.resourceId.videoId) {
        
        return (
          <div key={this.props.videos[i].snippet.resourceId.videoId}>
            <iframe width="860" height="515" src={`https://www.youtube.com/embed/${this.props.videos[i].snippet.resourceId.videoId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p>{this.props.videos[i].snippet.title}</p>
          </div>
        )
      }
    }

    return(
      <div>
        <p>Select a title in the list.</p>
      </div>
  )

  }

}
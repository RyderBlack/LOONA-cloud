import React, { Component, Fragment} from 'react';


export default class VideoPlayer extends Component {

  render() {
    return (
      <Fragment>
      <p>Video title = </p>
      {this.props.videos.map((vid) => {
        //console.log(vid.snippet.resourceId.videoId);
        return (
          //<iframe key={vid.id.videoId} width="560" height="315" src={`https://www.youtube.com/embed/${vid.resourceId.videoId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <div key={vid.snippet.resourceId.videoId}>
          <img src={ vid.snippet.thumbnails.maxres ? `http://img.youtube.com/vi/${vid.snippet.resourceId.videoId}/maxresdefault.jpg` : `http://img.youtube.com/vi/${vid.snippet.resourceId.videoId}/hqdefault.jpg` } 
          alt={vid.snippet.title} />
            <p>{vid.snippet.title}</p>
          </div>
        )
      })
      }
      </Fragment>
    )
  }

}
import React, { Component, Fragment} from 'react';


export default class VideoPlayer extends Component {

  render() {
    return (
      <Fragment>
      <p>Video title = </p>
      {this.props.videos.map((vid) => {
        //console.log(vid.snippet.resourceId.videoId);
        return (
          //<img src={ vid.snippet.thumbnails.maxres ? `http://img.youtube.com/vi/${vid.snippet.resourceId.videoId}/maxresdefault.jpg` : `http://img.youtube.com/vi/${vid.snippet.resourceId.videoId}/hqdefault.jpg` } alt={vid.snippet.title} />
          <div key={vid.snippet.resourceId.videoId}>
          <iframe width="860" height="515" src={`https://www.youtube.com/embed/${vid.snippet.resourceId.videoId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          
            <p>{vid.snippet.title}</p>
          </div>
        )
      })
      }
      </Fragment>
    )
  }

}
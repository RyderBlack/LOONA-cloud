import React, { Component, Fragment} from 'react';


export default class VideoPlayer extends Component {

  render() {
    return (
      <Fragment>
      <p>Video title = </p>
      {this.props.videos.map((vid) => {
        return (
          <li key={vid.id.videoId}>{vid.snippet.title}</li>
        )
      })
      }
      </Fragment>
    )
  }

}
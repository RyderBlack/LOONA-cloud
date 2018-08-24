import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer';

export default class VideosList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            eventTarget : ''
        }
        this.linkClicked = this.linkClicked.bind(this);
      }

    linkClicked(e) {
        let idAttrib = e.target.getAttributeNode('id')
        let idAttribValue = idAttrib.value;
        let idAttribValue2 = idAttribValue.toString();
        
        this.setState({
            eventTarget : idAttribValue2
        })
        //console.log(this.state.eventTarget)
        //console.log(idAttribValue)
    }


    render() {
        return (
    <div className="row">
        <div className="col-md-4">
            <ul>
            {this.props.videos.map((vid) => {
                return ( <li key={vid.snippet.resourceId.videoId} id={vid.snippet.resourceId.videoId} onClick={(e) => this.linkClicked(e)}>{vid.snippet.title}</li> )
            })}
            </ul>
        </div>
        <div className="col-md-8">
            <VideoPlayer videos={this.props.videos} eventTar={this.state.eventTarget}/>
        </div>
    </div>
        )
    }
}

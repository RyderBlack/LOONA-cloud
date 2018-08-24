import React, { Component } from 'react';

export default class VideosList extends Component {
    render() {
        return (
            <ul>
            {this.props.videos.map((vid) => {
                return ( <li>{vid.snippet.title}</li> )
            })}
            </ul>
        )
    }
}

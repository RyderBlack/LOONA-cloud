import React, { Component } from 'react';
import moonLogo from '../moon.svg';

export default class VideosList extends Component {
    render() {
        return (
            <h1 className="header">LOOΠΔ <img src={moonLogo} className="moonlogo" alt="logo" /></h1>
        )
    }
}

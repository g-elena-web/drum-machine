import React, { Component } from "react";

import './volume.css';

export default class Volume extends Component {
    setVolume = (event) => {
        this.props.onChangeVolume(event.target.value);
    }
    
    render() {
        return (
            <input className="volume" type="range" min="0" max="100"
                value={this.props.volume} onChange={this.setVolume} />
        )
    }
}
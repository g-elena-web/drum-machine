import React, { Component } from "react";
import Display from "../display";
import Keys from "../keys";
import Volume from "../volume";

import './app.css';

export default class App extends Component {
    state = {
        sound: '-',
        volume: 50
    }

    changeSound = (sound) => {
        this.setState({
            sound
        });
    }

    setVolume = (volume) => {
        this.setState({
            volume
        })
    }

    render() {
        const { sound, volume } = this.state;
        return (
            <div className="app">
                <div className="drum-machine">
                    <Display current={sound} />
                    <Keys onPlaySound={this.changeSound} volume={volume} />
                    <Volume onChangeVolume={this.setVolume} volume={volume} />
                </div>
                <p className="credit">Audio provided by <a href="https://freewavesamples.com/">FreeWaveSamples</a></p>
            </div>
        )
    }
}
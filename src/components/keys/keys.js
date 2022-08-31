import React, { Component } from "react";
import music from "./sound-list.js";

import './keys.css';

export default class Keys extends Component {
    
    pressKey = (event) => {
        const pressedKey = event.target.value;
        this.playSound(pressedKey);

        const soundName = music.filter(el => el.key === pressedKey)[0].name;
        this.props.onPlaySound(soundName);

        const button = event.target;
        this.activateButton(button);
    }

    playSound = (key) => {
        const sound = document.getElementById(key);
        sound.currentTime = 0;
        sound.play();
    }

    activateButton = (button) => {
        button.classList.add("active");
        setTimeout(function(){button.classList.remove("active")}, 500);
    }

    pressLetterKey = (event) => {
        const key = event.key.toUpperCase();
        document.getElementById("btn" + key).click();
      }

    componentDidMount = () => {
        document.addEventListener("keypress", this.pressLetterKey);
    }

    componentDidUpdate = (prevProps) => {
        const { volume } = this.props;
        
        if (volume !== prevProps.volume) {
            Array.from(document.getElementsByClassName("clip")).forEach(clip => 
                clip.volume = volume / 100);
        }
    }

    render() {
        
        const pad = music.map(el => 
            <button className="drum-pad" id={"btn" + el.key} value={el.key} key={el.key} onClick={this.pressKey}>
                {el.key}
                <audio className="clip" id={el.key}>
                    <source type="audio/wav" src={el.src} />
                </audio>
            </button>
            );

        return (
            <div className="keys">
                {pad}
            </div>
        )
    }
}
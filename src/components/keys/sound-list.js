import bassDrum from "../../audio/bass-drum.wav";
import clap from "../../audio/clap.wav";
import crashCymbal from "../../audio/crash-cymbal.wav";
import floorTom from "../../audio/floor-tom.wav";
import openHiHat from "../../audio/open-hi-hat.wav";
import powerSnare from "../../audio/power-snare.wav";
import rideCymbal from "../../audio/ride-cymbal.wav";
import snare1 from "../../audio/snare-1.wav";
import snare2 from "../../audio/snare-2.wav";

const music = [
    {
      key: 'Q',
      name: 'Floor Tom',
      src: floorTom
    },
    {
      key: 'W',
      name: 'Bass Drum',
      src: bassDrum
    },
    {
      key: 'E',
      name: 'Clap',
      src: clap
    },
    {
      key: 'A',
      name: 'Snare 1',
      src: snare1
    },
    {
      key: 'S',
      name: 'Snare 2',
      src: snare2
    },
    {
      key: 'D',
      name: 'Power Snare',
      src: powerSnare
    },
    {
      key: 'Z',
      name: 'Crash Cymbal',
      src: crashCymbal
    },
    {
      key: 'X',
      name: 'Open Hi-Hat',
      src: openHiHat
    },
    {
      key: 'C',
      name: 'Ride Cymbal',
      src: rideCymbal
    }
  ];

export default music;
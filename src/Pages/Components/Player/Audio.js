import React, { useState, useEffect, useLayoutEffect } from "react";
import { Icon } from "react-icons-kit";
import './Audio.css'
import {
  ic_play_arrow,
  ic_pause,
} from "react-icons-kit/md/";

import { ProgressBar } from "./ProgressBar";
import { PlaylistContext } from "../../Store/playlist";

const getSecondsToMinutesAndSeconds = (time) => {
  if (time === 0) {
    return "0 : 00";
  }
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return `${minutes} : ${seconds<10?0:""}${seconds}`;
};

const iconStyles = {
  cursor: "pointer",
  color: "#fff",
  backgroundColor: "#008deb",
  borderRadius: "50%",
  padding:"5px"
};

export function Audio(props) {
  let audioPlayer;

  const [currentTrackMoment, setCurrentTrackMoment] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState("0");
  const [startPlaying, setStartPlaying] = useState(false)
  
  const handleTogglePlayer = () => {
      if(!startPlaying){
        props.setIsPlaying(false)
        setStartPlaying(true)
      }
     handlePlay()
  }

  const initPlayer = () => {
    audioPlayer = document.getElementById("audioPlayer");
  };

  const handlePlay = () => {
    if (audioPlayer.paused || audioPlayer.ended) {
      audioPlayer.play();
     props.setIsPlaying(true);
    } else {
      audioPlayer.pause();
     props.setIsPlaying(false);
    }
  };

  const handleTimeupdate = (playNext) => {
    setCurrentTrackMoment(Math.floor(audioPlayer.currentTime));
    setProgressBarWidth(
      Math.floor((audioPlayer.currentTime / audioPlayer.duration) * 100) + "%"
    );
    if (audioPlayer.currentTime === audioPlayer.duration) {
      playNext();
    }
  };

  useEffect(() => {
     audioPlayer.currentTime = props.data[props.currentTrack] ? props.data[props.currentTrack].time : 0;
    setCurrentTrackMoment(Math.floor(props.data[props.currentTrack] ? props.data[props.currentTrack].time : 0));
    setProgressBarWidth( Math.floor((audioPlayer.currentTime / audioPlayer.duration) * 100) + "%");
  startPlaying && handlePlay();
  }, [props.url]);

  useLayoutEffect(() => {
    initPlayer();
  });

  return (
    <PlaylistContext.Consumer>
      {(value) => (
        <div key={props.url} className='audio'>
          <audio
            id="audioPlayer"
            currentTime={20}
            preload="metadata"
            onTimeUpdate={() => handleTimeupdate(value.handleNextTrack)}
            className='audio-books'
          >
            <source src={props.url} type="audio/ogg" className="pop" />
            Ooops, your browser is sooo old.
          </audio>
          <div className="audioContainer">
            <Icon
              style={iconStyles}
              icon={props.isPlaying ? ic_pause : ic_play_arrow}
              onClick={handleTogglePlayer}
              size={30}
            />
            <ProgressBar progressPercent={progressBarWidth} width={"160px"} />
            <div className="counter">
              {getSecondsToMinutesAndSeconds(currentTrackMoment)}
            </div>
            {/* <Counter >{" "+`${currentTrackDuration}` || ' 0 : 00'}</Counter> */}
          </div>
        </div>
      )}
    </PlaylistContext.Consumer>
  );
}

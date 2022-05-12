//top.js

import React from "react";
import PropsTypes from "prop-types";
import { Audio } from "./Audio";
import "./Audio.css";

export function Top(props) {
  
  return (
    <div>
      <img src={props.track.cover} alt="cover" className="audio-image" />
      <div className="info">
        <div className="audio-title">{props.track.title}</div>
        <div className="author">{props.track.author}</div>
      </div>
      <div>
        <Audio
          url={props.track.url}
          currentTrack={props.currentTrackId}
          data={props.details}
          handlePlay={props.handlePlay}
          setIsPlaying={props.setIsPlaying}
          isPlaying={props.isPlaying}
        />
      </div>
    </div>
  );
}

Top.propTypes = {
  track: PropsTypes.object
};

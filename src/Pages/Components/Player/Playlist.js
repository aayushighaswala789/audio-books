import React from "react";

export function Playlist(props) {

  return (
    <div className="play-list-wrapper">
      <h2 className="heading">Table of contents</h2>
      {props.playlist.map((track) => (
        // <div>
        <div className="item"
          key={track.id}
          onClick={() => {
            props.onChangeTrack(track.id);
          }}
        >
          <div className="descr-wrapper">
            <div className="desc">
              <div className="track-number">{parseInt(track.title.slice(0, 2))}</div>
              <div className="track-title">{track.title.slice(3)}</div>
            </div>
            <img src={(props.currentTrackId === track.id) && props.isPlaying ? "/images/play.png" : "/images/audio-headphones.svg"} className='play' alt="cover" />
          </div >
        </div>
        // </div>
      ))}
    </div>
  );
}

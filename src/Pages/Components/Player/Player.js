//player.js

import React, { useState, useEffect, useLayoutEffect } from "react";
import { Playlist } from "./Playlist";
import { Top } from "./Top";
import { fetchPlaylist, PlaylistContext } from "../../Store/playlist";
import "./Audio.css"

export function Player() {

    const [playlist, setPlaylist] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [prevTrack, setPrevTrack] = useState(null);
    const [data, setData] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioPlayer = document.getElementById("audioPlayer");

    const handleChangeTrack = (id) => {
        setPrevTrack(currentTrack);
        setCurrentTrack(id);
    };

    const handleNextTrack = () => {
        if (currentTrack === playlist.length - 1) {
            setCurrentTrack(0);
            return;
        }

        setCurrentTrack(currentTrack + 1);
    };

    const handleFetchData = async () => {
        let tempData = [];
        const playlist = await fetchPlaylist();
        setPlaylist(playlist);
        playlist.forEach((element) => {
            tempData.push({ id: element.id, time: 0 });
        });
        setData(tempData);
    };

    useEffect(() => {
        handleFetchData();
    }, []);

    useEffect(() => {

        let newData = [...data];
        if (
            newData &&
            newData[prevTrack] &&
            (newData[prevTrack].time || newData[prevTrack].time === 0)
        )
            newData[prevTrack].time = audioPlayer && audioPlayer.currentTime;
        setData(newData);
    }, [prevTrack]);

    if (playlist.length === 0) {
        return (
            <div className="player-container">
                <div>loading...</div>
            </div >
        );
    }

    return (
        <div>
            <h2 className="title">Audiobook</h2>
            <div className="player-container">
                <PlaylistContext.Provider value={{ handleNextTrack }}>
                    <Top
                        track={playlist[currentTrack]}
                        currentTrackId={currentTrack}
                        details={data}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                    />
                    <Playlist onChangeTrack={handleChangeTrack} playlist={playlist} currentTrackId={currentTrack} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
                </PlaylistContext.Provider>
            </div>
        </div>
    );
}

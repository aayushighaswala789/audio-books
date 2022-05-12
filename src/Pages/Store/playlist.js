import React from "react";

const fetchedPlaylist = [
  {
    id: 0,
    title: "01 Lazy beat",
    author: "Before Coffee Drummer",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "/images/astrophysics-for-people-in-a-hurry-e-book.png"
  },
  {
    id: 1,
    title: "02 Blasting beat",
    author: "The ADHD Drummer",
    url:
      "https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3",
    cover: "https://via.placeholder.com/300/A89ACD"
  },
  {
    id: 2,
    title: "03 About you",
    author: "Before Coffee Drummer",
    url:
      "https://cdn.discordapp.com/attachments/775740994595323954/775741536591806484/Alan_Walker_-_Fade_NCS_ReleaseMP3_160K.mp3",
    cover: "https://via.placeholder.com/300/B6A2EB"
  }
];

// mock api request
export const fetchPlaylist = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(fetchedPlaylist), 1000);
  });
};

export const PlaylistContext = React.createContext();

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sound } from "../../utils/types";

interface AudioState {
  isPlay: boolean;
  isMute: boolean;
  songId: string;
  currentIndexPlaylist: number;
  infoSoundPlayer: sound;
  currentTime: number;
  duration: number;
  volume: number;
  isLoop: boolean;
  autoPlay: boolean;
  playlistSong: Array<object>;
  isLyric: boolean;
}

const initialSound: sound = {
  _id: "",
  createdAt: "",
  hashTag: [],
  listens: 0,
  lyric: [],
  main_sound: "",
  name: "",
  photo: "",
  preview_sound: "",
  price: 0,
  slug: "",
  user: null,
};

const initialState: AudioState = {
  isPlay: false,
  isMute: false,
  songId: localStorage.getItem("songId") || "",
  currentIndexPlaylist: 0,
  infoSoundPlayer: initialSound,
  currentTime: 0,
  duration: 0,
  volume: Number(localStorage.getItem("volume")) || 0.5,
  isLoop: false,
  autoPlay: false,
  playlistSong: [],
  isLyric: false,
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    changeIconPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload;
    },
    changeIconVolume: (state, action: PayloadAction<boolean>) => {
      state.isMute = action.payload;
    },
    setSongId: (state, action: PayloadAction<string>) => {
      state.songId = action.payload;
      localStorage.setItem("songId", action.payload);
    },
    setInfoSoundPlayer: (state, action: PayloadAction<object>) => {
      state.infoSoundPlayer = {
        ...action.payload,
      };
    },

    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setLoop: (state, action: PayloadAction<boolean>) => {
      state.isLoop = action.payload;
    },
    setAutoPlay: (state, action: PayloadAction<boolean>) => {
      state.autoPlay = action.payload;
    },
    setPlaylistSong: (state, action: PayloadAction<Array<object>>) => {
      state.playlistSong = action.payload;
    },
    setCurrentIndexPlaylist: (state, action: PayloadAction<number>) => {
      state.currentIndexPlaylist = action.payload;
    },
    setOpenLyric: (state, action: PayloadAction<boolean>) => {
      state.isLyric = action.payload;
    },
  },
});

export const {
  changeIconPlay,
  changeIconVolume,
  setSongId,
  setInfoSoundPlayer,
  setCurrentTime,
  setDuration,
  setVolume,
  setLoop,
  setAutoPlay,
  setPlaylistSong,
  setCurrentIndexPlaylist,
  setOpenLyric,
} = audioSlice.actions;
export default audioSlice.reducer;

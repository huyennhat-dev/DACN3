import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { playlist, sound } from "../../utils/types";
import { savePlaylist } from "../../utils/storage";

interface AudioState {
  isPlay: boolean;
  isMute: boolean;
  sound: sound;
  currentIndexPlaylist: number;
  infoSoundPlayer: sound;
  currentTime: number;
  duration: number;
  volume: number;
  isLoop: boolean;
  autoPlay: boolean;
  playlistSong: playlist | null;
  isLyric: boolean;
  isOpenPlaylist: boolean;
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
  sound: JSON.parse(localStorage.getItem("sound-play")!) || "",
  currentIndexPlaylist: 0,
  infoSoundPlayer: initialSound,
  currentTime: 0,
  duration: 0,
  volume: Number(localStorage.getItem("volume")) || 0.5,
  isLoop: false,
  autoPlay: false,
  playlistSong: null,
  isLyric: false,
  isOpenPlaylist: false,
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
    setSoundPlay: (state, action: PayloadAction<sound>) => {
      state.sound = action.payload;
      localStorage.setItem("sound-play", JSON.stringify(action.payload));
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
    setPlaylistSong: (state, action: PayloadAction<playlist>) => {
      state.playlistSong = action.payload;
      savePlaylist(JSON.stringify(action.payload));
    },
    setCurrentIndexPlaylist: (state, action: PayloadAction<number>) => {
      state.currentIndexPlaylist = action.payload;
    },
    setOpenLyric: (state, action: PayloadAction<boolean>) => {
      state.isLyric = action.payload;
    },
    setOpenPlaylist: (state, action: PayloadAction<boolean>) => {
      state.isOpenPlaylist = action.payload;
    },
  },
});

export const {
  changeIconPlay,
  changeIconVolume,
  setSoundPlay,
  setInfoSoundPlayer,
  setCurrentTime,
  setDuration,
  setVolume,
  setLoop,
  setAutoPlay,
  setPlaylistSong,
  setCurrentIndexPlaylist,
  setOpenLyric,
  setOpenPlaylist,
} = audioSlice.actions;
export default audioSlice.reducer;

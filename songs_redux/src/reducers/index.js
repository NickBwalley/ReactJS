import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "My land is Kenya", duration: "4:05" },
    { title: "Yummy", duration: "3:15" },
    { title: "South of the Border", duration: "4:30" },
    { title: "1000 Nights", duration: "2:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});

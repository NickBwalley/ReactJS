//Action creators
// this is a named export
export const selectSong = (song) => {
  // return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

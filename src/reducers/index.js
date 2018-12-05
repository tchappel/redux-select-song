import { combineReducers } from "redux";

// Reducers

const songsReducer = () => {
  return [
    {
      title: "Time",
      duration: "4:05"
    },
    {
      title: "Love Me Two Times",
      duration: "3:01"
    },
    {
      title: "Time Is on My Side",
      duration: "3:50"
    },
    {
      title: "Good Times Roll",
      duration: "2:58"
    },
    {
      title: "Time After Time",
      duration: "4:05"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return (selectedSong = action.payload);
  } else {
    return selectedSong;
  }
};

// Here we combine our set of reducers
// pass object to combineReducers method
// the keys of this object are the keys that will show up in our state
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

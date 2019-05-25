import { combineReducers } from 'redux';
const songsList = () => {
  return [
    { title: 'Macarena', duration: '4:05' },
    { title: 'All Stars', duration: '2:30' },
    { title: 'No Scrubs', duration: '3:30' },
    { title: 'I Want It That Way', duration: '3:00' },
  ];
};

const selectedSong = (selectedSong = null, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsList,
  selectedSong: selectedSong,
});

import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ selectedSong }) => {
  if (selectedSong) {
    return (
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">{selectedSong.title}</div>
            <div className="description">Duration: {selectedSong.duration}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Select a song</div>;
  }
};

const mapStateToProps = state => {
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetails);

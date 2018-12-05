import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongsList extends Component {
  renderList() {
    return this.props.songs.map(song => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <div
            className="ui button"
            onClick={() => this.props.selectSong(song)}
          >
            Select
          </div>
        </div>
        <div className="content">{song.title}</div>
      </div>
    ));
  }
  render() {
    return (
      <div className="ui middle aligned divided list">{this.renderList()}</div>
    );
  }
}
const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongsList);

import React, { Component } from "react";
import SongsList from "./SongsList";
import SongDetails from "./SongDetails";

class App extends Component {
  render() {
    return (
      <div className="ui two column centered grid">
        <div className="column" />
        <div className="four column centered row">
          <div className="column">
            <SongsList />
          </div>
          <div className="column">
            <SongDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './TrackList.css';

import TrackList from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
      {
        this.props.tracks.map(track => {
          return (
            <div>
              <Track track = {track} key={track.id} onAdd = {this.props.onAdd} onRemove = {this.props.onRemove} isRemoval = {this.props.isRemoval}/>

              <p>{this.props.track.name}</p>
              <p>{this.props.track.artist}</p>
              <p>{this.props.track.album}</p>
            </div>
          )
        })
      }

      </div>
    );
  }
}


export default TrackList;

import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
      {
        this.props.tracks.map(track => {
          return (
            <div>
              <Track track = {track}
              key={track.id}
              onAdd = {this.props.onAdd}
              onRemove = {this.props.onRemove}
              isRemoval = {this.props.isRemoval} />
            </div>
          )
        })
      }
      </div>
    );
  }
}


export default TrackList;

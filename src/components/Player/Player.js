import React from 'react';
import './Player.scss';
import playersShape from '../../helpers/propz/playersShape';

class Player extends React.Component {
  static propTypes = {
    player: playersShape.playersShape,
  }

  render() {
    const { player } = this.props;

    return (
      <div className="Player col-2 mb-2">
        <div className="card">
          <img className="card-img-top" src={player.imageUrl} alt="player"/>
          <div className="card-body">
            <h5 className="card-title">{player.name}</h5>
            <p className="card-text">{player.position}</p>
        </div>
      </div>
      </div>
    );
  }
}

export default Player;

import React from 'react';
import PropTypes from 'prop-types';
import './Player.scss';
import playersShape from '../../helpers/propz/playersShape';

class Player extends React.Component {
  static propTypes = {
    player: playersShape.playersShape,
    removePlayers: PropTypes.func.isRequired,
    editAPlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, removePlayers } = this.props;
    removePlayers(player.id);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { editAPlayer, player } = this.props;
    editAPlayer(player);
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
            <button className="btn btn-danger" onClick={this.deletePlayerEvent}><i className="fas fa-dumpster"></i></button>
            <button className="btn btn-warning" onClick={this.editPlayerEvent}><i className="fas fa-pencil-alt"></i></button>
        </div>
      </div>
      </div>
    );
  }
}

export default Player;

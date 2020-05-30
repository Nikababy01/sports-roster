import React from 'react';
import PropTypes from 'prop-types';

import './TeamForm.scss';
import authData from '../../helpers/data/authData';

class TeamForm extends React.Component {
  static propTypes = {
    saveNewPlayer: PropTypes.func.isRequired,
  }

  state = {
    playerImageUrl: '',
    playerName: '',
    playerPosition: '',
    isEditing: false,
  }

  componentDidMount() {
    const { player } = this.props;
    if (player.name) {
      this.setState({
        playerName: player.name, playerImageUrl: player.imageUrl, playerPosition: player.position, isEditing: true,
      });
    }
  }

  savePlayer = (e) => {
    e.preventDefault();
    const { playerImageUrl, playerName, playerPosition } = this.state;
    const { saveNewPlayer } = this.props;
    const newPlayer = {

      imageUrl: playerImageUrl,
      name: playerName,
      position: playerPosition,
      uid: authData.getUid(),
    };
    saveNewPlayer(newPlayer);
  }

  updatePlayer= (e) => {
    e.preventDefault();
    const { player, putPlayer } = this.props;
    const { playerImageUrl, playerName, playerPosition } = this.state;
    const updatedPlayer = {
      imageUrl: playerImageUrl,
      name: playerName,
      position: playerPosition,
      uid: authData.getUid(),
    };
    putPlayer(player.id, updatedPlayer);
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ playerImageUrl: e.target.value });
  }

  render() {
    const {
      playerImageUrl, playerName, playerPosition, isEditing,
    } = this.state;

    return (
      <div className="TeamForm">
        <form className=" col-6 offset-3">
          <div className="form-group">
            <label htmlFor="player-name"></label>
            <input
             type="text"
             className="form-control"
             id="player-name"
             placeholder="Jordan"
             value={playerName}
             onChange={this.nameChange}
             />
        </div>
        <div className="form-group">
            <label htmlFor="player-position"></label>
            <input
             type="text"
             className="form-control"
             id="player-position"
             placeholder="Shooting Guard"
             value={playerPosition}
             onChange={this.positionChange}
             />
        </div>
        <div className="form-group">
            <label htmlFor="player-image"></label>
            <input
             type="text"
             className="form-control"
             id="player-image"
             placeholder="Add Image"
             value={playerImageUrl}
             onChange={this.imageUrlChange}
             />
        </div>
        { isEditing
          ? <button className="btn btn-dark" onClick={this.updatePlayer}>Update Player</button>
          : <button className="btn btn-dark" onClick={this.savePlayer}>Save Player</button>
      }
        </form>
      </div>
    );
  }
}

export default TeamForm;

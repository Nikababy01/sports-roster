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
    const { playerImageUrl, playerName, playerPosition } = this.state;

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
        <button className="btn btn-dark" onClick={this.savePlayer}>Save Player</button>
        </form>
      </div>
    );
  }
}

export default TeamForm;

import React from 'react';
import './Team.scss';

import playersData from '../../helpers/data/playersData';
import authData from '../../helpers/data/authData';

import Player from '../Player/Player';
import TeamForm from '../TeamForm/TeamForm';


class Team extends React.Component {
  state = {
    players: [],
    formOpen: false,
  }

  getAllPlayers = () => {
    const { playersId } = this.props;
    playersData.getPlayersByUid(authData.getUid(playersId))
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('unable to get all players: ', err));
  }

  componentDidMount() {
    this.getAllPlayers();
  }

  removePlayers = (playersId) => {
    playersData.deletePlayer(playersId)
      .then(() => this.getAllPlayers())
      .catch((err) => console.error('could not delete player: ', err));
  }

  saveNewPlayer = (newPlayer) => {
    playersData.savePlayer(newPlayer)
      .then(() => {
        this.getAllPlayers();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('unable to save player: ', err));
  }

  render() {
    const { players, formOpen } = this.state;

    const makePlayers = players.map((player) => <Player key={player.id} player={player} removePlayers={this.removePlayers}/>);

    return (
      <div className="Team">
        <h2 className="text-center">Starting Players</h2>
        <button className="btn btn-warning" onClick={() => this.setState({ formOpen: true })}><i className="fas fa-plus"></i></button>
        { formOpen ? <TeamForm saveNewPlayer={this.saveNewPlayer}/> : ''}
        <div className="d-flex flex-wrap">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default Team;

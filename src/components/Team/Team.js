import React from 'react';
import './Team.scss';

import playersData from '../../helpers/data/playersData';
import authData from '../../helpers/data/authData';

import Player from '../Player/Player';


class Team extends React.Component {
  state = {
    players: [],
  }

  getInfo = () => {
    const { playersId } = this.props;
    playersData.getPlayersByUid(authData.getUid(playersId))
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('unable to get all players: ', err));
  }

  componentDidMount() {
    this.getInfo();
  }

  removePlayers = (playersId) => {
    playersData.deletePlayer(playersId)
      .then(() => this.getInfo())
      .catch((err) => console.error('could not delete player: ', err));
  }

  render() {
    const { players } = this.state;
    const makePlayers = players.map((player) => <Player key={player.id} player={player} removePlayers={this.removePlayers}/>);

    return (
      <div className="Team">
        <h2 className="text-center">Starting Players</h2>
        <div className="d-flex flex-wrap">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default Team;

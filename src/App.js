import React, { Component } from 'react';

import SelectWeapon from './components/SelectWeapon/SelectWeapon';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import ScoreHistory from './components/ScoreHistory/ScoreHistory';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      computer: this.getComputerPick(),
      games: [],
      score: this.getScore
    }
  }
  
getComputerPick = () => {
  let options = ["ROCK", "PAPER", "SCISSORS"];
  return options[Math.floor(Math.random() * 3)];
}

getScore =  {
    total: 0,
    wins: 0,
    losses: 0
  }

checkSelections = (option) => {
  let game = {};
  let games = this.state.games;
  var score = this.state.score; 

  if (this.state.computer === option) {
    game.result = 1;
  } else if ( (this.state.computer === "ROCK" && option === "PAPER") || 
              (this.state.computer === "PAPER" && option === "SCISSORS") ||
              (this.state.computer === "SCISSORS" && option === "ROCK") ) {
    game.result = 2;
    score.wins++;
  } else {
    game.result = 0;
    score.losses++;
  }

  game.computer = this.state.computer;
  game.player = option;
  score.total += game.result;

  games.push(game);
  
  let random = this.getComputerPick();

  this.setState({games, computer: random});
}

restartGame = (e) => {
  this.setState({ games: [] });
}
  
render() {
  return (
    <div>   
      <SelectWeapon checkSelections={this.checkSelections} />
      <ScoreBoard scores={this.state.games} restart={this.restartGame}/>
      <ScoreHistory games={this.state.games} />
    </div>
  )
}
}

export default App;
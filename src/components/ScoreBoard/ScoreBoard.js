import React from 'react';

const scoreBoard = (props) => {
    let stats = props.scores.reduce((stats, game) => {
        if (game.result === 2) {
          stats.won++;
        } else if (game.result === 1) {
          stats.tie++;
        } else if (game.result === 0) {
          stats.lost++
        }
        return stats
      }, {won:0, lost: 0, tie: 0});
  
      let message = 'Make your choice!';
      let alertClass = '';
      if (props.scores.length) {
      
        var game = props.scores[props.scores.length - 1];
        if (game.result === 1) {
          message = 'Result: You tied. Try again!';
        } else if (game.result === 2) {
          message = 'Result: Victory! '+ game.player + ' beat ' + game.computer + '!';
          alertClass = 'won';
        } else {
          message = 'Result: Defeat! '+ game.computer + ' beat ' + game.player + '!';
          alertClass = 'lost'
        }
      }
    
    return (
      <div>
        <div className="text-center">
          <h4 className="caps">Score</h4>
        </div>            
        <nav className="navbar navbar-default">
          <div className="container-fluid gameInfo" style={{ display: 'block'}}>
            <div className="row text-center">
              <div className="col-sm-6">
                <h4 className={alertClass}><span><strong>{message}</strong></span></h4>
              </div>
              <div className="col-sm-2 text-center-large">
                <h4 style={{ color: 'green'}}>Won: <span><strong>{stats.won}</strong></span></h4>
              </div>
              <div className="col-sm-2 text-center-large">
                <h4 style={{ color: 'red'}}>Lost: <span><strong>{stats.lost}</strong></span></h4>
              </div>
              <div className="col-sm-2 text-center-large">
                <h4>Tie: <span><strong>{stats.tie}</strong></span></h4>
              </div>
            </div>
          </div>
        </nav>
        <button className="btn btn-danger" onClick={props.restart}>Restart game</button>
      </div>
    )
  }

  export default scoreBoard;
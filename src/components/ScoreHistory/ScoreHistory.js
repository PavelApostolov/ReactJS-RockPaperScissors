import React from 'react';

const scoreHistory = (props) => {
    let games = props.games.map((game, i)=>{
      let gameResult;
      if (game.result === 0) {
        gameResult = 'Lost';
      } else if (game.result === 2) {
        gameResult = 'Won';
      } else {
        gameResult = 'Tie';
      }
      return (
        <tr key={i}>
          <td>{game.player}</td>
          <td>{game.computer}</td>
          <td>{gameResult}</td>
        </tr>
      )
    }).reverse();

    return (
      <table className="table table-sm table-striped">
      <caption>Games history</caption>
        <thead className="thead-dark" style={{textAlign: 'center'}}>
          <tr>
            <th scope="col">Human</th>
            <th scope="col">Machine</th>
             <th scope="col">Result</th>
          </tr>
        </thead>
        <tbody style={{textAlign: 'center' }}>
          {games}
        </tbody>
      </table>
    )
  }

  export default scoreHistory;
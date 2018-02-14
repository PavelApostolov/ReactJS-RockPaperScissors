import React from 'react';
import './SelectWeapon.css';

import paper from './../../assets/paper.png'
import rock from './../../assets/rock.png'
import scissors from './../../assets/scissors.png'

const selectWeapon = (props) => (
          <div className="selections-container">
            <h4>Select your weapon of mass destruction!</h4> 
            <div className="btn-container">
              <button onClick={props.checkSelections.bind(this, 'ROCK')}><img className="weapon-img" src={rock} alt="Rock" />Rock</button>
            </div>
            <div className="btn-container">
              <button onClick={props.checkSelections.bind(this, 'PAPER')}><img className="weapon-img" src={paper} alt="Paper"/>Paper</button> 
            </div>
            <div className="btn-container">
              <button onClick={props.checkSelections.bind(this, 'SCISSORS')}><img className="weapon-img" src={scissors} alt="Scissors"/>Scissors</button>
            </div>
        </div>
    )
export default selectWeapon;
import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Game from './Game';
import SelectWeapon from './SelectWeapon/SelectWeapon';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import ScoreHistory from './ScoreHistory/ScoreHistory';

configure({adapter: new Adapter()});

describe('<Game />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Game />);
    });

    it('should render selection buttons', () => {
    expect(wrapper.find(SelectWeapon)).toHaveLength(1);
});
    it('should render scoreboard', () => {
    expect(wrapper.find(ScoreBoard)).toHaveLength(1);
});
    it('should render score history', () => {
    expect(wrapper.find(ScoreHistory)).toHaveLength(1);
});
});
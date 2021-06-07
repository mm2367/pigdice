import {shallow} from "enzyme";
import * as React from "react";
import {GameScoreBoard} from "./GameScoreBoard";

describe('Gameboard Score', () => {
    it('shuold update Winners and be sorted', () => {
        const winnerBoard = [{id: 0, totalScore: 92}, {id: 1, totalScore: 99}];
        let wrapper = shallow((<GameScoreBoard  className={'mt-5'} winnerBoard={winnerBoard}/>));
        expect(wrapper.html()).toContain('<td>Player 2</td><td>99</td></tr><tr><td>Player 1</td><td>92</td>')
        expect(wrapper.html()).not.toContain('<td>Player 1</td><td>92</td></tr><tr><td>Player 2</td><td>99</td>')
    })
});

import {shallow} from "enzyme";
import {PlayerCards} from "./PlayerCards";
import * as React from "react";

describe('PlayPigDice', () => {
    it('should update number of Players if players increase', () => {
        const threePlayers = [{id: 0, score: 0, isActive: true}, {id: 1, score: 0, isActive: false}, {
            id: 2,
            score: 0,
            isActive: false
        }];
        let wrapper = shallow((<PlayerCards players={threePlayers} turnScore={0} diceFeedback={''}/>));
        expect(wrapper.html()).toContain('Player 3')
    });
    it('should show current score', () => {
        const threePlayers = [{id: 0, score: 88, isActive: true}, {id: 1, score: 0, isActive: false}, {
            id: 2,
            score: 0,
            isActive: false
        }];

        let wrapper = shallow((<PlayerCards players={threePlayers} turnScore={99} diceFeedback={''}/>));
        expect(wrapper.html()).toContain('<div>Current Score: </div><div class="ml-2">99')
    })
});

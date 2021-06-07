import {shallow} from "enzyme";
import * as React from "react";
import {Die} from "./Die";


describe('Die', () => {
    let wrapper;

    it('should have Die shaking classname when rolling is true', () => {
        wrapper = shallow((<Die face={"one"} rolling={true}/>))
        expect(wrapper.html()).toContain('Die-shaking');
    })
    it('should not have Die shaking classname when rolling is true', () => {
        wrapper = shallow((<Die face={"one"} rolling={false}/>))
        expect(wrapper.html()).not.toContain('Die-shaking');
    })
    it('should render svg icon corresponding to face',()=>{
        wrapper = shallow((<Die face={"five"} rolling={false}/>))
        expect(wrapper.html()).toContain('fa-dice-five');
        expect(wrapper.html()).not.toContain('fa-dice-four');


    })
});

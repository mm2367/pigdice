import {BrowserRouter, Route, Switch} from "react-router-dom";
import * as React from 'react';
import {Welcome} from "./Welcome";
import {PlayPigDice} from "./PlayPigDice";

export const Routes = () => {
    return (
        <BrowserRouter basename={'/'}>
            <Switch/>
            <Route exact={true} path={'/'} component={Welcome}/>
            <Route exact path={'/pigdice'} component={PlayPigDice}/>
        </BrowserRouter>

    )
};

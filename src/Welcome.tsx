import * as React from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import {staticTexts} from "./staticText";
import Icon from "@iconify/react";
import pigIcon from '@iconify-icons/mdi/pig';
export interface WelcomeDispatchProps {

}

export type WelcomeProps = WelcomeDispatchProps & RouteComponentProps;
export const Welcome: React.FunctionComponent<WelcomeProps> = (props: WelcomeProps) => {
    return (
        <div className={'welcome container my-5 py-5'}>
            <div className={'d-flex justify-content-center align-items-center'}>
                <Icon icon={pigIcon} color="pink" width={60} height={60} />
                <h1 className={'d-flex justify-content-center align-items-center my-4'}>Let's Play Pig Dice</h1>
                <Icon icon={pigIcon} color="pink" width={60} height={60} />
            </div>
            <h2 className={'text-center'}>Rules</h2>
            <ul>
                <li>{staticTexts.rules.howToWin}</li>
            <ul>
                <li>{staticTexts.rules.ruleOne}</li>
                <ul>
                    <li>{staticTexts.rules.ruleOneA}</li>
                </ul>
                <li>{staticTexts.rules.ruleTwo}</li>
                <li>{staticTexts.rules.ruleThree}</li>
                <li>{staticTexts.rules.ruleFour}</li>
            </ul>
            </ul>
            <div className={'d-flex justify-content-center'}>
                <Link className={'btn btn-primary d-flex align-items-center justify-content-center my-'} to={'pigdice'}>Let's Play!</Link>
            </div>
        </div>

    )
};


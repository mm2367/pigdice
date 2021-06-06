import * as React from "react";
import {Player} from "./PigDiceTypes";

export interface PlayerCardProps {
    players: Player[]
    turnScore: number;
    diceFeedback: string;
}

export const PlayerCards: React.FunctionComponent<PlayerCardProps> = (props: PlayerCardProps) => {
    let playerCards = [];
    for (let playerIndex = 0; playerIndex < props.players.length; playerIndex++) {
        playerCards.push(
            <div className={'w-50 player-heading player-heading_player-one text-center' +
            `${props.players[playerIndex].isActive ? ' active' : ''}`}>
                <div className={'d-flex align-items-center justify-content-center'}>
                    <div>{`Player ${playerIndex + 1} :`}</div>
                    <div className={'ml-2'}>{props.players[playerIndex].score}</div>
                </div>
                <div className={'d-flex justify-content-center subtitle'}>
                    <div>{'Current Score: '}</div>
                    <div className={'ml-2'}>
                        {props.players[playerIndex].isActive ? props.turnScore : 0}
                    </div>
                </div>
                <div className={'message-placeholder subtitle'}>
                    {props.players[((playerIndex + 1) % props.players.length)].isActive && props.diceFeedback}</div>
            </div>);
    }
    return (
        <div className={'mt-5 d-flex px-5 align-items-center text-uppercase'}>
            {playerCards}
        </div>
    )
};

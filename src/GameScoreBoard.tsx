import * as React from "react";
import {Winner} from "./PigDiceTypes";

export interface GameScoreBoardStateProps {
    winnerBoard: Winner[];
    className?:string
}

export const GameScoreBoard: React.FunctionComponent<GameScoreBoardStateProps> = (props: GameScoreBoardStateProps) => {
    let gameBoard;
    if (props.winnerBoard && props.winnerBoard.length > 0) {
        const sortedWinnerBoard=props.winnerBoard.sort((first, second) => {
            return second['totalScore'] - first['totalScore'];
        });
            gameBoard = sortedWinnerBoard.map((items) => {
                return (
                    <tr>
                        <td>Player {items.id + 1}</td>
                        <td>{items.totalScore}</td>
                    </tr>
                )
            })
        }

    return (
        <div className={'game-score-board '+ props.className}>
            <h3 className={'text-center'}>Game Score Board</h3>
           <div>
               <table className={'w-100'}>
                <thead className={'text-center'}>
                <tr>
                    <th>Players</th>
                    <th>Total Score</th>
                </tr>
                </thead>
                <tbody className={'text-center'}>
                {gameBoard}
                </tbody>
            </table>
           </div>
        </div>


    )

}

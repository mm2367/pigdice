import * as React from "react";
import {Die, face} from "./Die";
import RefreshIcon from '@material-ui/icons/Refresh';
import ReactTooltip from "react-tooltip";
import {staticTexts} from "./staticText";
import {PlayerCards} from "./PlayerCards";
import {GameScoreBoard} from "./GameScoreBoard";
import {Player, Winner} from "./PigDiceTypes";
import LaunchIcon from '@material-ui/icons/Launch';
import {RulesModal} from "./RulesModal";

export const PlayPigDice: React.FunctionComponent = () => {
    const [dice, setDice] = React.useState<face[]>(["one", "one"]);
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [turnScore, setTurnScore] = React.useState<number>(0);
    const [activePlayerID, setActivePlayerID] = React.useState<number>(0);
    const [winner, setWinner] = React.useState<Player>(null);
    const [message, setMessage] = React.useState('');
    const [rolling, setRolling] = React.useState(false);
    const [numPlayers, setNumPlayer] = React.useState<number>(2);
    const [listOfWinners, setListOfWinners] = React.useState<Winner[]>([]);
    const [players, setPlayers] = React.useState<Player[]>([{id: 0, score: 0, isActive: true}, {
        id: 1,
        score: 0,
        isActive: true
    }]);
    const pointMappings = {"one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6};
    const faces: face[] = ["one", "two", "three", "four", "five", "six"];

    React.useEffect(() => {
        let initPlayers: Player[] = [];

        for (let index = 0; index < numPlayers; index++) {
            initPlayers.push({id: index, score: 0, isActive: index === 0})
        }
        setPlayers(initPlayers);
    }, [numPlayers]);
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.target && (e.target as Element).className === 'modal') {
            setShowModal(false);
        }
    };
    React.useEffect(() => {
        document.addEventListener('click', handleKeyDown);
        return () => document.removeEventListener('click', handleKeyDown);
    });
    const rollDice = () => {
        setRolling(true);
        let dice = [faces[Math.floor(Math.random() * faces.length)], faces[Math.floor(Math.random() * faces.length)]]
        setDice(dice);
        let pointOne = pointMappings[dice[0]];
        let pointTwo = pointMappings[dice[1]];
        setTurnScore(turnScore + pointOne + pointTwo);
        validateTurn(pointOne, pointTwo)
        setTimeout(() => {
            setRolling(false)
        }, 1000)
    };

    const validateTurn = (diceOneVal: number, diceTwoVal: number): void => {
        let updatedPlayers: Player[] = [...players];
        if (diceOneVal === 1 && diceTwoVal === 1) {
            updatedPlayers[activePlayerID % updatedPlayers.length].score = 0;
            setMessage(staticTexts.diceFeedback.snakeEyes);
            holdTurn(updatedPlayers, false)
        } else if (diceTwoVal === 1 || diceOneVal === 1) {
            setMessage(staticTexts.diceFeedback.oneRolled);
            holdTurn(updatedPlayers, false)
        } else {
            setMessage('');
        }
        setPlayers(updatedPlayers);
    };

    const updateWinner = (player: Player, updateListOfWinners: Winner[]) => {
        let playerIndex;
        setWinner(player);
        updateListOfWinners.forEach((obj, index) => {
            if (obj.id === player.id) {
                playerIndex = index;
            }
        })
        if (playerIndex !== undefined) {
            updateListOfWinners[playerIndex].totalScore += player.score
        } else {
            updateListOfWinners.push({id: player.id, totalScore: player.score})
        }
        setListOfWinners(updateListOfWinners);
    };

    const holdTurn = (currPlayers: Player[], selfHold: boolean) => {
        let updatedPlayers: Player[] = [...currPlayers];
        let updateListOfWinners: Winner[] = listOfWinners ? [...listOfWinners] : [];
        setActivePlayerID(updatedPlayers.filter((player) => player.isActive)[0].id);
        updatedPlayers.forEach((player) => {
            if (player.isActive && selfHold) {
                player.score += turnScore;
                player.isActive = false;
                if (player.score >= 10) {
                    updateWinner(player, updateListOfWinners)
                }
            } else if (player.id === ((activePlayerID + 1) % updatedPlayers.length)) {

                player.isActive = true
            }
        });
        if (selfHold) {
            setMessage('')
        }
        updatedPlayers[activePlayerID % updatedPlayers.length].isActive = false;
        setActivePlayerID(activePlayerID + 1);
        setTurnScore(0);
        setPlayers(updatedPlayers);
    };
    const reset = () => {
        let updatedPlayers: Player[] = [...players];
        setWinner(null);
        players.forEach((player) => {
            player.score = 0;
            player.isActive = player.id === 0;
        });
        setTurnScore(0);
        setDice(['one', 'one']);
        setMessage('');
        setActivePlayerID(0);
        setPlayers(updatedPlayers);

    };
    const handleNumOfPlayersChange = (event) => {
        setNumPlayer(parseInt(event.target.value));
        reset();
    };
    const handleModalClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        setShowModal(!showModal)

    };
    const holdButtonDisabled = (dice[0] === dice[1] && dice[0] !== "one") || winner !== null;
    return (
        <React.Fragment>
            <div className={'container pig-dice'}>
                <h1 className={'text-center text-uppercase'}>{winner ? `Player ${winner.id + 1} Wins!` : 'Pig Dice'}</h1>
                <div className={'d-flex justify-content-center mt-2'}><label>Enter Number of Players (2-4):
                    <input data-testid='player-input' type={"number"} max={4} min={2} defaultValue={2}
                           name={'numberOfPlayers'}
                           onChange={(event) => handleNumOfPlayersChange(event)}/>
                    <ReactTooltip id={'rules'} place={'bottom'}
                                  effect={'solid'}>{'View Rules'}</ReactTooltip>
                    <span className={'launch-icon ml-2'} data-tip={'rules'}
                          data-for={'rules'}
                          onClick={(e: React.MouseEvent<HTMLSpanElement>) => handleModalClick(e)}><LaunchIcon/></span>
                </label>
                </div>
                <PlayerCards players={players} turnScore={turnScore} diceFeedback={message}/>
                <div className={'d-flex justify-content-center'}>
                    <Die face={dice[0]} rolling={rolling}/>
                    <Die face={dice[1]} rolling={rolling}/>
                </div>
                <div className={'d-flex justify-content-center align-items-center'}>
                    <button className={'mx-4'} data-testid='roll-button' disabled={winner !== null}
                            onClick={() => rollDice()}>Roll
                    </button>
                    <RefreshIcon htmlColor={"#E18D96"} data-tip={'refresh'} data-for={'refresh'}
                                 onClick={() => reset()}/>
                    <ReactTooltip id={'refresh'} place={'bottom'}
                                  effect={'solid'}>{'Start new game'}</ReactTooltip>
                    <div data-tip={'disabled-hold'} data-for={'disabled-hold'}>{holdButtonDisabled ?
                        <ReactTooltip id={'disabled-hold'} place={'bottom'}
                                      effect={'solid'}>{winner ? staticTexts.holdButtonText.winnerDeclared : staticTexts.holdButtonText.doublesHold}</ReactTooltip> :
                        <div/>}
                        <button className={'mx-4'} data-testid='hold-button' onClick={() => holdTurn(players, true)}
                                disabled={holdButtonDisabled}>Hold
                        </button>
                    </div>
                </div>
                <GameScoreBoard className={'mt-5'} winnerBoard={listOfWinners}/>
            </div>
            <RulesModal show={showModal}/>
        </React.Fragment>
    )
};

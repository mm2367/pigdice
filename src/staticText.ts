export const staticTexts={
    rules:{

        ruleOne: 'If neither die show a 1, the sum of both dice is added to their turn total,\n' +
            '            and the player’s turn continues unless they choose to “hold”',
        ruleOneA: ' A “hold” will end their turn and apply the sum of all rolls from that\n' +
            '            turn (the “turn score”) to their “total score” (generally represents\n' +
            '            the score accrued across turns - read on. . . )',
        ruleTwo: ' If the player rolls a 1 on either die, they add nothing to their total score\n' +
            '            and it becomes the next player’s turn',
        ruleThree: 'If BOTH dice show 1’s (“snake eyes”), the player scores nothing on their\n' +
            '            turn, their total score goes to 0, and their turn ends',
        ruleFour: 'If any double (matching die except for “snake eyes”) is rolled, the sum of\n' +
            '            the dice rolled is added to the turn total, as with any roll, but the player\n' +
            '            does not have the option to “hold” and must roll again.'
    },
    holdButtonText: {
        doublesHold: 'Hold is disabled after rolling doubles',
        winnerDeclared: 'Game is Over.Please Start New Game'
    },
    diceFeedback:{
        snakeEyes: 'Oh No! You rolled Snake Eyes',
        oneRolled:'Oh No! You rolled a One',
    }
}

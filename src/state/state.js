import { List, Map } from "immutable";
import { isWordInWordList, solution } from "../lib/words";

export const LAST_PLAYING_CELL = 4;

export const winningWord_ = (word) =>
    new Map([...word].map((x, idx) => [x, idx]));

export const genInitialState = () => ['1', '2', '3', '4', '5', '6'].map(
    x => [
        x, List(
            [
                { state: 'Empty', character: '', flipped: false },
                { state: 'Empty', character: '', flipped: false },
                { state: 'Empty', character: '', flipped: false },
                { state: 'Empty', character: '', flipped: false },
                { state: 'Empty', character: '', flipped: false }
            ]
        )
    ]
);

export const gameState =
{
    cellCharacterMap: Map(genInitialState()),
    currentlyPlayingRow: '1',
    currentlyPlayingCell: 0,
    event: 'NoModal',
    animationsTrigger: [false, null],
    gameStatus: 'CurrentlyPlaying',
    winningWordMap: winningWord_(solution),
}


import React, { useState } from 'react';
import { View, Text, Dimensions, Button } from 'react-native';
import Column from './Column';

const ROWS = 6;
const COLS = 7;

var board = new Array(ROWS).fill(-1).map(() => new Array(COLS).fill(-1));

const canPlaceToken = (numRow, numCol) => {
	if (board[numRow][numCol] !== -1) return false;
	for (let i = numRow + 1 ; i < ROWS ; i++) {
		if (board[i][numCol] === -1) return false;
	}
	return true;
}

const Board = () => {

	const [getCurrentPlayer, changeCurrentPlayer] = useState(0);

	const clickHandler = (numRow, numCol) => {
		if (canPlaceToken(numRow, numCol)) {
			board[numRow][numCol] = getCurrentPlayer;
			changeCurrentPlayer(1 - getCurrentPlayer);
			return getCurrentPlayer;
		}
		else {
			return -1;
		}
	};

	return (
		<View>
			<View style={{
				flex: 1,
				backgroundColor: 'blue',
				flexDirection: 'row',
				justifyContent: 'space-evenly',
				alignItems: 'center',
			}}>
				<Text style={{
					fontSize: Dimensions.get('window').width / 10,
					textAlign: 'center',
					color: '#eee',
				}}>
					Current Player:
				</Text>
				<View style={{
					width: 50,
					height: 50,
					borderRadius: 50,
					backgroundColor: getCurrentPlayer === 0 ? 'red' : 'yellow',
					borderWidth: 1,
					borderColor: 'black'
				}}></View>
			</View>
			<View style={{
				flex: 9,
				flexDirection: 'row',
				backgroundColor: 'blue',
				width: '100%',
				height: '100%',
				justifyContent: 'space-evenly',
			}}>

				<Column columnHandler={clickHandler} num={0} />
				<Column columnHandler={clickHandler} num={1} />
				<Column columnHandler={clickHandler} num={2} />
				<Column columnHandler={clickHandler} num={3} />
				<Column columnHandler={clickHandler} num={4} />
				<Column columnHandler={clickHandler} num={5} />
				<Column columnHandler={clickHandler} num={6} />

			</View>
		</View>
	);
};

export default Board;

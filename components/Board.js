import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Column from './Column';

const ROWS = 6;
const COLS = 7;

const Board = () => {
	const clickHandler = (numRow, numCol) => {
		console.log(numRow, numCol);
	};
	
	return (
		<View style={{
			flexDirection: 'row',
			backgroundColor: 'blue',
			width: '100%',
			height: '100%',
			justifyContent: 'space-evenly',
		}}>

			<Column columnHandler={clickHandler} num={1}/>
			<Column columnHandler={clickHandler} num={2}/>
			<Column columnHandler={clickHandler} num={3}/>
			<Column columnHandler={clickHandler} num={4}/>
			<Column columnHandler={clickHandler} num={5}/>
			<Column columnHandler={clickHandler} num={6}/>
			<Column columnHandler={clickHandler} num={7}/>

		</View>
	);
};

export default Board;

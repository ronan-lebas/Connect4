import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Token from './Token';

const Column = (props) => {
    const tokenHandler = (numRow) => {
        props.columnHandler(numRow, props.num);
    };
    
    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Token handler={tokenHandler} num={1}></Token>
            <Token handler={tokenHandler} num={2}></Token>
            <Token handler={tokenHandler} num={3}></Token>
            <Token handler={tokenHandler} num={4}></Token>
            <Token handler={tokenHandler} num={5}></Token>
            <Token handler={tokenHandler} num={6}></Token>
        </View>
    );
};

export default Column;
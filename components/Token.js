import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

const Token = (props) => {
    const [getColor, setColor] = useState(-1);
    const tokenHandler = (num) => {
        let ret = props.handler(num);
        if (ret !== -1) setColor(ret);
    };
    return (
        <>
            <Pressable 
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: getColor === -1 ? 'white' : getColor === 0 ? 'red' : 'yellow',
                    borderWidth: 1,
                    borderColor: 'black'
                }}
                disabled={getColor !== -1}
                onPress={() => {
                    tokenHandler(props.num);
                }}
            >
            </Pressable>
        </>
    );
};


export default Token;
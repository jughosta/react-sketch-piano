import React from 'react';
import { View, Text } from 'react-sketchapp';
import PropTypes from 'prop-types';

import { PIANO_PADDING, PIANO_BACKGROUND } from '../config';
import Keyboard from './Keyboard';

const Piano = ({ keyboardSize }) => (
    <View
        name={`Piano ${keyboardSize} keys`}
        style={{
            margin: 10,
            padding: PIANO_PADDING,
            paddingTop: PIANO_PADDING / 2,
            backgroundColor: PIANO_BACKGROUND,
            borderRadius: 10
        }}
    >
        <Text
            style={{
                fontSize: 72,
                fontFamily: 'SignPainter',
                fontWeight: 'bold',
                color: '#fff',
                paddingBottom: PIANO_PADDING / 2
            }}
        >
            {`Piano Keyboard ${keyboardSize}`}
        </Text>
        <Keyboard keys={keyboardSize}/>
    </View>
);

Piano.propTypes = {
    keyboardSize: PropTypes.oneOf([12, 25, 49, 61, 76, 88])
};

export default Piano;
import React from 'react';
import { View } from 'react-sketchapp';
import PropTypes from 'prop-types';

import { KEY_MARGIN, KEY_WIDTH, KEY_HEIGHT, COLOR_WHITE_KEY, COLOR_SHADOW } from '../config';
import BlackKey from './BlackKey';

const WhiteKey = ({ withSharp }) => (
    <View
        name="White Key"
        style={{
            width: KEY_WIDTH,
            height: KEY_HEIGHT,
            marginHorizontal: KEY_MARGIN,
            backgroundColor: COLOR_WHITE_KEY,
            borderRadius: Math.round(KEY_WIDTH * 0.1),
            shadowColor: COLOR_SHADOW,
            shadowOffset: {
                width: 0,
                height: KEY_MARGIN * 2
            },
            shadowRadius: 0,
            shadowOpacity: 1
        }}
    >
        {
            withSharp &&
            <BlackKey/>
        }
    </View>
);

WhiteKey.propTypes = {
    withSharp: PropTypes.bool
};

WhiteKey.defaultProps = {
    withSharp: false
};

export default WhiteKey;
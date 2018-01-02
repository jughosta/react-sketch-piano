import React from 'react';
import { View } from 'react-sketchapp';

import { KEY_MARGIN, KEY_WIDTH, KEY_HEIGHT, COLOR_BLACK_KEY, COLOR_SHADOW } from '../config';

const BlackKey = () => {
    const blackKeyWidth = Math.round(KEY_WIDTH * 2 / 3);
    const blackKeyHeight = Math.round(KEY_HEIGHT * 2 / 3);
    const borderRadius = Math.round(blackKeyWidth * 0.1);
    return (
        <View
            name="Black Key"
            style={{
                position: 'absolute',
                top: 0,
                right: -Math.round(blackKeyWidth / 2) - KEY_MARGIN,
                width: blackKeyWidth,
                height: blackKeyHeight,
                backgroundColor: COLOR_BLACK_KEY,
                borderBottomLeftRadius: borderRadius,
                borderBottomRightRadius: borderRadius,
                shadowColor: COLOR_SHADOW,
                shadowOffset: {
                    width: KEY_MARGIN * 2,
                    height: 0
                },
                shadowRadius: 0,
                shadowOpacity: 1
            }}
        />
    );
};

export default BlackKey;
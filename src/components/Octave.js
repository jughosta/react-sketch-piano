import React from 'react';
import { View } from 'react-sketchapp';
import PropTypes from 'prop-types';

import { KEY_MARGIN } from '../config';
import WhiteKey from './WhiteKey';

const Octave = ({ index }) => {
    const octaveProps = {
        name: `Octave #${index}`,
        style: {
            flexDirection: 'row',
            flexWrap: 'nowrap',
            paddingVertical: KEY_MARGIN
        }
    };

    if (index === 0) {
        return (
            <View {...octaveProps}>
                <WhiteKey withSharp/>
                <WhiteKey/>
            </View>
        )
    }

    if (index === 8) {
        return (
            <View {...octaveProps}>
                <WhiteKey/>
            </View>
        )
    }

    return (
        <View {...octaveProps}>
            <WhiteKey withSharp/>
            <WhiteKey withSharp/>
            <WhiteKey/>
            <WhiteKey withSharp/>
            <WhiteKey withSharp/>
            <WhiteKey withSharp/>
            <WhiteKey/>
        </View>
    );
};

Octave.propTypes = {
    index: PropTypes.number
};

Octave.defaultProps = {
    index: 4
};

export default Octave;
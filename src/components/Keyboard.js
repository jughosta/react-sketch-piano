import React from 'react';
import { View } from 'react-sketchapp';
import PropTypes from 'prop-types';

import Octave from './Octave';
import WhiteKey from './WhiteKey';

const Keyboard = ({ keys }) => {
    const keyboardProps = {
        name: `Keyboard ${keys} keys`,
        style: {
            flexDirection: 'row',
            flexWrap: 'nowrap'
        }
    };

    if (keys === 12) {
        return (
            <View {...keyboardProps}>
                <Octave index={4} />
            </View>
        );
    }

    if (keys === 25) {
        return (
            <View {...keyboardProps}>
                <Octave index={3} />
                <Octave index={4} />
                <WhiteKey/>
            </View>
        );
    }

    if (keys === 49) {
        return (
            <View {...keyboardProps}>
                <Octave index={2} />
                <Octave index={3} />
                <Octave index={4} />
                <Octave index={5} />
                <WhiteKey/>
            </View>
        );
    }

    if (keys === 61) {
        return (
            <View {...keyboardProps}>
                <Octave index={2} />
                <Octave index={3} />
                <Octave index={4} />
                <Octave index={5} />
                <Octave index={6} />
                <WhiteKey/>
            </View>
        );
    }

    if (keys === 76) {
        return (
            <View {...keyboardProps}>
                <WhiteKey/>
                <WhiteKey withSharp/>
                <WhiteKey withSharp/>
                <WhiteKey withSharp/>
                <WhiteKey/>
                <Octave index={2} />
                <Octave index={3} />
                <Octave index={4} />
                <Octave index={5} />
                <Octave index={6} />
                <WhiteKey withSharp/>
                <WhiteKey withSharp/>
                <WhiteKey/>
                <WhiteKey withSharp/>
                <WhiteKey/>
            </View>
        );
    }

    if (keys === 88) {
        return (
            <View {...keyboardProps}>
                <Octave index={0} />
                <Octave index={1} />
                <Octave index={2} />
                <Octave index={3} />
                <Octave index={4} />
                <Octave index={5} />
                <Octave index={6} />
                <Octave index={7} />
                <Octave index={8} />
            </View>
        );
    }

    return null;
};

Keyboard.propTypes = {
    keys: PropTypes.oneOf([12, 25, 49, 61, 76, 88])
};

export default Keyboard;
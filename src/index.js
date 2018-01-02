import React from 'react';
import { render, Artboard, View } from 'react-sketchapp';

import { ARTBOARD_BACKGROUND, ARTBOARD_PADDING } from './config';
import Piano from './components/Piano';

const Document = () => (
    <Artboard
        name="Piano"
        style={{
            alignItems: 'flex-start',
            padding: ARTBOARD_PADDING,
            backgroundColor: ARTBOARD_BACKGROUND
        }}
    >
        <Piano keyboardSize={88}/>
        <Piano keyboardSize={76}/>
        <Piano keyboardSize={61}/>
        <Piano keyboardSize={49}/>
        <Piano keyboardSize={25}/>
        <Piano keyboardSize={12}/>
    </Artboard>
);

export default () => {
    render(<Document/>, context.document.currentPage());
};

import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { GlobalStyle } from '../src/shared/global';

// jsx => tsx
const req = require.context('../src/components', true, /\.stories.tsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

// Option defaults:
addParameters({
    options: {
        isFullscreen: false,
        isToolshown: true,
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});

addDecorator(withA11y);

// Add global style
addDecorator(Story => (
    <>
        <GlobalStyle />
        {Story()}
    </>
));

configure(loadStories, module);
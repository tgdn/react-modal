import React from 'react'
import {configure, addDecorator} from '@kadira/storybook';
import '../css/index.sass'
import '../css/btn.sass'

function loadStories() {
    require('../components/stories/modal');
}

addDecorator((story) => (
    <div style={{maxWidth: '1000px', minWidth: '300px', width: '90%', margin: 'auto'}}>
        {story()}
    </div>
))

configure(loadStories, module);

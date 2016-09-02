import React from 'react';
import {storiesOf} from '@kadira/storybook'

import {
    ModalContent,
    ModalComposite,
    Modal,
} from '../../src'

import {Example, ExampleComposite} from '../../example'

storiesOf('Modal', module)
    .add('Basic', () => (
        <ModalComposite>
            <button className='btn'>This is a button</button>
            <Modal visible keyboard={false} canClose={false} closeOnClick={false}>
                <ModalContent>
                    <h3>A fully working example</h3>
                    <p>
                        The modal itself is rendered on a different DOM location
                        appended to the body.
                    </p>
                </ModalContent>
            </Modal>
        </ModalComposite>
    ))
    .add('Modal no Composite', () => (
        <Modal visible canClose={false} closeOnClick={false}>
            <ModalContent>
                <h3>This one is just rendered where you want</h3>
                <p>
                    Notice there is no close button on the top right,
                    and clicking on the backdrop does not close the modal either.
                </p>
            </ModalContent>
        </Modal>
    ))
    .add('Full example', () => (
        <Example />
    ))
    .add('Full example Modal Composite', () => (
        <ExampleComposite />
    ))

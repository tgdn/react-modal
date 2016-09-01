import React from 'react';
import {storiesOf} from '@kadira/storybook'

import {
    ModalDialog,
    ModalBackdrop,
    ModalContent,
    Modal,
} from '../../src'

import {Example, ExampleComposite} from '../../example'

storiesOf('Modal', module)
    .add('Basic', () => (
        <ModalDialog>
            Hello
        </ModalDialog>
    ))
    .add('Backdrop', () => (
        <ModalBackdrop>
            <ModalDialog canClose>
                <ModalContent>
                    Hello
                </ModalContent>
            </ModalDialog>
        </ModalBackdrop>
    ))
    .add('Full modal', () => (
        <Modal visible canClose={false} closeOnClick={false}>
            <ModalContent>
                <h3>Welcome all</h3>
                <p>
                    It's a wonderful day, have some lemonade
                    <br />
                    <br />
                    Notice there is no close button on the top right,
                    and clicking on the backdrop does not close the modal either.
                </p>
                <p>
                    <b>Do something else</b>
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

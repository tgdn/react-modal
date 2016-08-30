import React from 'react'

import {
    ModalDialog,
    ModalBackdrop,
    ModalContent,
    Modal
} from '../src'

class Example extends React.Component {
    closeOnClick(e) {
        e.preventDefault()
        this.modal.hide()
    }

    showDialog(e) {
        e.preventDefault()
        this.modal.show()
    }

    render() {
        return (
            <div>
                <button className='btn' href='#' onClick={this.showDialog.bind(this)}>open</button>
                <Modal
                    visible
                    ref={(c) => this.modal = c}>
                    <ModalContent>
                        This is an example
                        <br />
                        <br />
                        <button className='btn' onClick={this.closeOnClick.bind(this)}>Close with a button</button>
                    </ModalContent>
                </Modal>
            </div>
        )
    }
}
export {Example}
export {ExampleComposite} from './composite'

import React from 'react'

import {
    ModalDialog,
    ModalBackdrop,
    ModalContent,
    Modal,
    ModalComposite
} from '../src'

class ExampleComposite extends React.Component {
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
            <ModalComposite>
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
            </ModalComposite>
        )
    }
}
export {ExampleComposite}

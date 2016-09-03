import React from 'react'

import {
    ModalDialog,
    ModalBackdrop,
    ModalContent,
    Modal,
} from '../src'

class Example extends React.Component {
    constructor(props) {
        super(props)
        this.closeOnClick = this.closeOnClick.bind(this)
        this.showDialog = this.showDialog.bind(this)
    }

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
                <button
                    className='btn'
                    href='#'
                    onClick={this.showDialog}
                >
                    open
                </button>
                <Modal
                    visible
                    ref={(c) => {this.modal = c}}
                >
                    <ModalContent>
                        This is an example of non composite,
                        you can close it and open it again.
                        <br />
                        Source is at <b>example/index.js</b>
                        <br />
                        <br />
                        <button
                            className='btn'
                            onClick={this.closeOnClick}
                        >
                            Close with a button
                        </button>
                    </ModalContent>
                </Modal>
            </div>
        )
    }
}
export {Example}
export {ExamplePortal} from './portal'

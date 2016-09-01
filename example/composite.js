import React from 'react'

import {
    ModalContent,
    Modal,
    ModalComposite,
} from '../src'

class ExampleComposite extends React.Component {

    constructor(props) {
        super(props)
        this.closeOnClick = this.closeOnClick.bind(this)
        this.showDialog = this.showDialog.bind(this)
    }

    closeOnClick() {
        this.modal.hide()
    }

    showDialog() {
        this.modal.show()
    }

    render() {
        return (
            <ModalComposite>
                <button className='btn' onClick={this.showDialog}>open</button>
                <Modal ref={(c) => {this.modal = c}}>
                    <ModalContent>
                        This is an example
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
            </ModalComposite>
        )
    }
}
export {ExampleComposite}

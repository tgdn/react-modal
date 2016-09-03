import React from 'react'

import {
    ModalContent,
    Modal,
    ModalPortal,
} from '../src'

class ExamplePortal extends React.Component {

    constructor(props) {
        super(props)
        this.closeOnClick = this.closeOnClick.bind(this)
        this.showDialog = this.showDialog.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    state = {
        text: '',
    }

    closeOnClick() {
        this.modal.hide()
    }

    showDialog() {
        this.modal.show()
    }

    handleChange(e) {
        this.setState({
            text: e.target.value,
        })
    }

    render() {
        // console.log(this.renderCount++);
        // console.log(this.modal && this.modal);
        // this.modal && this.modal.forceUpdate()
        return (
            <span>
                <button className='btn' onClick={this.showDialog}>open</button>
                <ModalPortal>
                    <Modal ref={(c) => {this.modal = c}}>
                        <ModalContent>
                            <h3>This modal is composite</h3>
                            You can close it and open it again
                            <br />
                            Source is at <b>example/composite.js</b>
                            <br />
                            <br />

                            {this.state.text}
                            <input value={this.state.text} onChange={this.handleChange} />
                            <button
                                className='btn'
                                onClick={this.closeOnClick}
                            >
                                Close with a button
                            </button>
                        </ModalContent>
                    </Modal>
                </ModalPortal>
            </span>
        )
    }
}
export {ExamplePortal}

import React from 'react'
import ReactDOM from 'react-dom'

import {ModalDialog} from './Dialog'
import {ModalBackdrop} from './Backdrop'

class Modal extends React.Component {

    constructor(props) {
        super(props)

        this.hide = this.hide.bind(this)
        this.show = this.show.bind(this)
        this.handleOutsideClick = this.handleOutsideClick.bind(this)
        this.handleKeyboard = this.handleKeyboard.bind(this)
    }

    state = {
        visible: false,
        closeOnClick: false,
    }

    componentWillMount() {
        const {
            visible,
            closeOnClick,
        } = this.props

        this.setState({
            visible,
            closeOnClick,
        })
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick, true)
        document.addEventListener('keydown', this.handleKeyboard, true)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, true)
        document.removeEventListener('keydown', this.handleKeyboard, true)
    }

    handleOutsideClick(e) {
        const domNode = ReactDOM.findDOMNode(this.dialog)
        if ((!domNode || !domNode.contains(e.target)) && this.state.closeOnClick) {
            this.hide()
        }
    }

    handleKeyboard(event) {
        if (this.props.keyboard && (typeof this.props.keyboard) === 'function') {
            this.props.keyboard(event)
        } else if (this.props.keyboard) {
            if (
                event.key === 'Escape' ||
                event.keyCode === 27) {
                this.hide()
            }
        }
    }

    hide() {
        // delegate hide
        this.setState({
            visible: false,
        })
    }

    show() {
        this.setState({
            visible: true,
        })
    }

    render() {
        const {
            children,
            canClose,
        } = this.props

        return this.state.visible && (
            <ModalBackdrop ref={(c) => {this.backdrop = c}}>
                <ModalDialog
                    ref={c => {this.dialog = c}}
                    canClose={canClose}
                    hideHandler={this.hide}
                >
                    {children}
                </ModalDialog>
            </ModalBackdrop>
        )
    }
}

Modal.propTypes = {
    children: React.PropTypes.node,
    visible: React.PropTypes.bool,
    closeOnClick: React.PropTypes.bool,
    keyboard: React.PropTypes.oneOfType([
        React.PropTypes.func,
        React.PropTypes.bool,
    ]),
    canClose: React.PropTypes.bool,
    beforeClose: React.PropTypes.func,
    beforeShow: React.PropTypes.func,
    hasClosed: React.PropTypes.func,
    hasShown: React.PropTypes.func,
}

Modal.defaultProps = {
    visible: false,
    closeOnClick: true,
    keyboard: true,
    canClose: true,
}

export {Modal}
